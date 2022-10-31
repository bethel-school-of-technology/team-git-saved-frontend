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
  // Create Task Functions
  let [newTask, setNewTask] = useState({
    title: "",
    pointValue: "",
    assignedTo: "",
  });

  let { deleteTask, addTask, editTask } = useContext(TaskContext);

  let history = useHistory();

  function handleChange(event: any) {
    setNewTask((prevValue) => {
      return { ...prevValue, [event.target.name]: event.target.value };
    });
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    addTask(newTask).then(() => {
      history.push("/home");
      window.location.reload();
    });
  }

  //Edit Task Functions
  let [updateTask, setUpdateTask] = useState({
    completed: false,
  });

  const isChecked = (event: any) => {
    const { checked } = event.target;

    console.log("checked " + checked);

    setUpdateTask((updateTask) => ({
      ...updateTask,
      completed: checked,
    }));
  };

  function viewEditPage(taskId: any) {
    history.push(`/tasks/${taskId}`);
    window.location.reload();
  }

  //Checkbox Functions
  function markComplete(taskId: any) {
    editTask(updateTask, taskId).then(() => {
      history.push("/home");
      window.location.reload();
    });
  }

  //Delete Task Functions
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
                          if (t.completed === false) {
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
                                    onIonChange={isChecked}
                                    checked={updateTask.completed}
                                    name={`completed`}
                                    value={updateTask.completed}
                                    onClick={() => markComplete(`${t.taskId}`)}
                                  ></IonCheckbox>
                                </IonItem>
                                <IonItemOptions side="end">
                                  <IonItemOption
                                    color="success"
                                    onClick={() => viewEditPage(`${t.taskId}`)}
                                  >
                                    Edit
                                  </IonItemOption>
                                  <IonItemOption
                                    color="danger"
                                    onClick={() => removeTask(`${t.taskId}`)}
                                  >
                                    Delete
                                  </IonItemOption>
                                </IonItemOptions>
                              </IonItemSliding>
                            );
                          }
                        })}
                      </div>
                    );
                  }}
                </TaskContext.Consumer>
              </IonList>
              <IonList className="homeTasklist">
                <TaskContext.Consumer>
                  {({ task }) => {
                    return (
                      <div>
                        <h2>Complete</h2>
                        {task.map((t: any) => {
                          if (t.completed === true) {
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
                                    onIonChange={isChecked}
                                    checked={updateTask.completed}
                                    name={`completed`}
                                    value={updateTask.completed}
                                    onClick={() => markComplete(`${t.taskId}`)}
                                  ></IonCheckbox>
                                </IonItem>
                                <IonItemOptions side="end">
                                  <IonItemOption
                                    color="success"
                                    onClick={() => viewEditPage(`${t.taskId}`)}
                                  >
                                    Edit
                                  </IonItemOption>
                                  <IonItemOption
                                    color="danger"
                                    onClick={() => removeTask(`${t.taskId}`)}
                                  >
                                    Delete
                                  </IonItemOption>
                                </IonItemOptions>
                              </IonItemSliding>
                            );
                          }
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
