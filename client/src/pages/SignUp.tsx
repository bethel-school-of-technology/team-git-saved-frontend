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
import Footer from "../components/Footer";
import Header from "../components/Header";
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../contexts/UserContext';

const SignUp: React.FC = () => {

  let [ newUser, setNewUser ] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
});

let { createUser } = useContext(UserContext);
let history = useHistory();

function handleChange(event: any) {
    setNewUser((prevValue) => {
        return { ...prevValue, [event.target.name]: event.target.value }
    });
}

function handleSubmit(event: any) {
    event.preventDefault();
    createUser(newUser).then(() => {
        history.push('/signin');
    // }).catch(error => {
    //     console.log(error);
    //     window.alert('Failed registration: error creating user');
    });
}

  

  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>

      <IonGrid>
          <IonRow class="ion-padding ion-text-center">
            <IonCol size="12">
              <h1>Sign Up</h1>
              
            </IonCol>
            </IonRow>

            <IonRow class="ion-padding">
              
	            <IonCol size="12">
               
               <div className="signupform">
               <IonLabel position="stacked">UserName: </IonLabel>
		            <IonInput class="color" placeholder="Enter Username" type="text" name="username" value={newUser.username} onIonChange={handleChange}/> <br></br>
                
               <IonLabel position="stacked">Password: </IonLabel>
		            <IonInput class="color" placeholder="Enter Password" type="text" name="password" value={newUser.password} onIonChange={handleChange}/> <br></br>
              
                <IonLabel position="stacked">First Name: </IonLabel>
		            <IonInput class="color" placeholder="Enter First Name" type="text" name="first name" value={newUser.firstName} onIonChange={handleChange}/> <br></br>
             
                
                <IonLabel position="stacked">Last Name: </IonLabel>
		            <IonInput class="color" placeholder="Enter Last Name" type="text" name="last name" value={newUser.lastName} onIonChange={handleChange}/> <br></br>
                
                
                <IonLabel position="stacked">Email: </IonLabel>
		            <IonInput class="color" placeholder="Enter Email" type="text" name="email" value={newUser.email} onIonChange={handleChange}/> <br></br>
               
                <IonRow class="ion-padding ion-text-center">
                  <IonCol size="12">
                    <IonButton>Thank You For Signing Up</IonButton>
                  </IonCol>
              </IonRow>
               
               </div>
               
	            </IonCol>
            </IonRow>
           
         
        </IonGrid>
        
        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default SignUp;


