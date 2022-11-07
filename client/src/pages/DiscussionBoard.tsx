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
} from "@ionic/react";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import DiscussionContext from "../contexts/DiscussionContext";
import UserContext from "../contexts/UserContext";
import { postDialog } from "../hooks/discussiondialog";

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
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonGrid>
          <IonRow class="ion-padding ion-text-center">
            <IonCol size="12">
              <h1>Discussion Board</h1>
              <form onSubmit={handleSubmit}>
                <IonItem>
                  <IonLabel position="stacked">Discussion Headline</IonLabel>
                  <IonInput
                    type="text"
                    placeholder="headline"
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
          <IonRow class="ion-padding ion-text-center">
            <IonCol size="12">
              <IonList>
                <DiscussionContext.Consumer>
                  {({ discussion }) => {
                    return (
                      <div>
                        {discussion.map((p: any) => {
                          return (
                            <IonItem key={p.discussionId}>
                              <p>{p.headline}</p>
                              <br></br><br></br>
                              <p>{p.content}</p>
                              <IonButton
                                color="danger"
                                href={`/discussion/${p.discussionId}`}
                              >
                                Edit Post
                              </IonButton>
                              <IonButton
                                color="danger"
                                onClick= {() =>
                                  removeDiscussion(`${p.discussionId}`)
                                }
                              >
                                Delete Post
                              </IonButton>
                            </IonItem>
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