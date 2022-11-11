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
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TaskContext from "../contexts/TaskContext";
import UserContext from "../contexts/UserContext";
import "./Tasks.css";

const Tasks: React.FC = (props) => {
  //set history variable to useHistory for Navigation
  let history = useHistory();

  /* Start User Info */
  //Check if logged in
  function hasJWT() {
    let flag = false;
    //check user has JWT token
    localStorage.getItem("myUserToken") ? (flag = true) : (flag = false);
    return flag;
  }
  function parseJwt(token) {
    if (!token) {
      return;
    }
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    return JSON.parse(window.atob(base64));
  }

  //get current user
  function getUserFromToken() {
    if (hasJWT()) {
      let user = localStorage.getItem("myUserToken");
      let userToken = parseJwt(user);
      return userToken.userId;
    }
  }

  let getSingleUser = getUserFromToken();

  //Use User Context
  let { user, getOneUser } = useContext(UserContext);

  useEffect(() => {
    async function fetch() {
      await getOneUser(getSingleUser).then((user) => setUsers(user));
    }
    fetch();
  }, [getSingleUser, getOneUser]);

  let { userId, username, roleId, householdName } = user;

  const [users, setUsers] = useState({
    userId: userId,
    username: username,
    roleId: roleId,
    householdName: householdName,
  });

  /* End User Info */

  // Create Task Functions

  let [newTask, setNewTask] = useState({
    taskId: 0,
    title: "",
    pointValue: "",
    assignedTo: "",
    completed: false,
  });

  //use the TaskContext
  let { deleteTask, addTask, editTask } = useContext(TaskContext);

  //Listen for the input value of the task creation form
  function handleChange(event: any) {
    setNewTask((prevValue) => {
      return { ...prevValue, [event.target.name]: event.target.value };
    });
  }

  // Addtaks Function
  function handleSubmit(event: any) {
    event.preventDefault();
    addTask(newTask).then(() => {
      history.push("/tasks");
      window.location.reload();
    });
  }

  //Edit Task Functions
  let [updateTask, setUpdateTask] = useState({
    completed: true,
  });

  //Checkbox Functions
  function markComplete(taskId: any) {
    console.log(updateTask);
    editTask(updateTask, taskId).then(() => {
      history.push("/tasks");
      //window.location.reload();
    });
  }

  function isChecked(event: any, taskId) {
    //Create Variable to save checkbox selection
    let { checked } = event.target;
    //console.log("checked " + checked);
    //update the state of completed value
    setUpdateTask((updateTask) => ({
      ...updateTask,
      completed: checked,
    }));

    markComplete(taskId);
  }

  function viewEditPage(taskId: any) {
    history.push(`/tasks/${taskId}`);
    window.location.reload();
  }

  //Delete Task Functions
  function removeTask(taskId: any) {
    deleteTask(taskId)
      .then(() => {
        history.push("/tasks");
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
            </IonCol>
          </IonRow>
          {hasJWT() && users.roleId === "parent" ? (
            <IonRow class="ion-padding ion-text-center">
              <IonCol size="12">
                <h1>Add Tasks</h1>
                <form onSubmit={handleSubmit} className="taskSubmit">
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
          ) : (
            ""
          )}

          <UserContext.Consumer>
            {({ user }) => {
              if (hasJWT()) {
                return (
                  <TaskContext.Consumer>
                    {({ task }) => {
                      if (hasJWT() && users.roleId === "parent") {
                        return (
                          <IonRow class="ion-padding ion-text-center">
                            <IonCol size="12">
                              <IonList className="homeTasklist parent todo">
                                <h2>To Do</h2>
                                {task.map((t: any, index) => {
                                  if (t.completed === false) {
                                    return (
                                      <IonItemSliding key={index}>
                                        <IonItem key={index} lines="none">
                                          <IonLabel>
                                            <span className="labelTitle">
                                              Task:
                                              <span className="labelValue">
                                                {t.title}
                                              </span>
                                            </span>
                                            <span className="labelTitle">
                                              Points:
                                              <span className="labelValue">
                                                {t.pointValue}
                                              </span>
                                            </span>
                                            <span className="labelTitle">
                                              Assigned To:
                                              <span className="labelValue">
                                                {t.assignedTo}
                                              </span>
                                            </span>
                                            <span className="labelTitle">
                                              Created By:
                                              <span className="labelValue">
                                                <a href={`/profile`}>
                                                  {users.username}
                                                </a>
                                              </span>
                                            </span>
                                          </IonLabel>
                                          <IonCheckbox
                                            slot="start"
                                            onIonChange={(e) =>
                                              isChecked(e, `${t.taskId}`)
                                            }
                                            name={`completed`}
                                            value={updateTask.completed}
                                          ></IonCheckbox>
                                        </IonItem>
                                        <IonItemOptions side="end">
                                          <IonItemOption
                                            color="tertiary"
                                            onClick={() =>
                                              viewEditPage(`${t.taskId}`)
                                            }
                                          >
                                            Edit
                                          </IonItemOption>
                                          <IonItemOption
                                            color="danger"
                                            onClick={() =>
                                              removeTask(`${t.taskId}`)
                                            }
                                          >
                                            Delete
                                          </IonItemOption>
                                        </IonItemOptions>
                                      </IonItemSliding>
                                    );
                                  } else {
                                    return <p></p>;
                                  }
                                })}
                              </IonList>
                            </IonCol>
                            <IonCol size="12">
                              <IonList className="homeTasklist parent done">
                                <h2>Done</h2>
                                {task.map((t: any, index) => {
                                  if (t.completed === true) {
                                    return (
                                      <IonItemSliding key={index}>
                                        <IonItem key={index} lines="none">
                                          <IonLabel>
                                            <span className="labelTitle">
                                              Task:
                                              <span className="labelValue">
                                                {t.title}
                                              </span>
                                            </span>
                                            <span className="labelTitle">
                                              Points:
                                              <span className="labelValue">
                                                {t.pointValue}
                                              </span>
                                            </span>
                                            <span className="labelTitle">
                                              Assigned To:
                                              <span className="labelValue">
                                                {t.assignedTo}
                                              </span>
                                            </span>
                                            <span className="labelTitle">
                                              Created By:
                                              <span className="labelValue">
                                                <a href={`/profile`}>
                                                  {users.username}
                                                </a>
                                              </span>
                                            </span>
                                          </IonLabel>
                                          <IonCheckbox
                                            slot="start"
                                            onIonChange={(e) =>
                                              isChecked(e, `${t.taskId}`)
                                            }
                                            checked={t.completed}
                                            name={`completed`}
                                            value={updateTask.completed}
                                          ></IonCheckbox>
                                        </IonItem>
                                        <IonItemOptions side="end">
                                          <IonItemOption
                                            color="tertiary"
                                            onClick={() =>
                                              viewEditPage(`${t.taskId}`)
                                            }
                                          >
                                            Edit
                                          </IonItemOption>
                                          <IonItemOption
                                            color="danger"
                                            onClick={() =>
                                              removeTask(`${t.taskId}`)
                                            }
                                          >
                                            Delete
                                          </IonItemOption>
                                        </IonItemOptions>
                                      </IonItemSliding>
                                    );
                                  } else {
                                    return <p></p>;
                                  }
                                })}
                              </IonList>
                            </IonCol>
                          </IonRow>
                        );
                      } else if (hasJWT() && users.roleId === "child") {
                        return (
                          <IonRow class="ion-padding ion-text-center">
                            <IonCol size="12">
                              <IonList className="homeTasklist parent todo">
                                <h2>To Do</h2>
                                {task.map((t: any, index) => {
                                  let userHouseHold = users.householdName;
                                  console.log(householdName);
                                  if (
                                    t.completed === false &&
                                    users.householdName === userHouseHold
                                  ) {
                                    return (
                                      <IonItem key={index} lines="none">
                                        <IonLabel>
                                          <span className="labelTitle">
                                            Task:
                                            <span className="labelValue">
                                              {t.title}
                                            </span>
                                          </span>
                                          <span className="labelTitle">
                                            Points:
                                            <span className="labelValue">
                                              {t.pointValue}
                                            </span>
                                          </span>
                                          <span className="labelTitle">
                                            Assigned To:
                                            <span className="labelValue">
                                              {t.assignedTo}
                                            </span>
                                          </span>
                                          <span className="labelTitle">
                                            Created By:
                                            <span className="labelValue">
                                              <a href={`/profile`}>
                                                {users.username}
                                              </a>
                                            </span>
                                          </span>
                                        </IonLabel>
                                        <IonCheckbox
                                          slot="start"
                                          onIonChange={(e) =>
                                            isChecked(e, `${t.taskId}`)
                                          }
                                          name={`completed`}
                                          value={updateTask.completed}
                                        ></IonCheckbox>
                                      </IonItem>
                                    );
                                  } else {
                                    return <p></p>;
                                  }
                                })}
                              </IonList>
                            </IonCol>
                            <IonCol size="12">
                              <IonList className="homeTasklist parent done">
                                <h2>Done</h2>
                                {task.map((t: any, index) => {
                                  let userHouseHold = users.householdName;
                                  if (
                                    t.completed === true &&
                                    users.householdName === userHouseHold
                                  ) {
                                    return (
                                      <IonItem key={index} lines="none">
                                        <IonLabel>
                                          <span className="labelTitle">
                                            Task:
                                            <span className="labelValue">
                                              {t.title}
                                            </span>
                                          </span>
                                          <span className="labelTitle">
                                            Points:
                                            <span className="labelValue">
                                              {t.pointValue}
                                            </span>
                                          </span>
                                          <span className="labelTitle">
                                            Assigned To:
                                            <span className="labelValue">
                                              {t.assignedTo}
                                            </span>
                                          </span>
                                          <span className="labelTitle">
                                            Created By:
                                            <span className="labelValue">
                                              <a href={`/users/${t.userId}`}>
                                                {users.username}
                                              </a>
                                            </span>
                                          </span>
                                        </IonLabel>
                                        <IonCheckbox
                                          slot="start"
                                          onIonChange={(e) =>
                                            isChecked(e, `${t.taskId}`)
                                          }
                                          checked={t.completed}
                                          name={`completed`}
                                          value={updateTask.completed}
                                        ></IonCheckbox>
                                      </IonItem>
                                    );
                                  } else {
                                    return <p></p>;
                                  }
                                })}
                              </IonList>
                            </IonCol>
                          </IonRow>
                        );
                      }
                    }}
                  </TaskContext.Consumer>
                );
              }
            }}
          </UserContext.Consumer>
        </IonGrid>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default Tasks;
