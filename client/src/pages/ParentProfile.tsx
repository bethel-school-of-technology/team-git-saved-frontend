import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ParentProfile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>HomeTasktic</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Header />
        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default ParentProfile;
