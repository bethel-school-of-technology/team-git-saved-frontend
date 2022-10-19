import {
  IonContent,
  IonPage,
} from "@ionic/react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const SignIn: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default SignIn;
