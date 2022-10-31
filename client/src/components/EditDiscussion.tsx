import { IonButton, IonContent, IonGrid, IonInput, IonItem, IonLabel, IonPage } from '@ionic/react';
import React, { useContext, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import DiscussionContext from '../contexts/DiscussionContext';

const EditPost: React.FC = (props) => {

  //   let params = useParams()
  // let [ changePost, setProduct ] = useState({
  //   id:  params.discussionId,
  //   headline: "",
  //    content: "" 
  // })
  //   let { editPost } = useContext(DiscussionContext);
  //   let history = useHistory()
    

  //   let {id, headline, content } = changePost

  //   function handleChange(event:any) {
  //     setProduct((preValue) => {
  //       return { ...preValue, [event.target.name]: event.target.value }})
  //   }

  //   function handleSubmit(event: any) {
  //       event.preventDefault();
  //       editPost(changePost).then(() => {
  //           history.push('/discussion');
  //       }).catch((error: any) => {
  //           console.log(error);
  //           history.push('/discusion');
  //       });
  //   }

   

    return (
      //   <IonContent fullscreen>
      //       <IonGrid>
       
      //   <form onSubmit={handleSubmit}>
      //   <IonItem>
      //     <IonLabel position="stacked">Discussion Headline</IonLabel>
      //     <IonInput
      //       type="text"
      //       placeholder="headline"
      //       name="headline"
      //       value={changePost.headline}
      //       onIonChange={handleChange}
      //     />
      //     <IonLabel position="stacked">Content</IonLabel>
      //     <IonInput
      //       type="text"
      //       placeholder="Start Post Here"
      //       name="content"
      //       value={changePost.content}
      //       onIonChange={handleChange}
      //     />
      //   </IonItem>
      //   <IonButton type="submit" expand="block">
      //     Confirm Edit
      //   </IonButton>
      // </form>
     
      // </IonGrid>
      // </IonContent>
      <div></div>
    )
};

export default EditPost