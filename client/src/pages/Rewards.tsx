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
  IonItem,
  IonLabel,
  IonInput,
} from "@ionic/react";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import RewardsContext from "../contexts/RewardsContext";
import "./App.css";

const Rewards: React.FC = () => {
  let [newRewards, setNewRewards] = useState({
    title: "",
    pointValue: "",
  });

  let { deleteReward, addReward } = useContext(RewardsContext);
  let history = useHistory();

  function handleChange(event: any) {
    setNewRewards((prevValue) => {
      return { ...prevValue, [event.target.name]: event.target.value };
    });
  }

  function vieweditRewards(rewardId: any) {
    history.push(`/rewards/${rewardId}`);
    window.location.reload();
  }
  console.log(newRewards);

  function handleSubmit(event: any) {
    event.preventDefault();
    addReward(newRewards).then(() => {
      history.push("/rewards");
      window.location.reload();
    });
  }

  function removeRewards(rewardId: any) {
    deleteReward(rewardId)
      .then(() => {
        history.push("/rewards");
        window.location.reload();
      })
      .catch((error: any) => {
        history.push("/rewards");
        console.log(error);
      });
  }

  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol size="12">
              <h1>Add Reward</h1>
              <form onSubmit={handleSubmit} className="rewardSubmit">
                <IonItem>
                  <IonLabel position="stacked">Title</IonLabel>
                  <IonInput
                    type="text"
                    placeholder="Hour of Tv"
                    name="title"
                    value={newRewards.title}
                    onIonChange={handleChange}
                  />
                  <IonLabel position="stacked">Point Value</IonLabel>
                  <IonInput
                    type="number"
                    placeholder="50"
                    name="pointValue"
                    value={newRewards.pointValue}
                    onIonChange={handleChange}
                  />
                </IonItem>
                <IonButton type="submit" expand="block">
                  Add Reward
                </IonButton>
              </form>
            </IonCol>
          </IonRow>

          <RewardsContext.Consumer>
            {({ reward }) => {
              return (
                <IonRow>
                  {reward.map((r: any, index) => {
                    return (
                      <IonCol
                        size-lg="3"
                        size-xs="12"
                        class="ion-text-center"
                        key={index}
                      >
                        <IonCard className="ion-padding">
                          <IonCardHeader>
                            <IonCardTitle>{r.title}</IonCardTitle>
                            <IonCardSubtitle>{r.pointValue}</IonCardSubtitle>
                          </IonCardHeader>
                          <IonButton
                            color="tertiary"
                            onClick={() => vieweditRewards(`${r.rewardId}`)}
                          >
                            Edit
                          </IonButton>
                          <IonButton
                            color="danger"
                            onClick={() => removeRewards(`${r.rewardId}`)}
                          >
                            Delete
                          </IonButton>
                        </IonCard>
                      </IonCol>
                    );
                  })}
                </IonRow>
              );
            }}
          </RewardsContext.Consumer>
        </IonGrid>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default Rewards;
