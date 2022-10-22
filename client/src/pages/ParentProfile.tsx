import {
  IonButton,
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

const ParentProfile: React.FC = () => {
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
                  <h3>Completed Tasks</h3>
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
                        <IonCheckbox slot="start"></IonCheckbox>
                        <IonLabel>Pack Lunch</IonLabel>
                      </IonItem>
                      <IonItem>
                        <IonCheckbox slot="start"></IonCheckbox>
                        <IonLabel>Make Bed</IonLabel>
                      </IonItem>
                      <IonItem>
                        <IonCheckbox slot="start"></IonCheckbox>
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
                        <IonCheckbox slot="start"></IonCheckbox>
                        <IonLabel>Fold Laumdry</IonLabel>
                      </IonItem>
                      <IonItem>
                        <IonCheckbox slot="start"></IonCheckbox>
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
          </IonRow>
        </IonGrid>
        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default ParentProfile;
