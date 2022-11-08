import {
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonThumbnail,
} from "@ionic/react";

import Footer from "../components/Footer";
import Header from "../components/Header";

const MeetTheDevs: React.FC = () => {
  return (
    <IonPage>
      <Header />

      <IonContent fullscreen>
        <IonGrid>
          <IonRow class="ion-padding ion-text-center welcomeText">
            <IonCol size="12">
              <h1>Meet Your Developers</h1>
              <h2>Learn more about everyone who worked on the project</h2>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size-lg="4" size-xs="12" class="ion-text-center">
              <IonThumbnail>
                <img alt="dev profile" src="/" />
              </IonThumbnail>
              <h3>dev name</h3>
              <p>Dev Bio</p>
            </IonCol>
            <IonCol size-lg="4" size-xs="12" class="ion-text-center">
              <IonThumbnail>
                <img alt="dev profile" src="/" />
              </IonThumbnail>
              <h3>dev name</h3>
              <p>Dev Bio</p>
            </IonCol>
            <IonCol size-lg="4" size-xs="12" class="ion-text-center">
              <IonThumbnail>
                <img alt="dev profile" src="/" />
              </IonThumbnail>
              <h3>dev name</h3>
              <p>Dev Bio</p>
            </IonCol>
            <IonCol size-lg="4" size-xs="12" class="ion-text-center">
              <IonThumbnail>
                <img alt="dev profile" src="/" />
              </IonThumbnail>
              <h3>dev name</h3>
              <p>Dev Bio</p>
            </IonCol>
            <IonCol size-lg="4" size-xs="12" class="ion-text-center">
              <IonThumbnail>
                <img alt="dev profile" src="/" />
              </IonThumbnail>
              <h3>dev name</h3>
              <p>Dev Bio</p>
            </IonCol>
            <IonCol size-lg="4" size-xs="12" class="ion-text-center">
              <IonThumbnail>
                <img alt="dev profile" src="/" />
              </IonThumbnail>
              <h3>dev name</h3>
              <p>Dev Bio</p>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default MeetTheDevs;
