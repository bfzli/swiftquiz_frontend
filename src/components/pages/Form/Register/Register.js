import { useState, useEffect } from 'react'
import facebook from '../../../../assets/images/social/facebook.webp'
import google from '../../../../assets/images/social/google.webp'
import github from '../../../../assets/images/social/github.webp'
import './Register.scss'
import '../shared/LoginRegister.scss'
import * as styles from '../Globals.module.scss'
import { useDispatch, useSelector } from 'react-redux'

import ValidationRegister from '../../../../utils/ValidationRegister'
import axios from 'axios'
import { signUpAction } from '../../../../reduxComponents/actions/Auth'

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


function Register({register}) {
    const [values, setValues] = useState({ name: "", email: "", username: "", password: "", confirmpassword: "" });
    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);
    const [backError, setBackError] = useState(false);
    const [session, setSession] = useState(localStorage.getItem('token') || null)
    const [user, setUser] = useState(localStorage.getItem('user') || null)

    useEffect(() => {
        if (session !== null) {
            let user = parseJwt(session);
            setUser(user.username);
        }
    }, [])

    // useEffect(() =>{

    //    console.log('as')

    // }, [localStorage.getItem('token')])

    const dispatch = useDispatch();

    const RegisterHandler = (e) => {
        e.preventDefault();
        setErrors(ValidationRegister(values));
        setDataIsCorrect(true);

        const user = {
            name: values.name,
            email: values.email,
            username: values.username,
            password: values.password
        }

        dispatch(signUpAction(user.name, user.email, user.username, user.password));
        register();
        /* axios.post("https://swiftquiz-api.herokuapp.com/api/user/register-user", user).then((res) => {
            if (res.status == 400 && res.data == values.email) {
                throw Error('Email is already in use');
            } else if (res.status == 400 && res.data == values.username) {
                throw Error('Username is already in use');
            }
            // console.log(res);
        }).then((data) => {
            setBackError(null);
            const logindata = {
                username: values.username,
                password: values.password
            };

            axios.post("https://swiftquiz-api.herokuapp.com/api/user/login-user", logindata).then((res) => {
                if (res.status == 403) {
                    throw Error("Incorrect Password");
                } else if (res.status == 404) {
                    throw Error("Username is not found");
                }
                // console.log('token', res.data)
                localStorage.setItem('token', res.data.token)
                const user = parseJwt(res.data.token);
                console.log(user)

            }).then((data) => {
                setBackError(null);
                setNowShow(true);
            }).catch((err) => {
                setBackError(err.response.data.message);
            })
        }).catch((err) => {
            setBackError(err.response.data.message);
        }) */
        // console.log(user);
    };

    function parseJwt(token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    }; 


    return (
        <div>
            <div className="form_container sign_up_container">
            
                <form id="formReg" className={styles.form}>
                    {backError && <div className="BackError" style={{ marginLeft: '115px' }}>{backError}</div>}
                    <h1 className={styles.h1}>Join Now</h1>
                    <div className="social_container">
                        <a className={styles.a}><img alt="Facebook" src={facebook} width="40px" height="40" /></a>
                        <a className={styles.a}><img alt="Google" src={google} width="40px" height="40px" /></a>
                        <a className={styles.a}><img alt="GitHub" src={github} width="40px" height="40px" /></a>
                    </div>
                    <span className={styles.span} style={{ marginBottom: '.75em' }}>Or use your email for registration</span>
                    <input type="text" name="name" id="e" className="inputat" placeholder="Name" onChange={(e) => setValues({ ...values, name: e.target.value })} value={values.name} />
                    {errors.name && <p className="error">{errors.name}</p>}
                    <input type="email" className="inputat" placeholder="Email" name="email" id="em" onChange={(e) => setValues({ ...values, email: e.target.value })} value={values.email} />
                    {errors.email && <p className="error">{errors.email}</p>}
                    <input type="text" name="username" className="inputat" placeholder="Username" onChange={(e) => setValues({ ...values, username: e.target.value })} value={values.username} />
                    {errors.username && <p className="error">{errors.username}</p>}
                    <input type="password" className="inputat" id="psw" placeholder="Password" name="password" onChange={(e) => setValues({ ...values, password: e.target.value })} value={values.password} />
                    {errors.password && <p className="error">{errors.password}</p>}
                    <input type="password" className="inputat" id="psww" placeholder="Confirm password" name="confirmpassword" onChange={(e) => setValues({ ...values, confirmpassword: e.target.value })} value={values.confirmpassword} />
                    {errors.confirmpassword && <p className="error">{errors.confirmpassword}</p>}
                    <input type="submit" className="butonat" id="sUp" value="Sign Up" name="submit" onClick={RegisterHandler} />
                </form>
            </div>
        </div>
    );
}

export default Register
