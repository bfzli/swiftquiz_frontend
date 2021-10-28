import React, {useState} from 'react'
import facebook from '../../../../assets/images/facebook.png'
import google from '../../../../assets/images/google.png'
import github from '../../../../assets/images/github.png'
import './Register.scss'
import '../shared/LoginRegister.scss'
// import {sign_up_container,sUp} from '../Register/Register.module.scss'
// import {form_container,social,social_container,inputat,error,butonat} from '../shared/LoginRegister.module.scss'

import ValidationRegister from '../../../../utils/ValidationRegister'
import axios, { Axios } from 'axios'

function Register() {

    const [values, setValues] = useState({name:"",email:"",username:"",password:"", confirmpassword:""});
    const [errors,setErrors] = useState({});
    const [dataIsCorrect,setDataIsCorrect] = useState(false);

    const RegisterHandler = (e) =>{
        e.preventDefault();
        setErrors(ValidationRegister(values));
        setDataIsCorrect(true);

        const user = {
            name: values.name,
            email: values.email,
            username: values.username,
            password: values.password
        }

        axios.post("http://localhost:5000/api/users/register-user",user).then((res)=>{
                console.log(res);
        }).catch((err)=>{
            console.log(err);
        })

        console.log(user);
    };

    return (
                    <div className="form_container sign_up_container">
			            <form id="formReg" name="forma">
				            <h1>Create Account</h1>
				            <div className="social_container">
					            <a className="social"><img src={facebook} alt="" width="40px" height="40"/></a>
					            <a className="social"><img src={google} alt="" width="40px" height="40px"/></a>
					            <a className="social"><img src={github} alt="" width="40px" height="40px"/></a>
				            </div>
				                <span>or use your email for registration</span>
				                <input type="text"  name="name" id="e" className="inputat" placeholder="Name" onChange={(e) => setValues({...values, name: e.target.value})} value={values.name} />
				            {errors.name && <p className="error">{errors.name}</p>}
				                <input type="email" className="inputat" placeholder="Email" name="email" id="em" onChange={(e) => setValues({...values, email: e.target.value})} value={values.email}/>
				            {errors.email && <p className="error">{errors.email}</p>}
                            <input type="text"  name="username" className="inputat" placeholder="Username" onChange={(e) => setValues({...values, username: e.target.value})} value={values.username}/>
                            {errors.username && <p className="error">{errors.username}</p>}
				                <input type="password" className="inputat" id="psw" placeholder="Password" name="password" onChange={(e) => setValues({...values, password: e.target.value})} value={values.password}/>
				            {errors.password && <p className="error">{errors.password}</p>}
                            <input type="password" className="inputat" id="psww" placeholder="Confirm password" name="confirmpassword" onChange={(e) => setValues({...values, confirmpassword: e.target.value})} value={values.confirmpassword}/>
                            {errors.confirmpassword && <p className="error">{errors.confirmpassword}</p>}
				                <input type="submit" className="butonat" id="sUp" value="Sign Up" name="submit"  onClick={RegisterHandler} />
			            </form>  
		            </div>
    );
}

export default Register
