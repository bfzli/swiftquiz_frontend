import * as styles from './Contact.module.scss'
import { Link } from 'react-router-dom'

export default function Contact() {
    return (
        <div className={styles.container}>
            <div className={styles.page_info} data-aos="fade-down">
                <h2 className={styles.welcome_text}>Help Center</h2>

                <div className={styles.search}>
                    <input className={styles.search_input} type="text" placeholder='Your question...' />
                    <div className={styles.search_wrapper}>
                        <svg className={styles.search_icon} width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.867 18 18 14.867 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18ZM19.485 18.071L22.314 20.899L20.899 22.314L18.071 19.485L19.485 18.071Z" />
                        </svg>
                    </div>
                </div>
            </div>

            <main style={{ marginTop: '2.5em' }}>
                <div className={styles.bottom} data-aos="fade-left">

                    <div className={styles.contact_info_wrapper}>
                        <h1 className={styles.contact_title}>The help you do deserve!</h1>
                        <p className={styles.contact_description}>Do you have something in mind, here you can find the answers to your questions.</p>
                    </div>

                    <div className={styles.contact_features_wrapper}>
                        <div className={styles.contact_feature_box_wrapper}>
                            <p className={styles.contact_feature_title}>24 / 7 Support</p>
                            <p className={styles.contact_feature_description}>Our Team works hard to anwser all tickets 24 hours 7 day a week, so don't hesitate to open an ticket.</p>
                        </div>

                        <div className={styles.contact_feature_box_wrapper}>
                            <p className={styles.contact_feature_title}>Kind Team</p>
                            <p className={styles.contact_feature_description}>Our Team works hard to anwser all tickets 24 hours 7 day a week, so don't hesitate to open an ticket.</p>
                        </div>

                        <div className={styles.contact_feature_box_wrapper}>
                            <p className={styles.contact_feature_title}>Free of Charge</p>
                            <p className={styles.contact_feature_description}>Our Team works hard to anwser all tickets 24 hours 7 day a week, so don't hesitate to open an ticket.</p>
                        </div>
                    </div>

                    <div className={styles.all_tickets_wrapper}>

                        <div className={styles.anwsers_container}>
                            <h2>title of the</h2>
                            <hr />
                            <ul>
                                <li>sdfsdfsdf</li>
                                <li>eqjnenqjwe</li>
                            </ul>
                        </div>

                        <div className={styles.anwsers_container}>
                            <h2>title of the</h2>
                            <hr />
                            <ul>
                                <li>sdfsdfsdf</li>
                                <li>eqjnenqjwe</li>
                            </ul>
                        </div><div className={styles.anwsers_container}>
                            <h2>title of the</h2>
                            <hr />
                            <ul>
                                <li>sdfsdfsdf</li>
                                <li>eqjnenqjwe</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </main >
        </div >
    )
}