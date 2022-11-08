import {
  IonMenuToggle,
  IonItem,
  IonLabel,
  IonList,
  IonAvatar,
} from "@ionic/react";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import UserContext from "../contexts/UserContext";

const AppMenu: React.FC = () => {
  // Get Url Params
  let { id } = useParams<{ id: string }>();
  //Use UserContext
  let { user, getOneUser } = useContext(UserContext);

  useEffect(() => {
    async function fetch() {
      await getOneUser(id).then((user) => setUserInfo(user));
    }
    fetch();
  }, [id, getOneUser]);

  let { userId } = user;

  //Set User Info
  let [userInfo, setUserInfo] = useState({
    id: userId,
  });

  function hasJWT() {
    let flag = false;

    //check user has JWT token
    localStorage.getItem("myUserToken") ? (flag = true) : (flag = false);

    return flag;
  }
  return (
    <div>
      {hasJWT() ? (
        <IonList>
          <IonMenuToggle>
            <IonItem routerLink={`/users/${userInfo.id}`}>
              <IonAvatar slot="end">
                <img
                  src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
                  alt="test"
                />
              </IonAvatar>
              <IonLabel>Profile</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem routerLink="/home">Home</IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem routerLink="/rewards">Rewards</IonItem>
          </IonMenuToggle>
        </IonList>
      ) : (
        <IonList>
          <IonMenuToggle>
            <IonItem routerLink="/welcome">Welcome</IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem routerLink="/signin">SignIn</IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem routerLink="/signup">SignUp</IonItem>
          </IonMenuToggle>
        </IonList>
      )}
    </div>
  );
};

export default AppMenu;