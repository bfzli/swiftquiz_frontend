import {container, left, right, illustration, title, description} from './Community.module.scss'
import {button_fill_purple} from '../../../shared/Buttons/Buttons.module.scss'
import main_illustration from "../../../../assets/images/toolkit.png"
import { Link } from 'react-router-dom'


export default function Community() {
    return (
        <section className={container}>

            <div className={right} data-aos="fade-left">
                <img src={main_illustration} className={illustration} alt="Illustration" />
            </div>

            <div className={left} data-aos="fade-right">
                <h2 className={title}>
                    COMMUNITY BUILD QUIZESS FOR ALL
                </h2>
                <p className={description}>
                    Yes, you heard right, a community of people who crafted different quizess for different life fields that you can play and seek knowledge for a better you.
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