
import {
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonMenu,
  IonToolbar,
  IonTitle,
  IonList,
  IonMenuToggle,
  IonItem,
  IonNav,
  IonButtons,
  
  } from "@ionic/react";
  
  import Footer from "../components/Footer";
  import Header from "../components/Header";
  
  
  
  
  const Welcome: React.FC = () => {
    return (
      <IonPage>
        <Header />
  
  
        <IonContent fullscreen>
  
          
          <h1>Welcome To HomeTasktic!</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
           nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
           Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
           deserunt mollit anim id est laborum.
          </p>
          
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
