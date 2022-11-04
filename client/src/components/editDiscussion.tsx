import { IonButton, IonContent, IonGrid, IonInput, IonItem, IonLabel, IonPage } from '@ionic/react';
import React, { useContext, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import DiscussionContext from '../contexts/DiscussionContext';

const EditPost: React.FC = (props) => {

    let params = useParams()
  let [ changePost, setProduct ] = useState({
    id:  "",
    headline: "",
     content: "" 
  })
    let { editPost } = useContext(DiscussionContext);
    let history = useHistory()


    let {id, headline, content } = changePost

    function handleChange(event:any) {
      setProduct((preValue) => {
        return { ...preValue, [event.target.name]: event.target.value }})
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    editPost(changePost, changePost.discussionId)
      .then(() => {
        history.push("/discussion");
      })
      .catch((error: any) => {
        history.push("/signin");
        console.log(error);
      });
  }
  return (
    <IonContent fullscreen>
      <IonGrid>
        <IonRow class="ion-padding ion-text-center">
          <IonCol size="12">
            <form onSubmit={handleSubmit}>
              <IonItem>
                <IonLabel position="stacked">Edit Discussion Headline</IonLabel>
                <IonInput
                  type="text"
                  name="headline"
                  value={changePost.headline}
                  onIonChange={handleChange}
                />
                <IonLabel position="stacked">EditDiscussion Content </IonLabel>
                <IonInput
                  type="text"
                  name="conent"
                  value={changePost.content}
                  onIonChange={handleChange}
                />
              </IonItem>
              <IonButton type="submit" expand="block">
                Edit Discussion Post
              </IonButton>
            </form>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default EditDiscussion;
