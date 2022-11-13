import {
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonLabel,
  IonInput,
  IonItem,
  IonList,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import DiscussionContext from "../contexts/DiscussionContext";
import UserContext from "../contexts/UserContext";

const DiscussionBoard: React.FC = () => {
  /* Start User Info */
  //Check if logged in
  function hasJWT() {
    let flag = false;
    //check user has JWT token
    localStorage.getItem("myUserToken") ? (flag = true) : (flag = false);
    return flag;
  }
  function parseJwt(token) {
    if (!token) {
      return;
    }
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    return JSON.parse(window.atob(base64));
  }

  //get current user
  function getUserFromToken() {
    if (hasJWT()) {
      let user = localStorage.getItem("myUserToken");
      let userToken = parseJwt(user);
      return userToken.userId;
    }
  }

  let getSingleUser = getUserFromToken();

  //Use User Context
  let { user, getOneUser } = useContext(UserContext);

  useEffect(() => {
    async function fetch() {
      await getOneUser(getSingleUser).then((user) => setUsers(user));
    }
    fetch();
  }, [getSingleUser, getOneUser]);

  let { userId, username, name, roleId, householdName } = user;

  const [users, setUsers] = useState({
    userId: userId,
    username: username,
    name: name,
    roleId: roleId,
    householdName: householdName,
  });

  /* End User Info */

  let [newPost, setNewPost] = useState({
    headline: "",
    content: "",
  });

  //console.log(newPost);

  let { deletePost, addPost } = useContext(DiscussionContext);

  let history = useHistory();

  function handleChange(event: any) {
    setNewPost((prevValue) => {
      return { ...prevValue, [event.target.name]: event.target.value };
    });
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    addPost(newPost).then(() => {
      history.push("/discussion");
      window.location.reload();
    });
  }

  function removeDiscussion(discussionId: any) {
    deletePost(discussionId)
      .then(() => {
        history.push("/discussion");
        window.location.reload();
      })
      .catch((error: any) => {
        history.push("/discussion");
        console.log(error);
      });
  }
  function viewEditDiscussion(discussionId: any) {
    history.push(`/discussion/${discussionId}`);
    window.location.reload();
  }

  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonGrid>
          <IonRow class="ion-padding ion-text-center">
            <IonCol size="12">
              <h1>Family Discussion</h1>
            </IonCol>
          </IonRow>
          <UserContext.Consumer>
            {({ user }) => {
              if (hasJWT() && users.roleId === "parent") {
                return (
                  <IonRow class="ion-padding ion-text-center">
                    <IonCol size="12">
                      <h2>Add Discussion</h2>
                      <form onSubmit={handleSubmit} className="dissSubmit">
                        <IonItem>
                          <IonLabel position="stacked">
                            Discussion Headline
                          </IonLabel>
                          <IonInput
                            type="text"
                            placeholder="Headline"
                            name="headline"
                            value={newPost.headline}
                            onIonChange={handleChange}
                          />
                        </IonItem>
                        <IonItem>
                        <IonLabel position="stacked">Content</IonLabel>
                          <IonInput
                            type="text"
                            placeholder="Start Post Here"
                            name="content"
                            value={newPost.content}
                            onIonChange={handleChange}
                          />
                        </IonItem>
                        <IonButton type="submit" expand="block">
                          Add Post
                        </IonButton>
                      </form>
                    </IonCol>
                  </IonRow>
                );
              } else {
                return <p></p>;
              }
            }}
          </UserContext.Consumer>

          <IonRow class="ion-padding">
            <IonCol size="12">
              <IonList className="dissContent">
                <DiscussionContext.Consumer>
                  {({ discussion }) => {
                    return (
                      <div>
                        {discussion.map((p: any) => {
                          return (
                            <IonCard key={p.discussionId}>
                              <IonCardHeader>
                                <IonCardSubtitle>{p.headline}</IonCardSubtitle>
                                <IonCardTitle>{p.content}</IonCardTitle>
                              </IonCardHeader>
                              <IonCardContent>
                                <IonButton
                                  color="tertiary"
                                  onClick={() =>
                                    viewEditDiscussion(`${p.discussionId}`)
                                  }
                                >
                                  Edit Post
                                </IonButton>
                                <IonButton
                                  color="danger"
                                  onClick={() =>
                                    removeDiscussion(`${p.discussionId}`)
                                  }
                                >
                                  Delete Post
                                </IonButton>
                              </IonCardContent>
                            </IonCard>
                          );
                        })}
                      </div>
                    );
                  }}
                </DiscussionContext.Consumer>
              </IonList>
            </IonCol>
          </IonRow>
        </IonGrid>
        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default DiscussionBoard;
