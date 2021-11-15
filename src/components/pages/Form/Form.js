import React, {useState} from 'react'
import logoPic from '../../../assets/images/logo_50.webp'
import Register from '../Form/Register/Register'
import * as styles from './Globals.module.scss'
import Login from '../Form/Login/Login'
import './Form.scss'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Form = () => {
    
    const [isRegister, setIsRegister] = useState(false); 

    const register = () => toast("Registered!");
    const login = () => toast("Logged in!");


    return (
        <div style={{marginTop: '45px'}}>    
            <div className="mainCont">
                <div className={isRegister === false ? "container" : "container right_panel_active"}>
                    <Register register={() => register()}/>
                    <Login login={() => login()}/>
                    <div className="overlay_container">
                        <div className="overlay">
                            <div className="overlay_panel overlay_left">
                                <img src={logoPic} className="FormLogo"/>
                                <h1 className={styles.h1}>Do you have <br /> an account?</h1>
                                <p className={styles.p}>If do you have an account, then come back let's learn together by playing quizes and bee a like Einstein.</p>
                                <input type="button" style={{border: '1px solid white'}} className="butonat" id="signIn" value="Sign Up" onClick={() => setIsRegister(!isRegister)}/>
                            </div>
                            <div className="overlay_panel overlay_right">
                                <img src={logoPic} className="FormLogo"/>
                                <h1 className={styles.h1}>No Account?</h1>
                                <p className={styles.p}>You still don't have an account? no problem, be part of a community that loves learning and sharing.</p>
                                <input type="button" style={{border: '1px solid white'}} className="butonat" id="signUp" value="Sign Up" onClick={() => setIsRegister(!isRegister)}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
}


export default Form