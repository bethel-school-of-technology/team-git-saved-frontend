import {
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonList,
  IonItem,
  IonThumbnail,
  IonLabel,
} from "@ionic/react";

import Footer from "../components/Footer";
import Header from "../components/Header";

const Profile: React.FC = () => {
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
          {/* Start Parent Profile Content */}
          <IonRow class="ion-padding ion-text-center">
            <IonCol size-lg="6" size-xs="12">
              <IonRow class="ion-padding">
                <IonCol size-lg="6" size-xs="12">
                  <h2>Child 1</h2>
                </IonCol>
                <IonCol size-lg="6" size-xs="12">
                  <IonButton>Send Reminder</IonButton>
                  <IonButton color="danger">Edit</IonButton>
                </IonCol>
              </IonRow>
              <IonRow class="ion-padding">
                <IonCol size-lg="6" size-xs="12">
                  <h3>Incomplete Tasks</h3>
                  <div className="tasklist">
                    <IonList>
                      <IonItem>
                        <IonLabel>Walk The Dogs</IonLabel>
                      </IonItem>
                      <IonItem>
                        <IonLabel>Take Out Trash</IonLabel>
                      </IonItem>
                    </IonList>
                  </div>
                </IonCol>
                <IonCol size-lg="6" size-xs="12">
                  <h3>Completed Tasks</h3>
                  <div className="tasklist">
                    <IonList>
                      <IonItem>
                        <IonLabel>Wash The Car</IonLabel>
                      </IonItem>
                      <IonItem>
                        <IonLabel>Cut The Grass</IonLabel>
                      </IonItem>
                      <IonItem>
                        <IonLabel>Make Dad Lunch</IonLabel>
                      </IonItem>
                    </IonList>
                  </div>
                </IonCol>
              </IonRow>
              <IonRow class="ion-padding">
                <IonCol size-lg="6" size-xs="12">
                  <h2>Child 2</h2>
                </IonCol>
                <IonCol size-lg="6" size-xs="12">
                  <IonButton>Send Reminder</IonButton>
                  <IonButton color="danger">Edit</IonButton>
                </IonCol>
              </IonRow>
              <IonRow class="ion-padding">
                <IonCol size-lg="6" size-xs="12">
                  <h3>Incomplete Tasks</h3>
                  <div className="tasklist">
                    <IonList>
                      <IonItem>
                        <IonLabel>Pack Lunch</IonLabel>
                      </IonItem>
                      <IonItem>
                        <IonLabel>Make Bed</IonLabel>
                      </IonItem>
                      <IonItem>
                        <IonLabel>Rake Leaves</IonLabel>
                      </IonItem>
                    </IonList>
                  </div>
                </IonCol>
                <IonCol size-lg="6" size-xs="12">
                  <h3>Completed Tasks</h3>
                  <div className="tasklist">
                    <IonList>
                      <IonItem>
                        <IonLabel>Fold Laumdry</IonLabel>
                      </IonItem>
                      <IonItem>
                        <IonLabel>Wash Dishes</IonLabel>
                      </IonItem>
                    </IonList>
                  </div>
                </IonCol>
              </IonRow>
            </IonCol>
            <IonCol size-lg="6" size-xs="12" class="ion-text-center">
              <IonRow class="ion-padding">
                <IonCol size="12">
                  <IonThumbnail>
                    <img
                      alt="placeholder"
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                    />
                  </IonThumbnail>
                </IonCol>
                <IonCol size="12">
                  <div>
                    <span>Age: add me</span>
                    <span>Household Size: add me</span>
                    <span>Bio: add me</span>
                  </div>
                </IonCol>
              </IonRow>
              <IonRow class="ion-padding">
                <IonCol size="12">
                  <h2>Options</h2>
                  <div className="options">
                    <IonList>
                      <IonItem>
                        <IonButton size="default">Dashboard</IonButton>
                      </IonItem>
                      <IonItem>
                        <IonButton size="default">Add Child</IonButton>
                      </IonItem>
                      <IonItem>
                        <IonButton size="default">Family Discussion</IonButton>
                      </IonItem>
                    </IonList>
                  </div>
                </IonCol>
              </IonRow>
            </IonCol>
            {/* End Parent Profile Content */}
          </IonRow>
          {/* Start Profile Content */}
          <IonRow class="ion-padding">
            <IonCol size-lg="6" size-xs="12">
              <IonRow class="ion-padding">
                <IonCol size-lg="6" size-xs="12">
                  <h2>Incomplete Tasks</h2>
                  <div className="tasklist">
                    <IonList>
                      <IonItem>
                        <IonLabel>Walk The Dogs</IonLabel>
                      </IonItem>
                      <IonItem>
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
                        <IonLabel>Wash The Car</IonLabel>
                      </IonItem>
                      <IonItem>
                        <IonLabel>Cut The Grass</IonLabel>
                      </IonItem>
                      <IonItem>
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
                        <IonLabel>Go to the park</IonLabel>
                      </IonItem>
                      <IonItem>
                        <IonLabel>Go to friends house</IonLabel>
                      </IonItem>
                      <IonItem>
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
                        <IonLabel>Read A Book</IonLabel>
                      </IonItem>
                      <IonItem>
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
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default Profile;
