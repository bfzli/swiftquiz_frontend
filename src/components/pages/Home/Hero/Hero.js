import {container, left, title, description, right, illustration} from './Hero.module.scss'
import {cta_hero} from '../../../shared/Buttons/Buttons.module.scss'
import hero_illustration from '../../../../assets/images/illustration.png'
import {Link} from 'react-router-dom';

export default function Hero() {
    return (
        <section className={container}>
            <div className={left} data-aos="fade-right">
                <h1 className={title}>
                    MAKING LEARNING FUN WITH QUIZESS
                </h1>
                <p className={description}>
                    With our platform learning is awesome and fun with community made quizes of different fields.
                </p>
                <Link to="/randomizer">
                <button className={cta_hero}>
                    PLAY A RANDOM QUIZ
                </button>
                </Link>
            </div>

            <div className={right} data-aos="fade-left">
                <img className={illustration} src={hero_illustration} alt="Illustration" />
            </div>
        </section>
    )
}