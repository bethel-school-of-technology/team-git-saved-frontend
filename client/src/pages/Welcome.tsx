import {
IonContent,
IonPage,
IonGrid,
IonRow,
IonCol,
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

                </IonCol>
            </IonRow>
        </IonGrid>
        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default Welcome;
