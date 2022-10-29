import {
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonLabel,
  IonInput,
  IonItem,
  IonList,
} from "@ionic/react";
import { useContext, useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import DiscussionContext from "../contexts/DiscussionContext";
import UserContext from "../contexts/UserContext";
import AddDiscussion from "../components/addDiscussion";


const DiscussionBoard: React.FC = () => {
  let { deletePost,post } = useContext(DiscussionContext);

  let history = useHistory();
 
    let { getUser } = useContext(UserContext)
    let userId = useParams()
    let postId = useParams()
    let myToken = localStorage.getItem("myBandanaToken")



    useEffect(() => {
        function fetch() {
            getUser(myToken).then(response => {
                console.log(response)
            })
        }
        fetch();

    },[])

    function authCreate() {

        if (userId) {
           return (<div><Link to="/discussionBoard/add">Add New Post</Link></div>)

        } else {

        return (<div>
           <p>Not Authorized to add Post</p>
        //     </div>);
        }

    }
    function authLink() {

        let myToken = localStorage.getItem("myTaskToken")
        console.log(myToken)

        console.log(userId)
        if (userId) {
        return (<div><Link to={`/profile/${userId}`}>Profile Link: {localStorage.username}</Link>
        //         <button><Link to={`/discussionBoard/edit/${postId}`}>EditBandana</Link> </button>
        //         <form onsubmit={deletePost()}>
        //             <button type="submit">Delete</button>
        //         </form>
        //     </div>)

        // } else {

        //     return (<div>
        //         <p>Login to View Creator</p>
        //     </div>);
        // }

    }


  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonGrid>
          <IonRow class="ion-padding ion-text-center">
            <IonCol size="12">
              <h1>Discussion Board</h1>
              <AddDiscussion />
            </IonCol>
          </IonRow>
          <IonRow class="ion-padding ion-text-center">
            <IonCol size="12">
              <IonList>
                <DiscussionContext.Consumer>
                  {({ post }) => {
                    return (
                     <div>
                        {post.map((p: any) => {
                          return (
                            <IonItem key={p.postId}>
                              <p>{p.headline}remove me</p>
                              <p>{p.content}remove me</p>
                              {authLink}
                              <IonButton
                                color="danger"
                                href={`/discussionBoard/${p.postId}`}
                              >
                                Edit Post
                              </IonButton>
                            </IonItem>
                          );
                        })}
                      </div>
                    );
                  }}
                </DiscussionContext.Consumer>
              </IonList>
            </IonCol>
          </IonRow>
        </IonGrid>
        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default DiscussionBoard;
