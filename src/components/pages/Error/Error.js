import * as styles from './Error.module.scss'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
export default function Error() {
    const theme = useSelector((state) => state.ui.theme);
    const history = useNavigate();
    const { t } = useTranslation()
    
    return (
        <div className={styles.container} data-aos="fade-down">
            <div className={styles.line1} />
            <div className={styles.line2} />
            <div className={styles.line3} />
            <div className={styles.line4} />
            <lottie-player className={styles.illustration} style={{ width: '27.5%', height: '27.5%' }} src={theme === "lightmode" ? "https://assets3.lottiefiles.com/packages/lf20_hfgzw2vn.json" : "https://assets1.lottiefiles.com/packages/lf20_okyit7xi.json"} background="transparent" speed="1" loop autoplay></lottie-player>

            <p className={styles.description}>
                {t("error.description")}
            </p>

            <button onClick={() => history.push('/')} className={styles.button}>{t("error.cta")}</button>
        </div>
    )
}
