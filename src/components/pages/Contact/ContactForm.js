import React, { useState } from 'react'
import './ContactForm.scss'
import '../../shared/Website/FormFonts.scss'
import '../../shared/../../components/pages/Form/shared/LoginRegister.scss'

export default function ContactForm() {

    const [values,setValues] = useState({name:"", email:"", phone:"", category:"", subject:"", description:""});


    return (
        <div className="mainContainer">
            <div className="topContent">
                <h1 id="topTitle">Contact Us</h1>
                <h1 id="second">How can we help you?</h1>
                <h4 id="third">Give us a call or email us using the form bellow:</h4>    
            </div>
            <form className="Contactforma">
               <input className="contactInputs one" type="text" name="name" placeholder="Name" onChange={(e)=> setValues({...values, name: e.target.value})} value={values.name}/> 
               <input className="contactInputs two" type="email" name="email" placeholder="Email" onChange={(e)=> setValues({...values, email: e.target.value})} value={values.email}/> 
               <input className="contactInputs three" type="number" name="phone" placeholder="Phone" onChange={(e)=> setValues({...values, phone: e.target.value})} value={values.phone}/> 
               <input className="contactInputs four" type="text" name="category" placeholder="Category" onChange={(e)=> setValues({...values, category: e.target.value})} value={values.category}/> 
               <input className="contactInputs five" type="text" name="subject" placeholder="Subject" onChange={(e)=> setValues({...values, subject: e.target.value})} value={values.subject}/> 
               <input className="contactInputs six" type="text" name="description" placeholder="Description" onChange={(e)=> setValues({...values, description: e.target.value})} value={values.description}/> 
               <input className="butonat" id="contactSubmit" type="submit" value="Submit" />
            </form>
        </div>
    )
}