import {
  IonCheckbox,
  IonCol,
  IonContent,
  IonGrid,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonThumbnail,
} from "@ionic/react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ChildProfile: React.FC = () => {
  let image =
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80";
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonGrid>
          <IonRow class="ion-padding ion-text-center">
            <IonCol size="12">
              <h1>Hello, User!</h1>
            </IonCol>
          </IonRow>
          <hr />
          {/* Start Profile Content */}
          <IonRow class="ion-padding">
            <IonCol size-lg="6" size-xs="12">
              <IonRow class="ion-padding">
                <IonCol size-lg="6" size-xs="12">
                  <h2>Incomplete Tasks</h2>
                  <div className="tasklist">
                    <IonList>
                      <IonItem>
                        <IonCheckbox slot="start"></IonCheckbox>
                        <IonLabel>Pokémon Yellow</IonLabel>
                      </IonItem>
                      <IonItem>
                        <IonCheckbox slot="start"></IonCheckbox>
                        <IonLabel>Mega Man X</IonLabel>
                      </IonItem>
                      <IonItem>
                        <IonCheckbox slot="start"></IonCheckbox>
                        <IonLabel>The Legend of Zelda</IonLabel>
                      </IonItem>
                      <IonItem>
                        <IonCheckbox slot="start"></IonCheckbox>
                        <IonLabel>Pac-Man</IonLabel>
                      </IonItem>
                      <IonItem>
                        <IonCheckbox slot="start"></IonCheckbox>
                        <IonLabel>Super Mario World</IonLabel>
                      </IonItem>
                    </IonList>
                  </div>
                </IonCol>
                <IonCol size-lg="6" size-xs="12">
                  <h2>Completed Tasks</h2>
                  <div className="tasklist">
                    <IonList>
                      <IonItem>
                        <IonCheckbox slot="start"></IonCheckbox>
                        <IonLabel>Pokémon Yellow</IonLabel>
                      </IonItem>
                      <IonItem>
                        <IonCheckbox slot="start"></IonCheckbox>
                        <IonLabel>Mega Man X</IonLabel>
                      </IonItem>
                      <IonItem>
                        <IonCheckbox slot="start"></IonCheckbox>
                        <IonLabel>The Legend of Zelda</IonLabel>
                      </IonItem>
                      <IonItem>
                        <IonCheckbox slot="start"></IonCheckbox>
                        <IonLabel>Pac-Man</IonLabel>
                      </IonItem>
                      <IonItem>
                        <IonCheckbox slot="start"></IonCheckbox>
                        <IonLabel>Super Mario World</IonLabel>
                      </IonItem>
                    </IonList>
                  </div>
                </IonCol>
                <IonCol size-lg="6" size-xs="12">
                  <h2>Available Rewards</h2>
                  <div>add rewards</div>
                </IonCol>
                <IonCol size-lg="6" size-xs="12">
                  <h2>Redeemed Rewards</h2>
                  <div>add rewards</div>
                </IonCol>
              </IonRow>
            </IonCol>
            <IonCol size-lg="6" size-xs="12" class="ion-text-center">
              <IonThumbnail slot="start">
                <IonImg src={image} />
              </IonThumbnail>
              <p>add image here</p>
            </IonCol>
          </IonRow>
          {/* End Profile Content */}
          <hr />
          {/* Start Progess Bar */}
          <IonRow class="ion-padding ion-text-center">
            <IonCol size="12">
              <div>Progress : look here</div>
            </IonCol>
          </IonRow>
          {/* End Progess Bar */}
        </IonGrid>
        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default ChildProfile;
