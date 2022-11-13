import { Photo } from "@capacitor/camera";
import { IonButton, IonButtons, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import { useState } from "react";
import { useCamera } from "../hooks/useCamera";

import Footer from "../components/Footer";
import Header from "../components/Header";

const AddPhotos: React.FC = () => {
    const { takePhoto } = useCamera();
    const [ imgUrl, setImgUrl ] = useState('');
    const getPhoto = () => {
        takePhoto().then((pic: Photo) => {
            setImgUrl(pic.webPath ?? '')
        })
    }


    return (
        <IonPage>
<Header />

<IonContent>
<IonGrid>
<IonTitle>Show your Completed Task!</IonTitle>
<IonButton color="success" onClick={ getPhoto }>Take Photo!</IonButton>
<img src={ imgUrl } alt="" />
</IonGrid>
</IonContent>
<Footer />
</IonPage>
)}

export default AddPhotos;