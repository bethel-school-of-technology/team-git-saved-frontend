
import {
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonButton

  
  } from "@ionic/react";
  
  import Footer from "../components/Footer";
  import Header from "../components/Header";
  
  
  
  
  const Welcome: React.FC = () => {
    return (
      <IonPage>
        <Header />
  
  
        <IonContent fullscreen>
          
          <IonGrid>
              <IonRow>
                  <IonCol>
                      <IonButton href="SignIn">Sign In</IonButton>
                      <IonButton href="SignUp">Sign Up</IonButton>
                  </IonCol>
              </IonRow>
          </IonGrid>
  
          <Footer />
        </IonContent>
      </IonPage>
    );
  };
  
  export default Welcome;
