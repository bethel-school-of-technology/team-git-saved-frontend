import {
    IonButton,
    IonCol,
    IonContent,
    IonGrid,
    IonInput,
    IonItem,
    IonLabel,
    IonRow,
  } from "@ionic/react";
  import { useContext, useEffect, useState } from "react";
  import { useHistory, useParams } from "react-router";
  import RewardsContext from "../contexts/RewardsContext";
  
  const EditReward: React.FC = (props) => {
    let { id } = useParams<{ id: string }>();
    let history = useHistory();
  
    let { editReward, getReward, reward } = useContext(RewardsContext);
  
    useEffect(() => {
      async function fetch() {
        await getReward(id).then((reward: any) => setUpdateReward(reward));
      }
      fetch();
    }, [id, getReward]);
  
    let { rewardId, title, pointValue } = reward;
  
    let [updateReward, setUpdateReward] = useState({
        rewardId: rewardId,
      title: title,
      pointValue: pointValue
      
    });
  
    console.log(updateReward.rewardId);
  
    function handleChange(event: any) {
      setUpdateReward((prevValue) => {
        return { ...prevValue, [event.target.name]: event.target.value };
      });
    }
  
    function handleSubmit(event: any) {
      event.preventDefault();
      editReward(updateReward, updateReward.rewardId)
        .then(() => {
          history.push("/rewards");
        })
        .catch((error: any) => {
          history.push("/signin");
          console.log(error);
        });
    }
    return (
      <IonContent fullscreen>
        <IonGrid>
          <IonRow class="ion-padding ion-text-center">
            <IonCol size="12">
              <form onSubmit={handleSubmit}>
                <IonItem>
                  <IonLabel position="stacked">Enter task title</IonLabel>
                  <IonInput
                    type="text"
                    placeholder="Do Stuff"
                    name="title"
                    value={updateReward.title}
                    onIonChange={handleChange}
                  />
                  <IonLabel position="stacked">Point Value</IonLabel>
                  <IonInput
                    type="number"
                    placeholder="2000"
                    name="pointValue"
                    value={updateReward.pointValue}
                    onIonChange={handleChange}
                  />
                </IonItem>
                <IonButton type="submit" expand="block">
                  Update Task
                </IonButton>
              </form>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    );
  };
  
  export default EditReward;