import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import "./pages/App.css";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Discussionboard from "./pages/DiscussionBoard";
import { DiscussionProvider } from "./contexts/DiscussionProvider";
import Rewards from "./pages/Rewards";
import { TaskProvider } from "./contexts/TaskProvider";
import EditTask from "./components/EditTask";
import EditDiscussion from "./components/editDiscussion";
import { UserProvider } from "./contexts/UserProvider";
import EditProfile from "./components/EditProfile";
import Profile from "./pages/Profile";
import { RewardsProvider } from "./contexts/RewardsProvider";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonMenu side="end" menuId="first" contentId="main">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonMenuToggle>
              <IonItem routerLink="home">Home</IonItem>
            </IonMenuToggle>
            <IonMenuToggle>
              <IonItem routerLink="childprofile">Child Profile</IonItem>
            </IonMenuToggle>
            <IonMenuToggle>
              <IonItem routerLink="parentprofile">Parent Profile</IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonRouterOutlet id="main">
        <Route exact path="/home">
          <TaskProvider>
            <Home />
          </TaskProvider>
        </Route>
        <Route path="/tasks/:id">
          <TaskProvider>
            <EditTask />
          </TaskProvider>
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/childprofile">
          <ChildProfile />
        </Route>
        <Route path="/parentprofile">
          <ParentProfile />
        </Route>
        <Route path="/rewards">
          <Rewards />
        </Route>
        <Route path="/discussion">
          <DiscussionProvider>
            <Discussionboard />
          </DiscussionProvider>
        </Route>
        <Route path="/discussion/:id">
          <DiscussionProvider>
            <EditPost/>
          </DiscussionProvider>
        </Route>
        <Route exact path="/">
          <Redirect to="/welcome" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
