export default function validate(full_path, when_to) {

    const validator = full_path.indexOf(when_to) !== -1 ? true : false;
    return validator;
}
