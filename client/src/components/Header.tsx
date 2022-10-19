import { IonHeader, IonTitle, IonToolbar } from "@ionic/react";

interface ContainerProps {}

const Header: React.FC<ContainerProps> = () => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>HomeTasktic Header</IonTitle>
        </IonToolbar>
    </IonHeader>
  );
};

export default Header;
