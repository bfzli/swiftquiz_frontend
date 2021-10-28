function ValidationLogin(values) {

    let errors = {};

    if(!values.username){
        errors.username = "Email or Username is required.";
    }
    if(!values.password){
        errors.password = "Password is required."
    }
    return errors;
}
export default ValidationLogin
