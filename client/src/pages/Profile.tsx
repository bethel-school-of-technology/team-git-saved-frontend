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
import { useHistory, useParams } from "react-router";

import Footer from "../components/Footer";
import Header from "../components/Header";

import UserContext from "../contexts/UserContext";
import TaskContext from "../contexts/TaskContext";

const Profile: React.FC = () => {
  // Get Url Params
  let { id } = useParams<{ id: string }>();

  //set history variable to useHistory for Navigation
  let history = useHistory();

  //Use UserContext
  let { user, getUserTasks, deleteUser } = useContext(UserContext);

  //Use TaskContext
  let { task } = useContext(TaskContext);

  useEffect(() => {
    async function fetch() {
      await getUserTasks(id).then((user) => setUserInfo(user));
    }
    fetch();
  }, [id, getUserTasks]);

  //Get Profile data
  let { userId, username, name, bio, roleId, householdName, createdAt } = user;

  let { taskId, title } = task;

  let taskUserId = task.userId;

  //Set User Info
  let [userInfo, setUserInfo] = useState({
    id: userId,
    username: username,
    name: name,
    bio: bio,
    householdName: householdName,
    roleId: roleId,
    taskId: taskId,
    taskUserId: taskUserId,
    title: title,
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

  //Check for token
  function hasJWT() {
    let flag = false;

    //check user has JWT token
    localStorage.getItem("myUserToken") ? (flag = true) : (flag = false);

    return flag;
  }
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonGrid>
          <IonRow class="ion-padding ion-text-center">
            <IonCol size="12">
              <h1>Hello, User!</h1>
              <hr />
            </IonCol>
          </IonRow>
          {/* Start Parent Profile Content */}
          <UserContext.Consumer>
            {
            {
              (hasJWT() && userInfo.roleId === "parent") ?
                return <IonRow class="ion-padding ion-text-center">
                    <IonCol size-lg="6" size-xs="12">
                      <IonRow class="ion-padding">
                        <IonCol size-lg="6" size-xs="12">
                          <h2>{userInfo.username}</h2>
                        </IonCol>
                        <IonCol size-lg="6" size-xs="12">
                          <IonButton>Send Reminder</IonButton>
                          <IonButton color="danger">Edit</IonButton>
                        </IonCol>
                      </IonRow>
                      <IonRow class="ion-padding">
                        <IonCol size-lg="6" size-xs="12">
                          <h3>Completed Tasks</h3>
                          <div className="tasklist">
                            child 1 has 8 complete out of 20 tasks
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
                            <span>Household: {userInfo.householdName}</span>
                            <span>Bio: {userInfo.bio}</span>
                          </div>
                        </IonCol>
                      </IonRow>
                      <IonRow class="ion-padding">
                        <IonCol size="12">
                          <h2>Options</h2>
                          <div className="options">
                            <IonList>
                              <IonItem>
                                <IonButton
                                  size="default"
                                  onClick={() => editProfile(`${userInfo.id}`)}
                                >
                                  Edit Profile
                                </IonButton>
                              </IonItem>
                              <IonItem>
                                <IonButton
                                  size="default"
                                  onClick={() =>
                                    deleteProfile(`${userInfo.id}`)
                                  }
                                >
                                  Delete Profile
                                </IonButton>
                              </IonItem>
                              <IonItem>
                                <IonButton size="default">Add Child</IonButton>
                              </IonItem>
                              <IonItem>
                                <IonButton size="default">
                                  Family Discussion
                                </IonButton>
                              </IonItem>
                            </IonList>
                          </div>
                        </IonCol>
                      </IonRow>
                    </IonCol>
                  </IonRow>
               : (user.roleId === "child") ?
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
                    {/* Start Progess Bar */}
                    <IonCol size="12">
                      <hr />
                      <div>
                        <h3>
                          Progress : <span>40/100</span>
                        </h3>
                      </div>
                    </IonCol>
                    {/* End Progess Bar */}
                  </IonRow>
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
