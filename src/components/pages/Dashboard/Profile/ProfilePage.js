import React from 'react';
import { useSelector, connect } from 'react-redux'
import profilebcg from '../../../../assets/images/profile/ProfileBcg.webp'
import adnanAvatar from '../../../../assets/images/profiles/adnan.webp'
import adnan from '../../../../assets/images/profile/adnan.webp'
import quiz1 from '../../../../assets/images/profile/quiz1.webp'
import './ProfilePage.scss'
import * as styles from '../../../../components/shared/Buttons/Buttons.module.scss'
import { selectQuizesOfUsers } from '../../../../reduxComponents/selectors/selectorsUserQuizzes'

function ProfilePage(props) {
    console.log();
    const user = useSelector(state => state.auth.auth);

    return (
        <div className="mainProfileCont">
            <div className="topProfileCont">
                <h2>Your Account</h2>
                <img id="coverPic" src={profilebcg}/>
            </div>
            <div className="bottomProfileCont">
                <div className="leftBottomProfileCont">
                    <img src={adnan}/>
                    <h1>{user.name}</h1>
                    <h4>@{user.username}</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, suscipit itaque! Saepe fugit iste delectus, magnam mollitia sit commodi corrupti!</p>
                    <button className={styles.button_fill_purple}>Edit Profile</button>
                </div>
                <div className="rightBottomProfileCont">
                    <h2>{user.name}'s Quizes</h2>
                    <div className="profileQuizes">
                        {
                            props.userQuizes.map(quiz => {
                                const { title, description } = quiz;
                                return (
                                    <div className="QuizBody">
                                        <img id="quizImage" src={quiz1}/>
                                        <h3>{title}</h3>
                                        <p>{description}</p>
                                        <div className="quizBottom">
                                            <img src={adnanAvatar}/>
                                            <div className="quizBottomRight">
                                                <h5 id="quizMadeBy">MADE BY</h5>
                                                <h5>{user.name}</h5>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};


const mapStateToProps = (state) => ({
    userQuizes: selectQuizesOfUsers(state)
});

export default connect(mapStateToProps)(ProfilePage);