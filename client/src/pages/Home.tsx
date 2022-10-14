import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>HomeTasktic</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Header />
        <p>pizza</p>
        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
