import React, { useState, useRef } from 'react'
import './ContactForm.scss'
import emailjs from "emailjs-com"
import '../../shared/../../components/pages/Form/shared/LoginRegister.scss'
import * as styles from '../Form/Globals.module.scss'
import ContactValidation from '../../../utils/ContactValidation'

export default function ContactForm() {

    const [values, setValues] = useState({ name: "", email: "", phone: "", subject: "", description: "" });
    const [errors, setErrors] = useState({});

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
        } else{
            console.log("Error");
        }
}

    return (
        <>
            <div className="mainContainer">
                <div className="topContent">
                    <h1 className={styles.h1} id="topTitle">Contact Us</h1>
                </div>
                <form ref={form}
                    className="Contactforma" onSubmit={ContactHandler}>
                    <h1 className={styles.h1} id="second">Get in Touch with our Team?</h1>
                    <h4 id="third">Our team is here to help you out for anything related to our platform. If you need help, don't hesitate to send us a message.</h4>
                    <input spellCheck="false" className="contactInputs one" type="text" name="name" placeholder="Name" onChange={(e) => setValues({ ...values, name: e.target.value })} value={values.name} />
                    {errors.name ? <p className="errorContact">{errors.name}</p> : null}
                    <input spellCheck="false" className="contactInputs two" type="email" name="email" placeholder="Email" onChange={(e) => setValues({ ...values, email: e.target.value })} value={values.email} />
                    {errors.email ? <p className="errorContact">{errors.email}</p> : null}
                    <input spellCheck="false" className="contactInputs five" type="text" name="subject" placeholder="Subject" onChange={(e) => setValues({ ...values, subject: e.target.value })} value={values.subject} />
                    {errors.subject ? <p className="errorContact">{errors.subject}</p> : null}
                    <textarea spellCheck="false" className="contactInputs six" type="text" name="description" placeholder="Description" onChange={(e) => setValues({ ...values, description: e.target.value })} value={values.description} />
                    {errors.description ? <p className="errorContact">{errors.description}</p> : null}
                    <input className="butonat" id="contactSubmit" type="submit" value="Submit" />
                </form>
            </div>
        </>
    )
}