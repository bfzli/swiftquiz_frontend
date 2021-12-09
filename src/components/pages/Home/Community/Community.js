import { container, left, right, illustration, title, description } from './Community.module.scss'
import { button_fill_purple } from '../../../shared/Buttons/Buttons.module.scss'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Community() {

    const {t} = useTranslation() 

    return (
        <section className={container}>

            <div className={right} data-aos="fade-left">
                <lottie-player src="https://assets2.lottiefiles.com/private_files/lf30_pkibk91l.json" background="transparent" speed="1" style={{ width: '920px', height: '920px' }} loop autoplay></lottie-player>
            </div>

            <div className={left} data-aos="fade-right">
                <h2 className={title}>
                    What is the Mission of our platform?
                </h2>
                <p className={description}>
                    We are very passionate about helping the community learn, so for this reason we've build Swift Quiz to help people get knoweldge easy in a fun way for their topic they watch and love, this platform is all build by community.
                </p>
                <Link to="/community">
                    <button className={button_fill_purple}>
                        EXPLORE QUIZESS
                    </button>
                </Link>
            </div>

        </section>
    )
}