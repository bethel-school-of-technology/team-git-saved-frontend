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
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useDialog } from "../hooks/usedialog";
import DiscussionContext from "../contexts/DiscussionContext";
import { DiscussionProvider } from "../contexts/DiscussionProvider";


const DiscussionBoard: React.FC = () => {

  let { deletePost, post } = useContext(DiscussionContext);

  function removePost(postId: any) {
    deletePost(postId).then(() => {
      window.location.assign("/discussionBoard");
    });
  }

  const displayPosts = () => {
    {
      ({post}) => {
        post.map((p) => {
          return (
            <IonItem key={p.postId}>
              <p>{p.headline}</p>
              <p>{p.content}</p>
              <IonButton color="danger" href={`/tasks/${p.postId}`}>
                Edit Post
              </IonButton>
              <IonButton
                color="danger"
                href="#"
                onClick={() => removePost(`${p.postId}`)}>
                Delete Post
              </IonButton>
            </IonItem>
        
          );
        });
      }
    };
  }
;
return (
  <IonPage>
    <Header />
    <IonContent fullscreen>

      <IonGrid>
        <IonRow class="ion-padding ion-text-center">
          <IonCol size="12">
            <h1>Discussion Board</h1></IonCol>
        </IonRow>
        <IonList>{displayPosts}</IonList>
        <IonItem>
          <IonLabel position="stacked">Join Discussion Here</IonLabel>
          <IonInput placeholder="Start Post"></IonInput>
        </IonItem>
        <IonButton expand="block" >Add Post</IonButton>

        <IonButton expand="full">Edit Post</IonButton>
        <IonButton expand="full">Delete Post</IonButton>
      </IonGrid>

      <Footer />
    </IonContent>
  </IonPage>

);
  };

export default DiscussionBoard;
