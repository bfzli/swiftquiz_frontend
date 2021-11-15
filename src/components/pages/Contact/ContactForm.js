import React, { useState, useRef } from 'react'

import './ContactForm.scss'
import emailjs, { sendForm } from "emailjs-com"
import '../../shared/../../components/pages/Form/shared/LoginRegister.scss'
import * as styles from '../Form/Globals.module.scss'
import ContactValidation from '../../../utils/ContactValidation'

export default function ContactForm() {

    const [values,setValues] = useState({name:"", email:"", phone:"", subject:"", description:""}); 
    const [errors, setErrors] = useState({});
    const [validate, setValidate] = useState(false);

    const form = useRef();

  const ContactHandler = (e) => {
    e.preventDefault();
    setErrors(ContactValidation(values));
    if(values.name  && values.email && values.subject && values.description && !values.phone || values.phone && !errors.phone){
        emailjs.sendForm('service_5n3h55t', 'swiftquiz_template', form.current, 'user_5GMcFcZjQDsQd8qZSzybg')
        .then((result) => {
            console.log(result.text);
            alert("Sent Successfully ^_^");
        }, (error) => {
            console.log(error.text);
        });
        setValues({name:"", email:"", phone:"", subject:"", description:""});
    }else{
        console.log("Error");
    }
  };
    
    return (
        <>
        <div className="mainContainer">
            <div className="topContent">
                <h1 className={styles.h1} id="topTitle">Contact Us</h1>
                <h1 className={styles.h1} id="second">How can we help you?</h1>
                <h4 id="third">Give us a call or email us using the form bellow:</h4>    
            </div>
            <form ref={form} className="Contactforma" onSubmit={ContactHandler}>
                <input className="contactInputs one" type="text" name="name" placeholder="Name" onChange={(e)=> setValues({...values, name: e.target.value})} value={values.name}/> 
                {errors.name ? <p className="errorContact">{errors.name}</p> : null}
                <input className="contactInputs two" type="email" name="email" placeholder="Email" onChange={(e)=> setValues({...values, email: e.target.value})} value={values.email}/> 
                {errors.email ? <p className="errorContact">{errors.email}</p> : null}
                <input className="contactInputs three" type="text" name="phone" placeholder="Phone (optional)" onChange={(e)=> setValues({...values, phone: e.target.value})} value={values.phone}/> 
                {errors.phone ? <p className="errorContact">{errors.phone}</p> : null}
                <input className="contactInputs five" type="text" name="subject" placeholder="Subject" onChange={(e)=> setValues({...values, subject: e.target.value})} value={values.subject}/> 
                {errors.subject ? <p className="errorContact">{errors.subject}</p> : null}
                <textarea className="contactInputs six" type="text" name="description" placeholder="Description" onChange={(e)=> setValues({...values, description: e.target.value})} value={values.description}/> 
                {errors.description ? <p className="errorContact">{errors.description}</p> : null}
                <input className="butonat" id="contactSubmit" type="submit" value="Submit"/>
            </form>
        </div>
        </>
    )
}