import { container, left, right, illustration, title, description } from './Started.module.scss'
import { button_fill_purple } from '../../../shared/Buttons/Buttons.module.scss'
import main_illustration from "../../../../assets/images/webp/desk.webp"
import { Link } from 'react-router-dom'

export default function Started() {
    return (
        <section className={container}>
        
            <div className={right} data-aos="fade-right">
                <img src={main_illustration} className={illustration} alt="Illustration" />
            </div>

            <div className={left} data-aos="fade-left">
                <h2 className={title}>
                    SEEK KNOWLEDGE BY PLAYING QUIZZES
                </h2>
                <p className={description}>
                    The best of our platform is that we have our own community of quizes from different categories that you can chose to play from. You can post yours there and help to the community of knowledge to grow.
                </p>
                <Link to="/register">
                    <button className={button_fill_purple}>
                        GET STARTED NOW
                    </button>
                </Link>
            </div>
        </section>
    )
}
