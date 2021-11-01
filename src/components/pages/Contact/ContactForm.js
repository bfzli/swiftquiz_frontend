import React, { useState } from 'react'
import './ContactForm.scss'
import '../../shared/Website/FormFonts.scss'
import '../../shared/../../components/pages/Form/shared/LoginRegister.scss'
import ValidationContact from '../../../utils/ValidationContact'

export default function ContactForm() {

    const [values,setValues] = useState({name:"", email:"", phone:"", subject:"", description:""});
    const [errors,setErrors] =  useState({});

    const submitContact = (e) =>{
        e.preventDefault();
        setErrors(ValidationContact(values));
    }

    return (
        <div className="mainContainer">
            <div className="topContent">
                <h1 id="topTitle">Contact Us</h1>
                <h1 id="second">How can we help you?</h1>
                <h4 id="third">Give us a call or email us using the form bellow:</h4>    
            </div>
            <form className="Contactforma">
               <input className="contactInputs one" type="text" name="name" placeholder="Name" onChange={(e)=> setValues({...values, name: e.target.value})} value={values.name}/> 
               {errors.name && <p className="ContactError">{errors.name}</p>}
               <input className="contactInputs two" type="email" name="email" placeholder="Email" onChange={(e)=> setValues({...values, email: e.target.value})} value={values.email}/> 
               {errors.email && <p className="ContactError">{errors.email}</p>}
               <input className="contactInputs three" type="text" name="phone" placeholder="Phone (optional)" onChange={(e)=> setValues({...values, phone: e.target.value})} value={values.phone}/> 
               {errors.phone && <p className="ContactError">{errors.phone}</p>}
               <input className="contactInputs five" type="text" name="subject" placeholder="Subject" onChange={(e)=> setValues({...values, subject: e.target.value})} value={values.subject}/> 
               {errors.subject && <p className="ContactError">{errors.subject}</p>}
               <textarea className="contactInputs six" name="description" placeholder="Description" onChange={(e)=> setValues({...values, description: e.target.value})} value={values.description}></textarea>
               {errors.description && <p className="ContactError">{errors.description}</p>}
               <input className="butonat" id="contactSubmit" type="submit" value="Submit" onClick={submitContact} />
            </form>
        </div>
    )
}