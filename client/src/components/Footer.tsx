import { IonCol, IonFooter, IonGrid, IonImg, IonRow, IonToolbar } from "@ionic/react";
import "./Footer.css";

interface ContainerProps {}

const Footer: React.FC<ContainerProps> = () => {
  return (
    <IonFooter collapse="fade">
      <IonToolbar>
        <IonGrid>
          <IonRow class="ion-padding footerRow ion-text-center">
            <IonCol size-lg="6" size-xs="12">
              <a href="/thedevs">Meet The Devs</a>
            </IonCol>
            <IonCol size-lg="6" size-xs="12">
              <a href="/home">Back To Top</a>
            </IonCol>
          </IonRow>
          <IonRow class="footerLogo ion-text-center">
            <IonCol size="12">
            <a href="/home">
            <IonImg
              src="../../assets/HomeTasktic-Logo-Bottom.png"
              alt="HomeTasktic Logo"
            ></IonImg>
          </a>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonToolbar>
    </IonFooter>
  );
};

export default Footer;
