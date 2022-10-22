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

const SignUp: React.FC = () => {
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
		            <IonInput class="color" placeholder="Enter Username" type="text" name="username"/> <br></br>
                
               <IonLabel position="stacked">Password: </IonLabel>
		            <IonInput class="color" placeholder="Enter Password" type="text" name="password" /> <br></br>
              
                <IonLabel position="stacked">First Name: </IonLabel>
		            <IonInput class="color" placeholder="Enter First Name" type="text" name="first name"/> <br></br>
             
                
                <IonLabel position="stacked">Last Name: </IonLabel>
		            <IonInput class="color" placeholder="Enter Last Name" type="text" name="last name"/> <br></br>
                
                
                <IonLabel position="stacked">Email: </IonLabel>
		            <IonInput class="color" placeholder="Enter Email" type="text" name="email"/> <br></br>
               </div>
               
	            </IonCol>
            </IonRow>
            <IonRow class="ion-padding ion-text-center">
            <IonCol size="12">
              <IonButton>Thank You For Signing Up</IonButton>
            </IonCol>
          </IonRow>
         
        </IonGrid>
        
        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default SignUp;


