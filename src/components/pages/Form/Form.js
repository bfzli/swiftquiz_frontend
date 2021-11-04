import React, {useState} from 'react'
import logoPic from '../../../assets/images/logo_50.png'
import Register from '../Form/Register/Register'
import * as styles from './Globals.module.scss'
import Login from '../Form/Login/Login'
import './Form.scss'

export const Form = () => {
    
    const [isRegister, setIsRegister] = useState(false); 

    return (
        <body style={{marginTop: '45px'}}>    
            <div className="mainCont">
                <div className={isRegister === false ? "container" : "container right_panel_active"}>
                        <Register/>
                        <Login/>
                        <div className="overlay_container">
                            <div className="overlay">
                                <div className="overlay_panel overlay_left">
                                    <img src={logoPic} className="FormLogo"/>
                                    <h1 className={styles.h1}>Welcome Back!</h1>
                                    <p className={styles.p}>To keep connected with us please login with your personal info</p>
                                    <input type="button" className="butonat" id="signIn" value="Sign Up" onClick={() => setIsRegister(!isRegister)}/>
                                </div>
                                <div className="overlay_panel overlay_right">
                                    <img src={logoPic} className="FormLogo"/>
                                    <h1 className={styles.h1}>Hello, Friend!</h1>
                                    <p className={styles.p}>Enter your personal details and start journey with us</p>
                                    <input type="button" className="butonat" id="signUp" value="Sign Up" onClick={() => setIsRegister(!isRegister)}/>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </body>
    );
}


export default Form