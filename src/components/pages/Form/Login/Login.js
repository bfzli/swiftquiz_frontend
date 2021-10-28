import React, {useState, useEffect} from 'react'
import facebook from '../../../../assets/images/facebook.png'
import google from '../../../../assets/images/google.png'
import github from '../../../../assets/images/github.png'
import './Login.scss'
import '../shared/LoginRegister.scss'
// import {sign_in_container,sIn} from '../Login/Login.module.scss'
// import {form_container,social_container,social,inputat,error,butonat} from '../shared/LoginRegister.module.scss'

import ValidationLogin from '../../../../utils/ValidationLogin'
import axios, { Axios } from 'axios'


function Login() {

    const [details,setDetails] = useState({username: "", password: ""});
    const [errors,setErrors] = useState({});
    
    const LoginHandler = (e) =>{
        e.preventDefault();
        setErrors(ValidationLogin(details));
        
        const logindata = {
            username: details.username,
            password: details.password
        };
        
        axios.post("http://localhost:5000/api/users/login-user",logindata).then((res)=>{
            console.log(res);
        }).catch((err)=>{
                console.log(err);
            })
        }

    return (
                    <div className="form_container sign_in_container">
                        <form name="forma2" onSubmit={LoginHandler}>
                            <h1>Sign in</h1>
                            <div className="social_container">
                                <a className="social"><img src={facebook} alt="" width="40px" height="40"/></a>
                                <a className="social"><img src={google} alt="" width="40px" height="40px"/></a>
                                <a className="social"><img src={github} alt="" width="40px" height="40px"/></a>
                            </div>
                            <span>or use your account</span>
                            <input type="text" className="inputat" placeholder="Email or username" name="username" id="email" onChange={(e) => setDetails({...details, username: e.target.value})} value={details.username} />
                            {errors.username && <p className="error">{errors.username}</p>}
                            <input type="password" className="inputat" placeholder="Password" name="password"  id="passs" onChange={(e) => setDetails({...details, password: e.target.value})} value={details.password} />
                            {errors.password && <p className="error">{errors.password}</p>}
                            <a href="">Forgot your password?</a>
                            <input type="submit"className="butonat" id="sIn" value="Sign In" name="submit"/>
                        </form> 
                    </div>    
    );
}

export default Login