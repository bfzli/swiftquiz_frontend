import { container, head, title, description, cards, card, card_title, card_figure, card_description } from './Features.module.scss'
import { useTranslation } from 'react-i18next'

export default function Features() {

    const { t } = useTranslation()

    return (
        <section className={container}>
            <div className={head} data-aos="fade-down">
                <h1 className={title}>
                    {t("home.section_2.title")}
                </h1>
                <p className={description}>
                    {t("home.section_2.description")}
                </p>
            </div>

            <div className={cards}>
                <div className={card} data-aos="fade-left">
                    <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_hi95bvmx/WebdesignBg.json" background="transparent" speed="1" style={{ width: '300px', height: '300px' }} loop autoplay></lottie-player>
                    <h3 className={card_title}>
                        {t("home.section_2.feature_one.title")}
                    </h3>
                    <p className={card_description}>
                        {t("home.section_2.feature_one.description")}
                    </p>
                </div>

                <div className={card} data-aos="fade-up">
                    <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_tcwozhzv/MarketingCampaignsViralMethods.json" background="transparent" speed="1" style={{ width: '300px', height: '300px' }} loop autoplay></lottie-player>

                    <h3 className={card_title}>
                        {t("home.section_2.feature_two.title")}

                    </h3>
                    <p className={card_description}>
                        {t("home.section_2.feature_two.description")}
                    </p>
                </div>

                <div className={card} data-aos="fade-right">
                    <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_5nfzewj1/MarketingAutomationViralMethods.json" background="transparent" speed="1" style={{ width: '300px', height: '300px' }} loop autoplay></lottie-player>

                    <h3 className={card_title}>
                        {t("home.section_2.feature_three.title")}

                    </h3>
                    <p className={card_description}>
                        {t("home.section_2.feature_three.description")}
                    </p>
                </div>
            </div>
        </section>
    )
}
