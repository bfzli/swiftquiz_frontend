export default function ValidationContact(values) {
    let errors = {};

    if(!values.name.trim()){
        errors.name = "Name is required."
    }
    if(!values.email){
        errors.email = "Email is required.";
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = "Email is invalid.";
    }
    if(!values.phone){
        errors.phone = "";
    }else if(!/\S+\d{9,12}/.test(values.phone)){
        errors.phone = "Phone number is invalid  ."
    }
    if(!values.subject.trim()){
        errors.subject = "Subject is required."
    }
    if(!values.description.trim()){
        errors.description = "Description is required."
    }

    return errors;

}
