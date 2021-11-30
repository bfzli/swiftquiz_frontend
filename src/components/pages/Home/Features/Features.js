import { container, head, title, description, cards, card, card_title, card_figure, card_description } from './Features.module.scss'
import One from '../../../../assets/images/webp/One.webp'
import Two from '../../../../assets/images/webp/Two.webp'
import Three from '../../../../assets/images/webp/Three.webp'

export default function Features() {
    return (
        <section className={container}>
            <div className={head} data-aos="fade-down">
                <h1 className={title}>
                    Our Features
                </h1>
                <p className={description}>
                    Different features for knoweldge seekers, nonetheless always makeing it fun for you.
                </p>
            </div>

            <div className={cards}>
                <div className={card} data-aos="fade-left">
                    <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_hi95bvmx/WebdesignBg.json" background="transparent" speed="1" style={{ width: '300px', height: '300px' }} loop autoplay></lottie-player>
                    <h3 className={card_title}>
                        Build Quizzes
                    </h3>
                    <p className={card_description}>
                        Build quizess of different kinds with our platoform with all the tools you need.
                    </p>
                </div>

                <div className={card} data-aos="fade-up">
                    <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_tcwozhzv/MarketingCampaignsViralMethods.json" background="transparent" speed="1" style={{ width: '300px', height: '300px' }} loop autoplay></lottie-player>

                    <h3 className={card_title}>
                        Share Quizzes
                    </h3>
                    <p className={card_description}>
                        Quizess that can be played by others are the fun of our platform, share them now.
                    </p>
                </div>

                <div className={card} data-aos="fade-right">
                    <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_5nfzewj1/MarketingAutomationViralMethods.json" background="transparent" speed="1" style={{ width: '300px', height: '300px' }} loop autoplay></lottie-player>

                    <h3 className={card_title}>
                        Browse Community
                    </h3>
                    <p className={card_description}>
                        Our community of quizess with different categories for you to search and learn.
                    </p>
                </div>
            </div>
        </section>
    )
}
