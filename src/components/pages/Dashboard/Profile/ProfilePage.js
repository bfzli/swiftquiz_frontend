import React from 'react'
import profilebcg from '../../../../assets/images/profile/ProfileBcg.png'
import adnanAvatar from '../../../../assets/images/profiles/adnan.png'
import adnan from '../../../../assets/images/profile/adnan.png'
import quiz1 from '../../../../assets/images/profile/quiz1.png'
import quiz2 from '../../../../assets/images/profile/quiz2.png'
import quiz3 from '../../../../assets/images/profile/quiz3.png'

import './ProfilePage.scss'
import * as styles from '../../../../components/shared/Buttons/Buttons.module.scss'

export default function ProfilePage() {
    return (
        <div className="mainProfileCont">
            <div className="topProfileCont">
                <h2>Your Account</h2>
                <img id="coverPic" src={profilebcg}/>
            </div>
            <div className="bottomProfileCont">
                <div className="leftBottomProfileCont">
                    <img src={adnan}/>
                    <h1>Adnan Kasumaj</h1>
                    <h4>@adnankasumaj_</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, suscipit itaque! Saepe fugit iste delectus, magnam mollitia sit commodi corrupti!</p>
                    <button className={styles.button_fill_purple}>Edit Profile</button>
                </div>
                <div className="rightBottomProfileCont">
                    <h2>Adnan's Quizes</h2>
                    <div className="profileQuizes">
                        <div className="QuizBody">
                            <img id="quizImage" src={quiz1}/>
                            <h3>React Components</h3>
                            <p>A Component is one of the core building blocks of React. In other words, we can say that every application you will develop in made of components.</p>                        
                            <div className="quizBottom">
                                <img src={adnanAvatar}/>
                                <div className="quizBottomRight">
                                    <h5 id="quizMadeBy">MADE BY</h5>
                                    <h5>ADNAN KASUMAJ</h5>
                                </div>
                            </div>
                        </div>
                        <div className="QuizBody">
                            <img id="quizImage" src={quiz2}/>
                            <h3>Graphql Universe</h3>
                            <p>A query language for your API — GraphQL provides a complete description of the data in your API, gives clients the power to ask for exactly what they need.</p>
                            <div className="quizBottom">
                                <img src={adnanAvatar}/>
                                <div className="quizBottomRight">
                                    <h5 id="quizMadeBy">MADE BY</h5>
                                    <h5>ADNAN KASUMAJ</h5>
                                </div>
                            </div>
                        </div>
                        <div className="QuizBody">
                            <img id="quizImage" src={quiz3}/>
                            <h3>Rust the best lang</h3>
                            <p>Svelte is a JavaScript framework for building user interfaces. Its compiler architecture enables amazing tradeoffs for UX and DX.</p>
                            <div className="quizBottom">
                                <img src={adnanAvatar}/>
                                <div className="quizBottomRight">
                                    <h5 id="quizMadeBy">MADE BY</h5>
                                    <h5>ADNAN KASUMAJ</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
