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
import UserContext from "../contexts/UserContext"
import Footer from "../components/Footer";
import Header from "../components/Header";

const SignIn: React.FC = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    let { signInUser } = useContext(UserContext);
    let history = useHistory();

    function handleSubmit(event: any) {
        event.preventDefault();
        signInUser(username, password).then(() => {
            history.push('/signin');
        // }).catch(error => {
        //     console.log(error);
        //     window.alert('Failed login');
        });
    }

    

  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonGrid>
          <IonRow class="ion-padding ion-text-center">
            <IonCol size="12">
            
              <h1>Sign In</h1>
              
            </IonCol>
          </IonRow>
          <IonRow class="ion-padding">
            <IonCol size="12">
            <form className="form" onSubmit={handleSubmit}>
              {/* <div className="form"> */}
                <IonLabel position="stacked">UserName: </IonLabel>
                <IonInput
                  class="color"
                  placeholder="Enter Username"
                  type="text"
                  name="username"
                  onIonChange={(e) => setUsername(e.target.value)}
                />{" "}
                <br></br>
                <IonLabel position="stacked">Password: </IonLabel>
                <IonInput
                  class="color"
                  placeholder="Enter Password"
                  type="text"
                  name="password"
                  onIonChange={(e) => setPassword(e.target.value)}
                />{" "}
                <br></br>
                <IonRow class="ion-padding ion-text-center">
                  <IonCol size="12">
                    <IonButton>Sign In</IonButton>
                   
                  </IonCol>
                  
                </IonRow>
              {/* </div> */}
              </form>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default SignIn;
