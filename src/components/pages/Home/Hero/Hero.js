import * as styles from './Hero.module.scss'
import { Link } from 'react-router-dom'

export default function Hero() {
    return (
        <section className={styles.container}>
            <div className={styles.left} data-aos="fade-right">
                <h1 className={styles.title}>
                    MAKING LEARNING FUN WITH QUIZESS
                </h1>
                <p className={styles.description}>
                    With our platform learning is awesome and fun with community made quizes of different fields.
                </p>
                <Link to="/randomizer">
                    <button className={styles.hero_cta}>
                        PLAY A RANDOM QUIZ
                    </button>
                </Link>
            </div>

            <div className={styles.right} data-aos="fade-left">
                <lottie-player className={styles.test} src="https://assets4.lottiefiles.com/packages/lf20_kdtvzhjt/MetovoViralConsultingMarketing.json" background="transparent" speed="1" style={{ width: '1350px', height: '600px', marginBottom: '12vh' }} loop autoplay></lottie-player>
            </div>
        </section>
    )
}