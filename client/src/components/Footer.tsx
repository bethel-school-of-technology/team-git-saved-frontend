import { IonButton, IonFooter } from "@ionic/react";

interface ContainerProps {}

const Footer: React.FC<ContainerProps> = () => {
  return (
    <IonFooter collapse="fade">
      <IonButton expand="full" color="secondary">
        HomeTasktic
      </IonButton>
    </IonFooter>
  );
};

export default Footer;
