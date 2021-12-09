import { useState} from 'react'
import facebook from '../../../../assets/images/social/facebook.webp'
import google from '../../../../assets/images/social/google.webp'
import github from '../../../../assets/images/social/github.webp'
import './Register.scss'
import '../shared/LoginRegister.scss'
import * as styles from '../Globals.module.scss'
import { useDispatch } from 'react-redux'
import ValidationRegister from '../../../../utils/ValidationRegister'
import { signUpAction } from '../../../../reduxComponents/actions/Auth'
import { useTranslation } from 'react-i18next';

function Register({ register }) {
    const [values, setValues] = useState({ name: "", email: "", username: "", password: "", confirmpassword: "" });
    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);
    const [backError, setBackError] = useState(false);
    const dispatch = useDispatch();

    const RegisterHandler = (e) => {
        e.preventDefault();
        setErrors(ValidationRegister(values));
        setDataIsCorrect(true);

        const user = {
            name: values.name,
            email: values.email,
            username: values.username,
            password: values.password
        }

        dispatch(signUpAction(user.name, user.email, user.username, user.password));

        if (dataIsCorrect === true) {
            register();
        }
    };

    const {t} = useTranslation()

    return (
        <div>
            <div className="form_container sign_up_container">
                <form id="formReg" className={styles.form}>
                    {backError && <div className="BackError" style={{ marginLeft: '115px' }}>{backError}</div>}
                    <h1 className={styles.h1}>{t("auth.joinnow")}</h1>
                    <div className="social_container">
                        <a className={styles.a}><img alt="Facebook" src={facebook} width="40px" height="40" /></a>
                        <a className={styles.a}><img alt="Google" src={google} width="40px" height="40px" /></a>
                        <a className={styles.a}><img alt="GitHub" src={github} width="40px" height="40px" /></a>
                    </div>
                    <span className={styles.span} style={{ marginBottom: '.75em' }}>{t("auth.oremail")}</span>
                    <input spellCheck="false" type="text" name="name" id="e" className="inputat" placeholder={t("auth.name")} onChange={(e) => setValues({ ...values, name: e.target.value })} value={values.name} />
                    {errors.name && <p className="error">{errors.name}</p>}
                    <input spellCheck="false" type="email" className="inputat" placeholder={t("auth.email")} name="email" id="em" onChange={(e) => setValues({ ...values, email: e.target.value })} value={values.email} />
                    {errors.email && <p className="error">{errors.email}</p>}
                    <input spellCheck="false" type="text" name="username" className="inputat" placeholder={t("auth.username")} onChange={(e) => setValues({ ...values, username: e.target.value })} value={values.username} />
                    {errors.username && <p className="error">{errors.username}</p>}
                    <input spellCheck="false" type="password" className="inputat" id="psw" placeholder={t("auth.password")} name="password" onChange={(e) => setValues({ ...values, password: e.target.value })} value={values.password} />
                    {errors.password && <p className="error">{errors.password}</p>}
                    <input spellCheck="false" type="password" className="inputat" id="psww" placeholder={t("auth.confirmpassword")} name="confirmpassword" onChange={(e) => setValues({ ...values, confirmpassword: e.target.value })} value={values.confirmpassword} />
                    {errors.confirmpassword && <p className="error">{errors.confirmpassword}</p>}
                    <input type="submit" className="butonat" id="sUp" value={t("auth.signupbtn")} name="submit" onClick={RegisterHandler} />
                </form>
            </div>
        </div>
    );
}

export default Register
