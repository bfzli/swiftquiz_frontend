import { container, left, right, illustration, title, description } from './Community.module.scss'
import { button_fill_purple } from '../../../shared/Buttons/Buttons.module.scss'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Community() {

    const { t } = useTranslation()

    return (
        <section className={container}>

            <div className={right} data-aos="fade-left">
                <lottie-player src="https://assets2.lottiefiles.com/private_files/lf30_pkibk91l.json" background="transparent" speed="1" style={{ width: '920px', height: '920px' }} loop autoplay></lottie-player>
            </div>

            <div className={left} data-aos="fade-right">
                <h2 className={title}>
                    {t("home.section_3.title")}
                </h2>
                <p className={description}>
                    {t("home.section_3.description")}
                </p>
                <Link to="/community">
                    <button className={button_fill_purple}>
                        {t("home.section_3.cta")}
                    </button>
                </Link>
            </div>
        </section>
    )
}