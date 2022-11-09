import {
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonThumbnail,
} from "@ionic/react";

import Footer from "../components/Footer";
import Header from "../components/Header";

const MeetTheDevs: React.FC = () => {
  return (
    <IonPage>
      <Header />

      <IonContent fullscreen>
        <IonGrid>
          <IonRow class="ion-padding ion-text-center welcomeText">
            <IonCol size="12">
              <h1>Meet Your Developers</h1>
              <h2>Learn more about everyone who worked on the project</h2>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size-lg="4" size-xs="12" class="ion-text-center">
              <IonThumbnail>
                <img alt="dev profile" src="../../assets/destinyjackson.jpg" />
              </IonThumbnail>
              <h3>Destiny Jackson</h3>
              <h4>Project Role: Frontend</h4>
              <p>
                Destiny has a background in Health Care as a Recreational
                Therapist.She is looking forward to making a career switch to
                integrate her health care knowledge with the tech field. Destiny
                was a part of the front end team for HomeTastic and learned
                about creating applications and the importance of front end and
                back end working together.
              </p>
            </IonCol>
            <IonCol size-lg="4" size-xs="12" class="ion-text-center">
              <IonThumbnail>
                <img alt="dev profile" src="../../assets/mattgoochey.png" />
              </IonThumbnail>
              <h3>Matthew Goochey</h3>
              <h4>Project Role: Backend</h4>
              <p>
                Matthew is a FullStack Developer from Warner Robins, Georgia.
                When he is not behind a screen, you can find him somewhere in
                the outdoors re-connecting with God's beautiful creations!
              </p>
            </IonCol>
            <IonCol size-lg="4" size-xs="12" class="ion-text-center">
              <IonThumbnail>
                <img alt="dev profile" src="../../assets/brandonallen.jpeg" />
              </IonThumbnail>
              <h3>Brandon Allen</h3>
              <h4>Project Role: Frontend</h4>
              <p>
                Brandon Allen is married and has 2 daughters. He loves music and
                has been playing bass for 22 years. He wanted his family to have
                a better life so he decided to enroll in Bethel Technology
                School where he earned a certificate in Full Stack Development.
                He loves challenges and problem solving. He doesn’t shy away
                from failure bc he knows you always learn from your mistakes and
                that’s how you get better. His favorite saying is, “If you
                aren’t growing, you are dying!”. That’s why he is always
                learning something new so he can be better every day.
              </p>
            </IonCol>
            <IonCol size-lg="4" size-xs="12" class="ion-text-center">
              <IonThumbnail>
                <img alt="dev profile" src="../../assets/fordhenley.jpeg" />
              </IonThumbnail>
              <h3>Ford Henley</h3>
              <h4>Project Role: Frontend</h4>
              <p>
                Ford is a Full Stack Developer and Digital Marketer located in
                Austin, TX. He enjoys rugby, reading and spending time with
                family. He is a self motivated and lifetime learner looking to
                make an impact in your business.
              </p>
            </IonCol>
            <IonCol size-lg="4" size-xs="12" class="ion-text-center">
              <IonThumbnail>
                <img alt="dev profile" src="../../assets/de.jpg" />
              </IonThumbnail>
              <h3>Kenny Tyson</h3>
              <h4>Project Role: Backend</h4>
              <p>Dev Bio</p>
            </IonCol>
            <IonCol size-lg="4" size-xs="12" class="ion-text-center">
              <IonThumbnail>
                <img alt="dev profile" src="../../assets/de.jpg" />
              </IonThumbnail>
              <h3>Josiah Vargas</h3>
              <h4>Project Role: Backend</h4>
              <p>Dev Bio</p>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default MeetTheDevs;
