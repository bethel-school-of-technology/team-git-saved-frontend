import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonInput,
  IonItem,
  IonLabel,
  IonRow,
} from "@ionic/react";
import { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import DiscussionContext from "../contexts/DiscussionContext";


const EditDiscussion: React.FC = (props) => {
  let { id } = useParams<{ id: string }>();
  let history = useHistory();

  let { editPost, getPost, discussion } = useContext(DiscussionContext);

  useEffect(() => {
    async function fetch() {
      await getPost(id).then((discussion: any) => setChangePost(discussion));
    }
    fetch();
  }, [id, getPost]);

  let { discussionId, headline, content } = discussion;

  let [changePost, setChangePost] = useState({
    discussionId: discussionId,
    headline: headline,
    content: content

  });

  console.log(changePost.discussionId);

  function handleChange(event: any) {
    setChangePost((prevValue) => {
      return { ...prevValue, [event.target.name]: event.target.value };
    });
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    editPost(changePost, changePost.discussionId)
      .then(() => {
        history.push("/discussion");
      })
      .catch((error: any) => {
        history.push("/signin");
        console.log(error);
      });
  }
  return (
    <IonContent fullscreen>
      <IonGrid>
        <IonRow class="ion-padding ion-text-center">
          <IonCol size="12">
            <form onSubmit={handleSubmit}>
              <IonItem>
                <IonLabel position="stacked">Edit Discussion Headline</IonLabel>
                <IonInput
                  type="text"
                  name="headline"
                  value={changePost.headline}
                  onIonChange={handleChange}
                />
                <IonLabel position="stacked">EditDiscussion Content </IonLabel>
                <IonInput
                  type="text"
                  name="conent"
                  value={changePost.content}
                  onIonChange={handleChange}
                />
              </IonItem>
              <IonButton type="submit" expand="block">
                Edit Discussion Post
              </IonButton>
            </form>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default EditDiscussion;
