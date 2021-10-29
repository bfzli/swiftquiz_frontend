import { container, head, title, description, cards, card, card_title, card_figure, card_description } from './Features.module.scss'
import One from '../../../../assets/images/One.png'
import Two from '../../../../assets/images/Two.png'
import Three from '../../../../assets/images/Three.png'

export default function Features() {
    return (
        <section className={container}>
            <div className={head} data-aos="fade-down">
                <h1 className={title}>
                    WE GOT YOU WITH OUR FEATURES!
                </h1>
                <p className={description}>
                    Different features for knoweldge seekers, nonetheless always makeing it fun for you.
                </p>
            </div>

            <div className={cards}>
                <div className={card} data-aos="fade-left">
                    <img className={card_figure} src={One} alt="" of the name />
                    <h3 className={card_title}>
                        BUILD QUIZESS
                    </h3>
                    <p className={card_description}>
                        Build quizess of different kinds with our platoform with all the tools you need.
                    </p>
                </div>

                <div className={card} data-aos="fade-up">
                    <img className={card_figure} src={Two} alt="" of the name />
                    <h3 className={card_title}>
                        SHARE QUIZESS
                    </h3>
                    <p className={card_description}>
                        Quizess that can be played by others are the fun of our platform, share them now.
                    </p>
                </div>

                <div className={card} data-aos="fade-right">
                    <img className={card_figure} src={Three} alt="" of the name />
                    <h3 className={card_title}>
                        BROWSE COMMUNITY
                    </h3>
                    <p className={card_description}>
                        Our community of quizess with different categories for you to search and learn.
                    </p>
                </div>
            </div>
        </section>
    )
}
