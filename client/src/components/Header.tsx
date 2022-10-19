import { IonHeader, IonTitle, IonToolbar } from "@ionic/react";

interface ContainerProps {}

const Header: React.FC<ContainerProps> = () => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>HomeTasktic Header</IonTitle>
        {/* <div>
          <img src="./src/assets/logo.png" />
        </div> */}
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
