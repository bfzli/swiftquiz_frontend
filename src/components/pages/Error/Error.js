import { container, button, description, illustration } from './Error.module.scss'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Error() {

    const history = useNavigate();
    const {t} = useTranslation()

    return (
        <div className={container} data-aos="fade-down">
            <lottie-player className={illustration} style={{ width: '50%', height: '50%' }} className={illustration} src="https://assets10.lottiefiles.com/private_files/lf30_wvfo5uzg.json" background="transparent" speed="1" loop autoplay></lottie-player>

            <p className={description}>
                {t("error.description")}
            </p>
            
            <button onClick={() => history.push('/')} className={button}>{t("error.cta")}</button>
        </div>
    )
}
