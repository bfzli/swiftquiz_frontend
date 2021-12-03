import React, {useState} from "react";
import {useSelector, connect, useDispatch} from "react-redux";
import * as styles from './Profile.module.scss'
import {selectQuizesOfUsers} from "../../../../reduxComponents/selectors/selectorsUserQuizzes";
import {fetchUserData} from "../../../../reduxComponents/actions/User";
import EditProfil from "../../../../pages/EditProfil";
import Popup from "../../../shared/Popup/popup";

function ProfilePage(props) {
   const [isOpen, setIsOpen] = useState(false);

   const togglePopup = () => {
      setIsOpen(!isOpen);
   };
   const user = useSelector((state) => state.user);
   const dispatch = useDispatch();

   React.useEffect(() => {
      dispatch(fetchUserData());
   }, []);

   return (
      <div className={styles.mainProfileCont}>
         <div className={styles.topProfileCont}>
            <h2>Your Account</h2>
         </div>
         <div className={styles.bottomProfileCont}>
            <div className={styles.leftBottomProfileCont}>
               <img src={`https://swiftapi.vercel.app/${user.avatar}`} />
               <h1>{user.name}</h1>
               <h4>@{user.username}</h4>
               <p>{user.bio}</p>
               <button onClick={togglePopup}>EDIT PROFILE</button>
               {isOpen && (
                  <Popup
                     content={
                        <>
                           <EditProfil />
                        </>
                     }
                     handleClose={togglePopup}
                  />
               )}
            </div>
            <div className={styles.rightBottomProfileCont}>
               <h2>{user.name}'s Quizes</h2>
               <div className={styles.profileQuizes}>
                  {props.userQuizes.map((quiz) => {
                     const {title, description} = quiz;
                     return (
                        <div className={styles.QuizBody}>
                           <img
                              id="quizImage"
                              src={`https://swiftapi.vercel.app/${quiz.thumbnail}`}
                           />
                           <h3>{title}</h3>
                           <p>{description}</p>
                           <div className={styles.quizBottom}>
                              <img
                                 src={`https://swiftapi.vercel.app/${user.avatar}`}
                              />
                              <div className={styles.quizBottomRight}>
                                 <h5 id="quizMadeBy">MADE BY</h5>
                                 <h5>{user.name}</h5>
                              </div>
                           </div>
                        </div>
                     );
                  })}
               </div>
            </div>
         </div>
      </div>
   );
}

const mapStateToProps = (state) => ({
   userQuizes: selectQuizesOfUsers(state),
});

export default connect(mapStateToProps)(ProfilePage);
