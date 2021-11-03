function ValidationRegister(values) {
    let errors={};

    if(!values.name.trim()){
        errors.name = "Name is required.";
    }
    if(!values.username.trim()){
        errors.username = "Username is required.";
    }
    if(!values.email){
        errors.email = "Email is required.";
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = "Email is invalid.";
    }
    if(!values.password){
        errors.password = "Password is required.";
    }else if(values.password.length < 8){
        errors.password = "Password must be at least 8 characters.";
    }
    if(!values.confirmpassword){
        errors.confirmpassword = "Password confirmation is required."
    }else if(values.password !== values.confirmpassword){
            errors.confirmpassword = "Passwords do not match."
        }

    return errors;
}

export default ValidationRegister
