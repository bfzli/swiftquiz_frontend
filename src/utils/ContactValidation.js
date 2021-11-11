export default function ContactValidation(values){

    let errors = {};

    if(!values.name.trim()){
        errors.name = "Name is required."
    }
    if(!values.email){
        errors.email = "Email is required."
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = "Email is invalid.";
    }
    
    if(!values.subject.trim()){
        errors.subject = "Subject is required."
    }
    if(!values.description.trim()){
        errors.description = "Description is required."
    }
    return errors;

}