import React, { useState } from 'react'
import facebook from '../../../../assets/images/social/facebook.webp'
import google from '../../../../assets/images/social/google.webp'
import github from '../../../../assets/images/social/github.webp'
import './Login.scss'
import '../shared/LoginRegister.scss'
import * as styles from '../Globals.module.scss'
import { useDispatch } from 'react-redux'
import ValidationLogin from '../../../../utils/ValidationLogin'
import { logInAction } from '../../../../reduxComponents/actions/Auth'


export default function Login({ login }) {

    const [details, setDetails] = useState({ username: "", password: "" });
    const [errors, setErrors] = useState({});
    const [backError, setBackError] = useState(null);
    const dispatch = useDispatch();

    const LoginHandler = (e) => {
        e.preventDefault();
        setErrors(ValidationLogin(details));

        const logindata = {
            username: details.username,
            password: details.password
        };

        dispatch(logInAction(logindata.username, logindata.password));

        login();

    }

    return (
        <div className="form_container sign_in_container">
            <form className={styles.form} onSubmit={LoginHandler}>
                {backError && <div className="BackError" style={{ marginLeft: '115px' }}>{backError}</div>}
                <h1 className={styles.h1}>Sign in</h1>
                <div className="social_container">
                    <a className={styles.a}><img alt="Facebook" src={facebook} width="40px" height="40" /></a>
                    <a className={styles.a}><img alt="Google" src={google} width="40px" height="40px" /></a>
                    <a className={styles.a}><img alt="GitHub" src={github} width="40px" height="40px" /></a>
                </div>
                <span className={styles.span} style={{ marginBottom: '.75em' }}>Or use your account.</span>
                <input spellCheck="false" type="text" className="inputat" placeholder="Username" name="username" id="email" onChange={(e) => setDetails({ ...details, username: e.target.value })} value={details.username} />
                {errors.username && <p className="error">{errors.username}</p>}
                <input spellCheck="false" type="password" className="inputat" placeholder="Password" name="password" id="passs" onChange={(e) => setDetails({ ...details, password: e.target.value })} value={details.password} />
                {errors.password && <p className="error">{errors.password}</p>}
                <a className={styles.a} href="">Forgot your password?</a>
                <input type="submit" className="butonat" id="sIn" value="Sign In" name="submit" />
            </form>
        </div>
    );
}