import {useEffect, useState} from 'react'
import logoPic from '../../../assets/images/logo_50.webp'
import Register from '../Form/Register/Register'
import * as styles from './Globals.module.scss'
import Login from '../Form/Login/Login'
import './Form.scss'
import { useDispatch } from 'react-redux'
import {fetchQuiz} from '../../../reduxComponents/actions/Questions'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next'

export const Form = () => {

    const dispatch = useDispatch()
    const [isRegister, setIsRegister] = useState(false); 
    const register = () => toast("Registered!");
    const login = () => toast("Logged in!");
    useEffect(() => { dispatch(fetchQuiz()) }, []);
    const {t} = useTranslation()

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
                                <h1 className={styles.h1}>{t("auth.logintitle")}</h1>
                                <p className={styles.p}>{t("auth.logindesc")}</p>
                                <input type="button" style={{border: '1px solid white'}} className="butonat" id="signIn" value="Sign In" onClick={() => setIsRegister(!isRegister)}/>
                            </div>
                            <div className="overlay_panel overlay_right">
                                <img src={logoPic} className="FormLogo"/>
                                <h1 className={styles.h1}>No Account?</h1>
                                <p className={styles.p}>{t("auth.registerdesc")}</p>
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