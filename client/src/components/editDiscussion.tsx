import { IonButton, IonInput, IonItem, IonLabel } from '@ionic/react';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import DiscussionContext from '../contexts/DiscussionContext';

const EditPost = () => {

    let [ changePost, setChangePost ] = useState({
        headline: "",
        context: ""
    });
   let {editPost} = useContext(DiscussionContext);
   let history = useHistory();


    function handleChange(event: any) {
      setChangePost((prevValue) => {
          return { ...prevValue, [event.target.name]: event.target.value }
      });
      }
      function handleSubmit(event: any) {
          event.preventDefault();
          editPost(changePost).then(() => {
              history.push('/discussionBoard');
          })
      }
     

    return (
        <form>
          <IonItem>
          <h1>New Discussion Post</h1>
          <IonLabel position="floating">Discussion Headline  </IonLabel>
          <IonInput placeholder="Enter headline" type="text" name="headline" value={changePost.headline} onChange={handleChange} />
          <span>Context </span>
          <IonInput placeholder="Enter Post here" type="text" name="context" value={changePost.context} onChange={handleChange}> </IonInput>
          <IonButton type='submit' onSubmit={handleSubmit}>Edit Discussion post</IonButton>
      </IonItem>
      </form>
    )
};

export default EditPost