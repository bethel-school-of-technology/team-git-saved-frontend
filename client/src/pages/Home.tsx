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
      <Header />
      <IonContent fullscreen>
        <p>Add Grid Here</p>
        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
