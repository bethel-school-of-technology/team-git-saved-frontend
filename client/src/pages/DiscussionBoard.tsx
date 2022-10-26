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
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import DiscussionContext from "../contexts/DiscussionContext";

const DiscussionBoard: React.FC = () => {
  let { deletePost, addPost } = useContext(DiscussionContext);

  let history = useHistory();

  function removePost(postId: any) {
    deletePost(postId).then(() => {
      history.push("/discussionBoard");
    });
  }

  function addDiscussion(postId: any) {
    //change this function
    addPost(postId).then(() => {
      history.push("/discussionBoard");
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
            </IonCol>
          </IonRow>
          <IonRow class="ion-padding ion-text-center">
            <IonCol size="12">
              <IonList>
                <IonItem>
                  <IonLabel position="stacked">Join Discussion Here</IonLabel>
                  <IonInput placeholder="Start Post"></IonInput>
                </IonItem>
                <IonItem>
                  <IonButton onClick={addDiscussion} expand="block">
                    Add Post
                  </IonButton>
                </IonItem>
              </IonList>
            </IonCol>
          </IonRow>
          <IonRow class="ion-padding ion-text-center">
            <IonCol size="12">
              <IonList>
                <DiscussionContext.Consumer>
                  {({ post }) => {
                    return (
                      <div>
                        {post.map((p: any) => {
                          return (
                            <IonItem key={p.postId}>
                              <p>{p.headline}remove me</p>
                              <p>{p.content}remove me</p>
                              <IonButton
                                color="danger"
                                href={`/tasks/${p.postId}`}
                              >
                                Edit Post
                              </IonButton>
                              <IonButton
                                color="danger"
                                href="#"
                                onClick={() => removePost(`${p.postId}`)}
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
