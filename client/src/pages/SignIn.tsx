import {
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonLabel,
  IonInput,
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
          <IonRow class="ion-padding">
            <IonCol size="12">
              <div className="signupform">
                <IonLabel position="stacked">UserName: </IonLabel>
                <IonInput
                  class="color"
                  placeholder="Enter Username"
                  type="text"
                  name="username"
                />{" "}
                <br></br>
                <IonLabel position="stacked">Password: </IonLabel>
                <IonInput
                  class="color"
                  placeholder="Enter Password"
                  type="text"
                  name="password"
                />{" "}
                <br></br>
                <IonRow class="ion-padding ion-text-center">
                  <IonCol size="12">
                    <IonButton>Sign In</IonButton>
                  </IonCol>
                </IonRow>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default SignIn;
