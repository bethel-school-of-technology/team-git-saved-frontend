import {
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonLabel,
  IonInput,
} from "@ionic/react";
import { useContext, useState } from "react";
import { useHistory } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import UserContext from "../contexts/UserContext";

const SignUp: React.FC = () => {
  let [newUser, setNewUser] = useState({
    username: "",
    password: "",
    name: "",
    householdName: "",
    roleId: "",
    email: "",
  });

  let { createUser } = useContext(UserContext);
  let navigate = useHistory();

  function handleChange(event) {
    setNewUser((prevValue) => {
      return { ...prevValue, [event.target.name]: event.target.value };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    createUser(newUser)
      .then(() => {
        navigate.push("/signin");
      })
      .catch((error) => {
        console.log(error);
        window.alert("Failed registration: error creating user");
      });
  }

  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonGrid>
          <IonRow class="ion-padding">
            <IonCol size="12">
              <div className="signupform">
                <h1 className="ion-text-center">Sign Up</h1>
                <form onSubmit={handleSubmit}>
                  <IonLabel position="stacked">UserName: </IonLabel>
                  <IonInput
                    class="color"
                    onIonChange={handleChange}
                    placeholder="Enter Username"
                    type="text"
                    name="username"
                    value={newUser.username}
                  />
                  <br></br>
                  <IonLabel position="stacked">Password: </IonLabel>
                  <IonInput
                    class="color"
                    onIonChange={handleChange}
                    placeholder="Enter Password"
                    type="text"
                    name="password"
                    value={newUser.password}
                  />
                  <br></br>
                  <IonLabel position="stacked">Name: </IonLabel>
                  <IonInput
                    class="color"
                    onIonChange={handleChange}
                    placeholder="Enter Name"
                    type="text"
                    name="name"
                    value={newUser.name}
                  />
                  <br></br>
                  <IonLabel position="stacked">Role: </IonLabel>
                  <IonInput
                    class="color"
                    onIonChange={handleChange}
                    placeholder="Select Your Role"
                    type="text"
                    name="roleId"
                  />
                  <br></br>
                  <IonLabel position="stacked">Household: </IonLabel>
                  <IonInput
                    class="color"
                    onIonChange={handleChange}
                    placeholder="Household Name"
                    type="text"
                    name="householdName"
                    value={newUser.householdName}
                  />
                  <br></br>
                  <IonRow class="ion-padding ion-text-center">
                    <IonCol size="12">
                      <IonButton>Sign Up</IonButton>
                    </IonCol>
                  </IonRow>
                </form>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default SignUp;
