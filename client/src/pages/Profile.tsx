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
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { format, parseISO } from "date-fns";

import Footer from "../components/Footer";
import Header from "../components/Header";

import UserContext from "../contexts/UserContext";
import TaskContext from "../contexts/TaskContext";
import RewardsContext from "../contexts/RewardsContext";
import { IonCard } from "@ionic/react";
import { IonCardHeader } from "@ionic/react";
import { IonCardTitle } from "@ionic/react";
import { IonCardSubtitle } from "@ionic/react";
import { IonCardContent } from "@ionic/react";
import { IonInput } from "@ionic/react";

const Profile: React.FC = () => {
  //set history variable to useHistory for Navigation
  let history = useHistory();

  //Use TaskContext
  let { task, deleteTask } = useContext(TaskContext);

  let { taskId, title } = task;

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
  let { user, getOneUser, deleteUser } = useContext(UserContext);

  // useEffect(() => {
  //   async function fetch() {
  //     await getUserTasks().then((user) => setUserInfo(user));
  //   }
  //   fetch();
  // }, [getUserTasks]);

  useEffect(() => {
    async function fetch() {
      await getOneUser(getSingleUser).then((user) => setUserInfo(user));
    }
    fetch();
  }, [getSingleUser, getOneUser]);

  //Get Profile data
  let {
    userId,
    username,
    name,
    bio,
    roleId,
    householdName,
    points,
    profileImg,
    createdAt,
  } = user;

  /* End User Info */
  let taskUserId = user.userId;

  //Set User Info
  let [userInfo, setUserInfo] = useState({
    userId: userId,
    username: username,
    name: name,
    bio: bio,
    householdName: householdName,
    roleId: roleId,
    profileImg: profileImg,
    taskId: taskId,
    taskUserId: taskUserId,
    title: title,
    points: points,
    createdAt: createdAt,
  });

  function editProfile(userId: any) {
    history.push(`/users/${userId}`);
    window.location.reload();
  }

  //Delete Profile Functions
  function deleteProfile(userId: any) {
    deleteUser(userId)
      .then(() => {
        history.push("/home");
        window.location.reload();
      })
      .catch((error: any) => {
        history.push("/signin");
        console.log(error);
      });
  }

  /** Task Functions **/
  function viewEditPage(taskId: any) {
    history.push(`/tasks/${taskId}`);
    window.location.reload();
  }

  //Delete Task Functions
  function removeTask(taskId: any) {
    deleteTask(taskId)
      .then(() => {
        history.push("/profile");
        window.location.reload();
      })
      .catch((error: any) => {
        history.push("/signin");
        console.log(error);
      });
  }

  //update total user points
  function totalUserPoints(userpoints, taskpoints) {
    let currentUserPoints = userpoints;
    let currentTaskPoints = taskpoints;
    let totalPoints = currentTaskPoints + currentUserPoints;
    return totalPoints;
  }

  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonGrid>
          {/* Start Parent Profile Content */}
          <UserContext.Consumer>
            {({ user }) => {
              if (hasJWT() && userInfo.roleId === "parent") {
                return (
                  <div>
                    <IonRow class="ion-padding ion-text-center">
                      <IonCol size="12">
                        <h1>Hello, {userInfo.name}</h1>
                        <hr />
                      </IonCol>
                    </IonRow>
                    <IonRow class="ion-padding ion-text-center">
                      <IonCol size-lg="6" size-xs="12">
                        {/* <div>
                          <IonButton>Send Reminder</IonButton>
                          <IonButton color="danger">Edit</IonButton>
                        </div> */}
                        <IonCol size-lg="6" size-xs="12" class="ion-padding">
                          <h3>Your Household's Tasks</h3>
                          <TaskContext.Consumer>
                            {({ task }) => {
                              return (
                                <IonRow class="ion-padding ion-text-center">
                                  <IonCol size="12">
                                    <IonList className="homeTasklist profile todo">
                                      <h4>To Do</h4>
                                      {task.map((t: any, index) => {
                                        let taskCreated = parseISO(t.createdAt);
                                        let taskCreatedDate = format(
                                          taskCreated,
                                          "M/dd/yy"
                                        );
                                        if (
                                          t.completed === false &&
                                          userInfo.userId === t.userId
                                        ) {
                                          return (
                                            <IonItem key={index} lines="none">
                                              <IonLabel>
                                                <span className="labelTitle">
                                                  <span className="labelValue">
                                                    {t.title}
                                                  </span>
                                                </span>
                                                <span className="labelTitle">
                                                  For:
                                                  <span className="labelValue">
                                                    {t.assignedTo}
                                                  </span>
                                                </span>
                                                <span className="labelTitle">
                                                  On:
                                                  <span className="labelValue">
                                                    {taskCreatedDate}
                                                  </span>
                                                </span>
                                              </IonLabel>
                                              <IonButton
                                                color="tertiary"
                                                onClick={() =>
                                                  viewEditPage(`${t.taskId}`)
                                                }
                                              >
                                                Edit Task
                                              </IonButton>
                                              <IonButton
                                                color="danger"
                                                onClick={() =>
                                                  removeTask(`${t.taskId}`)
                                                }
                                              >
                                                Delete Task
                                              </IonButton>
                                            </IonItem>
                                          );
                                        } else {
                                          return <p></p>;
                                        }
                                      })}
                                    </IonList>
                                  </IonCol>
                                  <IonCol size="12">
                                    <IonList className="homeTasklist profile done">
                                      <h4>Done</h4>
                                      {task.map((t: any, index) => {
                                        let taskCreated = parseISO(t.createdAt);
                                        let taskCreatedDate = format(
                                          taskCreated,
                                          "M/dd/yy"
                                        );
                                        if (
                                          t.completed === true &&
                                          userInfo.userId === t.userId
                                        ) {
                                          return (
                                            <IonItem key={index} lines="none">
                                              <IonLabel>
                                                <span className="labelTitle">
                                                  <span className="labelValue">
                                                    {t.title}
                                                  </span>
                                                </span>
                                                <span className="labelTitle">
                                                  For:
                                                  <span className="labelValue">
                                                    {t.assignedTo}
                                                  </span>
                                                </span>
                                                <span className="labelTitle">
                                                  On:
                                                  <span className="labelValue">
                                                    {taskCreatedDate}
                                                  </span>
                                                </span>
                                              </IonLabel>
                                              <IonButton
                                                color="tertiary"
                                                onClick={() =>
                                                  viewEditPage(`${t.taskId}`)
                                                }
                                              >
                                                Edit Task
                                              </IonButton>
                                              <IonButton
                                                color="danger"
                                                onClick={() =>
                                                  removeTask(`${t.taskId}`)
                                                }
                                              >
                                                Delete Task
                                              </IonButton>
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
                            }}
                          </TaskContext.Consumer>
                        </IonCol>
                      </IonCol>
                      <IonCol size-lg="6" size-xs="12" class="ion-text-center">
                        <IonRow class="ion-padding ion-text-center profileCard">
                          <IonCard>
                            <IonThumbnail>
                              {!userInfo.profileImg ? (
                                <img
                                  alt={userInfo.name}
                                  src="https://via.placeholder.com/500"
                                />
                              ) : (
                                <img
                                  alt={userInfo.name}
                                  src={userInfo.profileImg}
                                />
                              )}
                            </IonThumbnail>
                            <IonCardHeader>
                              <IonCardTitle>User: {userInfo.name}</IonCardTitle>
                              <IonCardSubtitle>
                                Household: {userInfo.householdName}
                              </IonCardSubtitle>
                            </IonCardHeader>
                            <IonCardContent>
                              <div>Bio: {userInfo.bio}</div>
                              <div className="options">
                                <IonList>
                                  <IonItem lines="none">
                                    <IonButton
                                      color="tertiary"
                                      expand="block"
                                      size="default"
                                      onClick={() =>
                                        editProfile(`${userInfo.userId}`)
                                      }
                                    >
                                      Edit Profile
                                    </IonButton>
                                  </IonItem>
                                  <IonItem lines="none">
                                    <IonButton
                                      color="danger"
                                      expand="block"
                                      size="default"
                                      onClick={() =>
                                        deleteProfile(`${userInfo.userId}`)
                                      }
                                    >
                                      Delete Profile
                                    </IonButton>
                                  </IonItem>
                                  <IonItem lines="none">
                                    <IonButton
                                      expand="block"
                                      size="default"
                                      href="/signupchild"
                                    >
                                      Add Child
                                    </IonButton>
                                  </IonItem>
                                  <IonItem lines="none">
                                    <IonButton
                                      expand="block"
                                      size="default"
                                      href="/discussion"
                                    >
                                      Family Discussion
                                    </IonButton>
                                  </IonItem>
                                </IonList>
                              </div>
                            </IonCardContent>
                          </IonCard>
                        </IonRow>
                      </IonCol>
                    </IonRow>
                  </div>
                );
              } else if (hasJWT() && userInfo.roleId === "child") {
                return (
                  <div>
                    <IonRow class="ion-padding ion-text-center">
                      <IonCol size-lg="6" size-xs="12" class="ion-padding">
                        <h3>Your Household's Tasks</h3>
                        <TaskContext.Consumer>
                          {({ task }) => {
                            return (
                              <div>
                                <IonRow class="ion-padding ion-text-center">
                                  <IonCol size-lg="6" size-xs="12">
                                    <IonList className="homeTasklist profile todo">
                                      <h4>To Do</h4>
                                      {task.map((t: any, index) => {
                                        let userHouseHold =
                                          userInfo.householdName;
                                        let taskCreated = parseISO(t.createdAt);
                                        let taskCreatedDate = format(
                                          taskCreated,
                                          "M/dd/yy"
                                        );
                                        if (
                                          t.completed === false &&
                                          userInfo.householdName ===
                                            userHouseHold
                                        ) {
                                          return (
                                            <IonItem key={index} lines="none">
                                              <IonLabel>
                                                <span className="labelTitle">
                                                  <span className="labelValue">
                                                    {t.title}
                                                  </span>
                                                </span>
                                                <span className="labelTitle">
                                                  On:
                                                  <span className="labelValue">
                                                    {taskCreatedDate}
                                                  </span>
                                                </span>
                                              </IonLabel>
                                            </IonItem>
                                          );
                                        } else {
                                          return <p></p>;
                                        }
                                      })}
                                    </IonList>
                                  </IonCol>
                                  <IonCol size-lg="6" size-xs="12">
                                    <IonList className="homeTasklist profile done">
                                      <h4>Done</h4>
                                      {task.map((t: any, index) => {
                                        let userHouseHold =
                                          userInfo.householdName;
                                        let taskCreated = parseISO(t.createdAt);
                                        let taskCreatedDate = format(
                                          taskCreated,
                                          "M/dd/yy"
                                        );
                                        if (
                                          t.completed === true &&
                                          userInfo.householdName ===
                                            userHouseHold
                                        ) {
                                          return (
                                            <IonItem key={index} lines="none">
                                              <IonLabel>
                                                <span className="labelTitle">
                                                  <span className="labelValue">
                                                    {t.title}
                                                  </span>
                                                </span>
                                                <span className="labelTitle">
                                                  On:
                                                  <span className="labelValue">
                                                    {taskCreatedDate}
                                                  </span>
                                                </span>
                                              </IonLabel>
                                            </IonItem>
                                          );
                                        } else {
                                          return <p></p>;
                                        }
                                      })}
                                    </IonList>
                                  </IonCol>
                                </IonRow>
                                <IonRow class="ion-padding ion-text-center">
                                  <IonCol size="12">
                                    <IonButton
                                      expand="block"
                                      size="default"
                                      href="/tasks"
                                    >
                                      View Tasks
                                    </IonButton>
                                  </IonCol>
                                </IonRow>
                              </div>
                            );
                          }}
                        </TaskContext.Consumer>
                        <IonRow class="ion-text-center progress">
                          {/* Start Progess Bar */}
                          <IonCol size="12">
                            <div className="rewardProgress">
                              <IonItem counter={true} lines="none">
                                <IonLabel position="floating">
                                  Reward Progress
                                </IonLabel>
                                <IonInput
                                  maxlength={1000}
                                  value={task.pointValue}
                                ></IonInput>
                              </IonItem>
                            </div>
                          </IonCol>
                          {/* End Progess Bar */}
                        </IonRow>
                        <IonRow class="ion-text-center rewards">
                          {/* Start Progess Bar */}
                          <IonCol size="12">
                            <RewardsContext.Consumer>
                              {({ reward }) => {
                                return (
                                  <IonRow class="ion-padding ion-text-center">
                                    <IonCol size-lg="12">
                                      <IonList className="homeTasklist profile todo">
                                        <h4>Available Rewards</h4>
                                        {reward.map((r: any, index) => {
                                          if (r && r.pointValue >= 50) {
                                            return (
                                              <IonItem key={index} lines="none">
                                                <IonLabel>
                                                  <span className="labelTitle">
                                                    <span className="labelValue">
                                                      {r.title}
                                                    </span>
                                                  </span>
                                                  <span className="labelTitle">
                                                    On:
                                                    <span className="labelValue">
                                                      {r.title}
                                                    </span>
                                                  </span>
                                                </IonLabel>
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
                              }}
                            </RewardsContext.Consumer>
                          </IonCol>
                          {/* End Progess Bar */}
                        </IonRow>
                      </IonCol>
                      <IonCol size-lg="6" size-xs="12" class="ion-text-center">
                        <IonRow class="ion-padding ion-text-center profileCard">
                          <IonCard>
                            <IonThumbnail>
                              {!userInfo.profileImg ? (
                                <img
                                  alt={userInfo.name}
                                  src="https://via.placeholder.com/500"
                                />
                              ) : (
                                <img
                                  alt={userInfo.name}
                                  src={userInfo.profileImg}
                                />
                              )}
                            </IonThumbnail>
                            <IonCardHeader>
                              <IonCardTitle>User: {userInfo.name}</IonCardTitle>
                              <IonCardSubtitle>
                                Household: {userInfo.householdName}
                              </IonCardSubtitle>
                            </IonCardHeader>
                            <IonCardContent>
                              <div>Bio: {userInfo.bio}</div>
                              <div className="options">
                                <IonList>
                                  <IonItem lines="none">
                                    <IonButton
                                      color="tertiary"
                                      expand="block"
                                      size="default"
                                      onClick={() =>
                                        editProfile(`${userInfo.userId}`)
                                      }
                                    >
                                      Edit Profile
                                    </IonButton>
                                  </IonItem>
                                  <IonItem lines="none">
                                    <IonButton
                                      expand="block"
                                      size="default"
                                      href="/discussion"
                                    >
                                      Family Discussion
                                    </IonButton>
                                  </IonItem>
                                </IonList>
                              </div>
                            </IonCardContent>
                          </IonCard>
                        </IonRow>
                      </IonCol>
                    </IonRow>
                  </div>
                );
              } else {
              }
            }}
          </UserContext.Consumer>
          {/* End Parent Profile Content */}
          {/* Start Child Profile Content */}

          {/* End CHild Profile Content */}
        </IonGrid>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default Profile;
