import React, { useState } from 'react'
import profilebcg from '../../../../assets/images/profile/ProfileBcg.webp'
import adnanAvatar from '../../../../assets/images/profiles/adnan.webp'
import adnan from '../../../../assets/images/profile/adnan.webp'
import quiz1 from '../../../../assets/images/profile/quiz1.webp'
import quiz2 from '../../../../assets/images/profile/quiz2.webp'
import quiz3 from '../../../../assets/images/profile/quiz3.webp'
import coverIcon from '../../../../assets/images/profile/picCameraIcon.webp'
import axios from 'axios'

import './ProfilePage.scss'
import * as styles from '../../../../components/shared/Buttons/Buttons.module.scss'


export default function ProfilePage() {
    
    const[uploadCover, setUploadCover] = useState("");
    const[uploadprofile, setUploadProfile] = useState();
    const[showSaveCover, setShowSaveCover] = useState(false);
    const[showSaveProfile, setShowSaveProfile] = useState(false);
    let reader = new FileReader();
    
    const onChangeCover = (e) =>{
        reader.onload = () =>{
        if(reader.readyState === 2){
            setUploadCover(reader.result);
            }
        }
        reader.readAsDataURL(e.target.files[0]);
        if(reader){
            setShowSaveCover(true);
        }
    }
    const onChangeProfile = (e) =>{
        reader.onload = () =>{
        if(reader.readyState === 2){
            setUploadProfile(reader.result);
            }
        }
        reader.readAsDataURL(e.target.files[0]);
        if(reader){
            setShowSaveProfile(true);
        }
    }
    const uploadCoverHandler = (e) =>{
        e.preventDefault();
        const dataImg = new FormData();
        dataImg.append("file", uploadCover);
        axios.post("http://localhost:5000/api/user/avatar",dataImg)
        .then(res=>{
            console.log(res);
        })
        .catch(err=>{
            console.log(err);
        })
        setShowSaveCover(false);
    }
    const uploadProfileHandler = (e) =>{
        e.preventDefault();
        const dataImg = new FormData();
        dataImg.append("file", uploadprofile);
        axios.post("http://localhost:5000/api/user/avatar",dataImg)
        .then(res=>{
            console.log(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
        setShowSaveProfile(false);
    }


    return (
        <div className="mainProfileCont">
            <div className="topProfileCont">
                <h2>Your Account</h2>
                <div className="coverCont">
            {uploadCover ? <input type="image" className="coverPic" src={uploadCover} name="avatar"/> : <input type="image" className="coverPic" src={profilebcg} name="avatar"/>}
                    <div className="coverPicOverlay">
                        <label htmlFor="uploadCover">
                            <img src={coverIcon}/>
                        </label>
                        <input type="file" id="uploadCover" name="uploadCover" accept={"image/*"} onChange={onChangeCover}/>
                    </div>
                    {showSaveCover === true ? <button className={styles.button_fill_purple} onClick={uploadCoverHandler}>Save</button> : null}
                </div>
            </div>
            <div className="bottomProfileCont">
                <div className="leftBottomProfileCont">
                    <div className="profilePicCont">
                        <div className="profilePicOverlay">
                            <label htmlFor="uploadProfile">
                                <img src={coverIcon}/>
                                <input type="file" id="uploadProfile" name="uploadProfile" accept={"image/*"} onChange={onChangeProfile}/>
                            </label>
                        </div>
                    </div>
                    {uploadprofile? <input type="image" src={uploadprofile} name="avatar"/> : <input type="image" src={adnan} name="avatar"/>}
                    {showSaveProfile == true ? <button id="saveProfilePic" className={styles.button_fill_purple} onClick={uploadProfileHandler}>Save</button> : null}
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
