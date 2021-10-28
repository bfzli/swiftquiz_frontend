import React, {useState} from 'react'
import logoPic from '../../../assets/images/logo.png'
import Register from '../Form/Register/Register'
import '../../shared/Website/FormGeneral.scss'
import Login from '../Form/Login/Login'
import './Form.scss'

// import {mainCont,container,overlay_container,overlay,overlay_panel,overlay_left,logo,overlay_right,signIn,signUp,right_panel_active} from './Form.module.scss'
// import {butonat} from './shared/LoginRegister.module.scss'

export const Form = () => {
    
    const [isRegister, setIsRegister] = useState(false); 

    return (
        <div className="mainCont">
            <div className={isRegister === false ? "container" : "container right_panel_active"}>
                    <Register/>
                    <Login/>
                    <div className="overlay_container">
                        <div className="overlay">
                            <div className="overlay_panel overlay_left">
                                <img src={logoPic} className="logo"/>
                                <h1>Welcome Back!</h1>
                                <p>To keep connected with us please login with your personal info</p>
                                <input type="button" className="butonat" id="signIn" value="Sign Up" onClick={() => setIsRegister(!isRegister)}/>
                            </div>
                            <div className="overlay_panel overlay_right">
                                <img src={logoPic} className="logo"/>
                                <h1>Hello, Friend!</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <input type="button" className="butonat" id="signUp" value="Sign Up" onClick={() => setIsRegister(!isRegister)}/>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}


export default Form