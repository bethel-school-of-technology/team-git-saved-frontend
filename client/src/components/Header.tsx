import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Header.css";

interface ContainerProps {}

const Header: React.FC<ContainerProps> = () => {
  return (
    <IonHeader>
      <IonToolbar class="ion-text-center">
        <IonButtons slot="start">
          <IonBackButton></IonBackButton>
        </IonButtons>
        <IonTitle>
          <a href="/home">HomeTastic</a>
        </IonTitle>
        <IonButtons slot="end">
          <IonMenuButton></IonMenuButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
