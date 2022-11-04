import { IonButton, IonCol, IonContent, IonInput, IonItem, IonLabel, IonPage } from '@ionic/react';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import DiscussionContext from '../contexts/DiscussionContext';

const AddDiscussion: React.FC =() => {

        let [ newPost, setNewPost ] = useState({
            headline: "",
            context: ""
        });
    
        let { addPost } = useContext(DiscussionContext);
        let history = useHistory();
    
        function handleChange(event: any) {
            setNewPost((prevValue) => {
                return { ...prevValue, [event.target.name]: event.target.value }
            });
        }
    
        function handleSubmit(event: any) {
            event.preventDefault();
            addPost(newPost).then(() => {
                history.push('/discussionBoard')
            })}
    
        return (
        <IonPage>
            <IonContent>
            <IonCol>
                <h1>New Discussion Post</h1>
                <IonLabel position="stacked">Discussion headline  </IonLabel>
                <IonInput placeholder="Enter headline" type="text" name="headline" value={newPost.headline} onChange={handleChange} />
                <span>Context </span>
                <IonInput placeholder="Enter description" type="text" name="context" value={newPost.context} onChange={handleChange}> </IonInput>
                <IonButton onSubmit={handleSubmit}>Create New Discussion post</IonButton>
            </IonCol>
            </IonContent>
            </IonPage>
        )
    };
    

export default AddDiscussion