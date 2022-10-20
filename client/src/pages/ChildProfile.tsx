import {
  IonCheckbox,
  IonCol,
  IonContent,
  IonGrid,
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
                        <IonLabel>Walk The Dogs</IonLabel>
                      </IonItem>
                      <IonItem>
                        <IonCheckbox slot="start"></IonCheckbox>
                        <IonLabel>Take Out Trash</IonLabel>
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
                        <IonLabel>Wash The Car</IonLabel>
                      </IonItem>
                      <IonItem>
                        <IonCheckbox slot="start"></IonCheckbox>
                        <IonLabel>Cut The Grass</IonLabel>
                      </IonItem>
                      <IonItem>
                        <IonCheckbox slot="start"></IonCheckbox>
                        <IonLabel>Make Dad Lunch</IonLabel>
                      </IonItem>
                    </IonList>
                  </div>
                </IonCol>
                <IonCol size-lg="6" size-xs="12">
                  <h2>Available Rewards</h2>
                  <div className="tasklist">
                    <IonList>
                      <IonItem>
                        <IonCheckbox slot="start"></IonCheckbox>
                        <IonLabel>Go to the park</IonLabel>
                      </IonItem>
                      <IonItem>
                        <IonCheckbox slot="start"></IonCheckbox>
                        <IonLabel>Go to friends house</IonLabel>
                      </IonItem>
                      <IonItem>
                        <IonCheckbox slot="start"></IonCheckbox>
                        <IonLabel>Get Ice Cream</IonLabel>
                      </IonItem>
                    </IonList>
                  </div>
                </IonCol>
                <IonCol size-lg="6" size-xs="12">
                  <h2>Redeemed Rewards</h2>
                  <div className="tasklist">
                    <IonList>
                      <IonItem>
                        <IonCheckbox slot="start"></IonCheckbox>
                        <IonLabel>Read A Book</IonLabel>
                      </IonItem>
                      <IonItem>
                        <IonCheckbox slot="start"></IonCheckbox>
                        <IonLabel>Play Switch for 1 Hour</IonLabel>
                      </IonItem>
                    </IonList>
                  </div>
                </IonCol>
              </IonRow>
            </IonCol>
            <IonCol size-lg="6" size-xs="12" class="ion-text-center">
              <IonThumbnail>
                <img
                  alt="placeholder"
                  src="https://images.unsplash.com/photo-1519308870258-457c2540d826?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                />
              </IonThumbnail>
            </IonCol>
          </IonRow>
          {/* End Profile Content */}
          <hr />
          {/* Start Progess Bar */}
          <IonRow class="ion-padding ion-text-center">
            <IonCol size="12">
              <div>
                <h3>
                  Progress : <span>40/100</span>
                </h3>
              </div>
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
