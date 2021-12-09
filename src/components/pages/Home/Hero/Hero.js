import * as styles from './Hero.module.scss'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

export default function Hero() {
    const { t } = useTranslation();



    return (
        <section className={styles.container}>
            <div className={styles.left} data-aos="fade-right">
                <h1 className={styles.title}>
                    {t("home.section_1.title")}
                </h1>
                <p className={styles.description}>
                    {t("home.section_1.description")}
                </p>
                <Link to="/randomizer">
                    <button className={styles.hero_cta}>
                        {t("home.section_1.cta")}
                    </button>
                </Link>
            </div>

            <div className={styles.right} data-aos="fade-left">
                <lottie-player className={styles.lottie} src="https://assets4.lottiefiles.com/packages/lf20_kdtvzhjt/MetovoViralConsultingMarketing.json" background="transparent" speed="1" loop autoplay></lottie-player>
            </div>
        </section>
    )
}