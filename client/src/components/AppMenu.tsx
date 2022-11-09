import {
  IonMenuToggle,
  IonItem,
  IonLabel,
  IonList,
  IonAvatar,
} from "@ionic/react";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

const AppMenu: React.FC = () => {
  //Use UserContext
  let { user } = useContext(UserContext);

  function hasJWT() {
    let flag = false;

    //check user has JWT token
    localStorage.getItem("myUserToken") ? (flag = true) : (flag = false);

    return flag;
  }
  return (
    <UserContext.Consumer>
      {({ user }) => {
        if (hasJWT()) {
          return (
            <IonList>
              <IonMenuToggle>
                <IonItem routerLink={`/users/${user.userId}`}>
                  <IonAvatar slot="end">
                    <img src={user.profileImg} alt="test" />
                  </IonAvatar>
                  <IonLabel>Profile</IonLabel>
                </IonItem>
              </IonMenuToggle>
              <IonMenuToggle>
                <IonItem routerLink="/tasks">Tasks</IonItem>
              </IonMenuToggle>
              <IonMenuToggle>
                <IonItem routerLink="/discussion">Discussion</IonItem>
              </IonMenuToggle>
              <IonMenuToggle>
                <IonItem routerLink="/rewards">Rewards</IonItem>
              </IonMenuToggle>
              <IonMenuToggle>
                <IonItem routerLink="/devs">Meet The Devs</IonItem>
              </IonMenuToggle>
              <IonMenuToggle>
                <IonItem routerLink="/signout">Sign Out</IonItem>
              </IonMenuToggle>
            </IonList>
          );
        } else {
          return (
            <IonList>
              <IonMenuToggle>
                <IonItem routerLink="/welcome">Welcome</IonItem>
              </IonMenuToggle>
              <IonMenuToggle>
                <IonItem routerLink="/devs">Meet The Devs</IonItem>
              </IonMenuToggle>
              <IonMenuToggle>
                <IonItem routerLink="/signin">Sign In</IonItem>
              </IonMenuToggle>
              <IonMenuToggle>
                <IonItem routerLink="/signup">Sign Up</IonItem>
              </IonMenuToggle>
            </IonList>
          );
        }
      }}
    </UserContext.Consumer>
  );
};

export default AppMenu;
