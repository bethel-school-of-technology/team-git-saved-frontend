import {
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
} from "@ionic/react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const SignIn: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>

      <IonGrid>
          <IonRow class="ion-padding ion-text-center">
            <IonCol size="12">
              <h1>Sign In</h1>
              
            </IonCol>
          </IonRow>
          <IonRow class="ion-padding ion-text-center">
            <IonCol size="12">
            <div>
            <span>Username: </span>
            <input placeholder="Enter Username" type="text" name="username" /> <br></br>
           
            </div>
    
              {/* I put them in a different row and col bc I figured it was the easiest way to separte them */}
            </IonCol>
          </IonRow>
          <IonRow class="ion-padding-bottom ion-text-center">
            <IonCol size="12">
            <div>
            <span>Password: </span>
            <input placeholder="Enter Password" type="text" name="password" /> <br></br>
           
            </div>
    
              
            </IonCol>
          </IonRow>
          <IonRow class="ion-padding ion-text-center">
            <IonCol size="12">
              <IonButton>Sign In</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>

        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default SignIn;
