import { IonContent, IonPage } from "@ionic/react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Welcome: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default Welcome;
