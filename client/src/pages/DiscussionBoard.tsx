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
  } from "@ionic/react";
import { useContext, useState } from "react";
  import Footer from "../components/Footer";
  import Header from "../components/Header";
import { useDialog } from "../hooks/usedialog";
import DiscussionContext from "../contexts/DiscussionContext";

  
  const Discussionboard: React.FC = () => {
    const {showConfirm, showPrompt } = useDialog();
//function HandleAddPost() {
    //addPost(newPost).then(() => {
      // prompt;
    //});
//}
  
    const confirm = async () => {
        showConfirm('Wait!', 'Are you sure?').then(confirmed => {
            console.log('Confirmed: ' + confirmed);
        });
    }
    
    const prompt = async () => {
        showPrompt('Hello', 'Add Discussion Post Here').then(post => {
            console.log('Post: ' + post);
        });
    }
    
    return (
      <IonPage>
        <Header />
        <IonContent fullscreen>
  
        <IonGrid>
            <IonRow class="ion-padding ion-text-center">
              <IonCol size="12">
                <h1>Discussion Board</h1></IonCol>
            </IonRow>
            <IonItem>
        <IonLabel position="stacked">Stacked label</IonLabel>
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
  
  export default Discussionboard;
  