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
import TaskContext from "../contexts/TaskContext";

const EditTask: React.FC = (props) => {
  let { id } = useParams<{ id: string }>();
  let history = useHistory();

  let { editTask, getTask, task } = useContext(TaskContext);

  useEffect(() => {
    async function fetch() {
      await getTask(id).then((task: any) => setUpdateTask(task));
    }
    fetch();
  }, [id, getTask]);

  let { taskId, title, pointValue, assignedTo } = task;

  let [updateTask, setUpdateTask] = useState({
    taskId: taskId,
    title: title,
    pointValue: pointValue,
    assignedTo: assignedTo,
  });

  console.log(updateTask.taskId);

  function handleChange(event: any) {
    setUpdateTask((prevValue) => {
      return { ...prevValue, [event.target.name]: event.target.value };
    });
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    editTask(updateTask, updateTask.taskId)
      .then(() => {
        history.push("/home");
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
                  value={updateTask.title}
                  onIonChange={handleChange}
                />
                <IonLabel position="stacked">Point Value</IonLabel>
                <IonInput
                  type="text"
                  placeholder="2000"
                  name="pointValue"
                  value={updateTask.pointValue}
                  onIonChange={handleChange}
                />
                <IonLabel position="stacked">Assigned To</IonLabel>
                <IonInput
                  type="text"
                  placeholder="Jimmy"
                  name="assignedTo"
                  value={updateTask.assignedTo}
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

export default EditTask;
