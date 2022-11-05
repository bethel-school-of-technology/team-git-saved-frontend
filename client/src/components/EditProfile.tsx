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
  
  const EditProfile: React.FC = () => {
    return (
      <IonPage>
        <Header />
  
        <IonContent fullscreen>
          <IonGrid>
            <IonRow class="ion-padding ion-text-center">
              <IonCol size="12">

              </IonCol>
              <IonRow class="ion-padding ion-text-center">
              <IonCol size="12">

              </IonCol>
            </IonRow>
            </IonRow>
          </IonGrid>
        </IonContent>
        <Footer />
      </IonPage>
    );
  };
  
  export default EditProfile;
  