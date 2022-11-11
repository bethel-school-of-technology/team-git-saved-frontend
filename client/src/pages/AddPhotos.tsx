import { Photo } from "@capacitor/camera";
import { IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import { useState } from "react";
import { useCamera } from "../hooks/useCamera";

const Camera: React.FC = () => {
    const { takePhoto } = useCamera();
    const [ imgUrl, setImgUrl ] = useState('');
    const getPhoto = () => {
        takePhoto().then((pic: Photo) => {
            setImgUrl(pic.webPath ?? '')
        })
    }


    return (
        <IonPage>
        <IonHeader>
    <IonToolbar>
        <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
        </IonButtons>
        <IonTitle>Camera</IonTitle>
    </IonToolbar>
</IonHeader>
<IonContent>
<IonButton color="success" onClick={ getPhoto }>Take Photo!</IonButton>
<img src={ imgUrl } alt="" />
</IonContent>
</IonPage>
)}

export default Camera;