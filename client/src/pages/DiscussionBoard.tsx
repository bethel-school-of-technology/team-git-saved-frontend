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
  IonAvatar,
} from "@ionic/react";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import DiscussionContext from "../contexts/DiscussionContext";
import UserContext from "../contexts/UserContext";
// import UserContext from "../contexts/UserContext";

const DiscussionBoard: React.FC = () => {
  let [newPost, setNewPost] = useState({
    headline: "",
    content: "",
  });

  console.log(newPost);

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

  let { user, getUsers } = useContext(UserContext);
  let myUserToken = localStorage.getItem("myUserToken")

  // useEffect(() => {
  //   async function fetch() {
  //     await getUsers().then((user) => setUsers(user));
  //   }
  //   fetch();
  // }, []);

  let { userId, username, } = user;

  const [users, setUsers] = useState({
    userId: userId,
    username: username,
  });



  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonGrid>
          <IonRow class="ion-padding ion-text-center">
            <IonCol size="12">
              <h1>Discussion Board</h1>
              <form onSubmit={handleSubmit} className="dissSubmit">
                <IonItem>
                  <IonLabel position="stacked">Discussion Headline</IonLabel>
                  <IonInput
                    type="text"
                    placeholder="Headline"
                    name="headline"
                    value={newPost.headline}
                    onIonChange={handleChange}
                  />
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
          <IonRow class="ion-padding">
            <IonCol size="12">
              <IonList className="dissContent">

                <DiscussionContext.Consumer>
                  {({ discussion }) => {
                    return (

                      <div>
                        <IonAvatar>
                          <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                        </IonAvatar>
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
