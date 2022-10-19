import { IonContent, IonGrid, IonPage } from "@ionic/react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ParentProfile: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonGrid></IonGrid>
        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default ParentProfile;
