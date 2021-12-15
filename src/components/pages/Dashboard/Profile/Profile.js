import * as styles from './Profile.module.scss'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector, connect } from 'react-redux';
import { Helmet } from 'react-helmet'
import Loader from '../../../shared/Loaders/Pagloader'
import { selectQuizesOfUsers } from "../../../../reduxComponents/selectors/selectorsUserQuizzes";
import { fetchUserData } from "../../../../reduxComponents/actions/User";
import moment from 'moment'

function Profile(props) {
   const dispatch = useDispatch()
   const [loading, setLoading] = useState(true)
   const user = useSelector((state) => state.user);

   useEffect(() => {
      dispatch(fetchUserData());
   }, []);

   useEffect(() => setTimeout(() => setLoading(false), 3000), [])

   return (
      <>
         {loading === true ? <Loader /> :
            <div className={styles.container}>
               <main>
                  <Helmet>
                     <title>{user === null ? 'loading' : user.name} - Swiftquiz</title>
                     <meta name="description" content="Your saved Quizzes here, come here to play." />
                  </Helmet>
                  <div style={{ background: 'url("https://source.unsplash.com/random")' }} className={styles.cover}>
                     <Link to="/dashboard/profile/edit" className={styles.editbutton}>
                        <p style={{marginRight: '.5em'}}>Edit Profile</p>

                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M12.9 6.85796L17.142 11.101L7.242 21H3V16.757L12.9 6.85696V6.85796ZM14.314 5.44396L16.435 3.32196C16.6225 3.13449 16.8768 3.02917 17.142 3.02917C17.4072 3.02917 17.6615 3.13449 17.849 3.32196L20.678 6.15096C20.8655 6.33849 20.9708 6.5928 20.9708 6.85796C20.9708 7.12313 20.8655 7.37743 20.678 7.56496L18.556 9.68596L14.314 5.44396Z" fill="var(--background-important)" />
                        </svg>

                     </Link>
                     <img src={`https://swiftapi.vercel.app/${user.avatar}`} className={styles.avatar} />
                  </div>
                  <div className={styles.semicontainer}>
                     <div className={styles.info}>
                        <p className={styles.name}>{user === null ? 'loading' : user.name}</p>
                        <p className={styles.username}>@{user === null ? 'loading' : user.username}</p>

                        <p className={styles.tabname}>Bio</p>
                        <div className={styles.quizspacer}></div>
                        <p className={styles.bio}>
                           {user === null ? 'loading' : user.bio}
                        </p>


                        <p className={styles.tabname}>Coins</p>
                        <div className={styles.quizspacer}></div>
                        <p className={styles.bio}>
                           {user === null ? 'loading' : user.coins}
                        </p>

                        <p className={styles.tabname}>Score</p>
                        <div className={styles.quizspacer}></div>
                        <p className={styles.bio}>
                           {user === null ? 'loading' : user.score}
                        </p>

                        <p className={styles.tabname}>Joined</p>
                        <div className={styles.quizspacer}></div>
                        <p className={styles.bio}>
                           {user === null ? 'loading' : moment(user.createdAt).format('D MMMM YYYY')}
                        </p>
                     </div>
                     <div className={styles.quizscontainer}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                           <p className={styles.quizheading}>Quizzes</p>
                           <p className={styles.quizview}>Manage Quizzes</p>
                        </div>

                        <div className={styles.quizspacer}></div>
                        <div className={styles.quizzes}>
                           {props.userQuizes.map((quiz) =>
                              <div className={styles.quiz}>
                                 <img className={styles.quiz_image} src={`https://wallpaperaccess.com/full/1288076.jpg`} />
                                 <h3 className={styles.quiz_title}>
                                    {quiz.title}
                                 </h3>
                                 <p className={styles.quiz_description}>
                                    {quiz.description}
                                 </p>
                              </div>)
                           }
                        </div>
                     </div>
                  </div>
               </main >
            </div >
         }
      </>
   )
}


const mapStateToProps = (state) => ({
   userQuizes: selectQuizesOfUsers(state),
});

export default connect(mapStateToProps)(Profile);
