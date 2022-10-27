import {
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
} from "@ionic/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./App.css";

const Rewards: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol size="12">
              <IonButton>Add Reward</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size-lg="3" size-xs="12">
              <IonCard>
                <img
                  alt="Silhouette of mountains"
                  src="https://ionicframework.com/docs/img/demos/card-media.png"
                />
                <IonCardHeader>
                  <IonCardTitle>Reward One</IonCardTitle>
                  <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                </IonCardHeader>

                <IonButton fill="clear">Edit</IonButton>
                <IonButton fill="clear">Delete</IonButton>
              </IonCard>
            </IonCol>
            <IonCol size-lg="3" size-xs="12">
              <IonCard>
                <img
                  alt="Silhouette of mountains"
                  src="https://ionicframework.com/docs/img/demos/card-media.png"
                />
                <IonCardHeader>
                  <IonCardTitle>Reward Two</IonCardTitle>
                  <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                </IonCardHeader>

                <IonButton fill="clear">Edit</IonButton>
                <IonButton fill="clear">Delete</IonButton>
              </IonCard>
            </IonCol>
            <IonCol size-lg="3" size-xs="12">
              <IonCard>
                <img
                  alt="Silhouette of mountains"
                  src="https://ionicframework.com/docs/img/demos/card-media.png"
                />
                <IonCardHeader>
                  <IonCardTitle>Reward Three</IonCardTitle>
                  <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                </IonCardHeader>

                <IonButton fill="clear">Edit</IonButton>
                <IonButton fill="clear">Delete</IonButton>
              </IonCard>
            </IonCol>
            <IonCol size-lg="3" size-xs="12">
              <IonCard>
                <img
                  alt="Silhouette of mountains"
                  src="https://ionicframework.com/docs/img/demos/card-media.png"
                />
                <IonCardHeader>
                  <IonCardTitle>Reward Four</IonCardTitle>
                  <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                </IonCardHeader>

                <IonButton fill="clear">Edit</IonButton>
                <IonButton fill="clear">Delete</IonButton>
              </IonCard>
            </IonCol>
            <IonCol size-lg="3" size-xs="12">
              <IonCard>
                <img
                  alt="Silhouette of mountains"
                  src="https://ionicframework.com/docs/img/demos/card-media.png"
                />
                <IonCardHeader>
                  <IonCardTitle>Reward Five</IonCardTitle>
                  <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                </IonCardHeader>

                <IonButton fill="clear">Edit</IonButton>
                <IonButton fill="clear">Delete</IonButton>
              </IonCard>
            </IonCol>
            <IonCol size-lg="3" size-xs="12">
              <IonCard>
                <img
                  alt="Silhouette of mountains"
                  src="https://ionicframework.com/docs/img/demos/card-media.png"
                />
                <IonCardHeader>
                  <IonCardTitle>Reward Six</IonCardTitle>
                  <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                </IonCardHeader>

                <IonButton fill="clear">Edit</IonButton>
                <IonButton fill="clear">Delete</IonButton>
              </IonCard>
            </IonCol>
            <IonCol size-lg="3" size-xs="12">
              <IonCard>
                <img
                  alt="Silhouette of mountains"
                  src="https://ionicframework.com/docs/img/demos/card-media.png"
                />
                <IonCardHeader>
                  <IonCardTitle>Reward Seven</IonCardTitle>
                  <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                </IonCardHeader>

                <IonButton fill="clear">Edit</IonButton>
                <IonButton fill="clear">Delete</IonButton>
              </IonCard>
            </IonCol>
            <IonCol size-lg="3" size-xs="12">
              <IonCard>
                <img
                  alt="Silhouette of mountains"
                  src="https://ionicframework.com/docs/img/demos/card-media.png"
                />
                <IonCardHeader>
                  <IonCardTitle>Reward Eight</IonCardTitle>
                  <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                </IonCardHeader>

                <IonButton fill="clear">Edit</IonButton>
                <IonButton fill="clear">Delete</IonButton>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default Rewards;
