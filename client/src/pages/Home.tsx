import {
  IonButton,
  IonCheckbox,
  IonCol,
  IonContent,
  IonGrid,
  IonInput,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
} from "@ionic/react";
import { useContext, useState } from "react";
import { useHistory } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TaskContext from "../contexts/TaskContext";
import "./Home.css";

const Home: React.FC = () => {
  let [newTask, setNewTask] = useState({
    title: "",
    pointValue: "",
    assignedTo: "",
  });

  let [updateTask, setUpdateTask] = useState({
    completed: "",
  });

  let { deleteTask, addTask, editTask } = useContext(TaskContext);

  let history = useHistory();

  function handleChange(event: any) {
    setNewTask((prevValue) => {
      return { ...prevValue, [event.target.name]: event.target.value };
    });
  }

  function handleUpdate(event: any) {
    event.preventDefault();
    if (event.target.checked) {
      let isChecked = event.target.value;
      let isCheckedToString = isChecked.toString();
      console.log(isCheckedToString);
      setUpdateTask(isCheckedToString);
    } else {
    }
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    addTask(newTask).then(() => {
      history.push("/home");
      window.location.reload();
    });
  }

  function removeTask(taskId: any) {
    deleteTask(taskId)
      .then(() => {
        history.push("/home");
        window.location.reload();
      })
      .catch((error: any) => {
        history.push("/signin");
        console.log(error);
      });
  }

  console.log(updateTask);

  function markComplete(taskId: any) {
    editTask(updateTask, taskId).then(() => {
      history.push("/home");
      window.location.reload();
    });
  }

  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonGrid>
          <IonRow class="ion-padding ion-text-center">
            <IonCol size="12">
              <h1>Your Tasks</h1>
              <form onSubmit={handleSubmit}>
                <IonItem>
                  <IonLabel position="stacked">Enter task title</IonLabel>
                  <IonInput
                    type="text"
                    placeholder="Do Stuff"
                    name="title"
                    value={newTask.title}
                    onIonChange={handleChange}
                  />
                  <IonLabel position="stacked">Point Value</IonLabel>
                  <IonInput
                    type="text"
                    placeholder="2000"
                    name="pointValue"
                    value={newTask.pointValue}
                    onIonChange={handleChange}
                  />
                  <IonLabel position="stacked">Assigned To</IonLabel>
                  <IonInput
                    type="text"
                    placeholder="Jimmy"
                    name="assignedTo"
                    value={newTask.assignedTo}
                    onIonChange={handleChange}
                  />
                </IonItem>
                <IonButton type="submit" expand="block">
                  Add Task
                </IonButton>
              </form>
            </IonCol>
          </IonRow>
          <IonRow class="ion-padding ion-text-center">
            <IonCol size="12">
              <IonList className="homeTasklist">
                <TaskContext.Consumer>
                  {({ task }) => {
                    return (
                      <div>
                        <h2>To Do</h2>
                        {task.map((t: any) => {
                          return (
                            <IonItemSliding key={t.taskId}>
                              <IonItem>
                                <IonLabel>
                                  <span>{t.title}</span>
                                  <span>Points: {t.pointValue}</span>
                                  <span>Assigned To: {t.assignedTo}</span>
                                </IonLabel>
                                <IonCheckbox
                                  slot="start"
                                  checked={t.completed}
                                  onIonChange={handleUpdate}
                                  onClick={() => markComplete(`${t.taskId}`)}
                                ></IonCheckbox>
                                <IonButton
                                  color="danger"
                                  href={`/tasks/${t.taskId}`}
                                >
                                  Edit
                                </IonButton>
                                <IonItemOptions>
                                  <IonItemOption
                                    color="danger"
                                    onClick={() => removeTask(`${t.taskId}`)}
                                  >
                                    Delete
                                  </IonItemOption>
                                </IonItemOptions>
                              </IonItem>
                            </IonItemSliding>
                          );
                        })}
                      </div>
                    );
                  }}
                </TaskContext.Consumer>
              </IonList>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default Home;
