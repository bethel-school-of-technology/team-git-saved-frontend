import { IonHeader, IonTitle, IonToolbar } from "@ionic/react";

interface ContainerProps {}

const Header: React.FC<ContainerProps> = () => {
  return (
    <IonHeader collapse="condense">
      <IonToolbar>
        <IonTitle size="large">Blank</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
