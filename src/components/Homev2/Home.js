import * as styles from './Home.module.scss'
import web from './web.png'
import { useState, useEffect } from 'react'
import f1 from '../../assets/images/v2/bridge_bmeqwo.svg'
import f2 from '../../assets/images/v2/descript_jidfav.svg'
import f3 from '../../assets/images/v2/eqt_zzpm4z.svg'
import f4 from '../../assets/images/v2/grammarly_kdqk4p.svg'
import f5 from '../../assets/images/v2/intercom_nmqamd-1.svg'
import f6 from '../../assets/images/v2/italic_yqmmzg.svg'
import f7 from '../../assets/images/v2/loom_aetyp2.svg'
import f9 from '../../assets/images/v2/parsely_bztaeo.svg'
import f10 from '../../assets/images/v2/frontify_vr3xme.svg'
import f12 from '../../assets/images/v2/unsplash_wotp32.svg'
import add_quiz_dark from '../../assets/images/homepage/add_quiz_dark.png'
import add_quiz_light from '../../assets/images/homepage/add_quiz_light.png'
import { useSelector } from 'react-redux'

export default function Homev2() {
    const [s3view, setS3view] = useState('one')
    const theme = useSelector(state => state.ui.theme)

    useEffect(() => {
        ContentSwitcher()
    }, [])

    function ContentSwitcher() {
        setTimeout(() => {
            setS3view('two')
        }, 2000)
    }
    return (
        <>
            <section className={styles.section1}>
                <div className={styles.line1} />
                <div className={styles.line2} />
                <div className={styles.line3} />
                <div className={styles.line4} />
                <div className={styles.hero}>
                    <h1 className={styles.title}>
                        Enjoyable way of learning by playing quizzes.
                    </h1>

                    <p className={styles.description}>
                        The best way of learning with our platform, are you read to play quizes and seek knowledge, while not forgetin to  conhtruibuyte by making new quizzes.
                    </p>

                    <img src={web} className={styles.web} />
                </div>
            </section>

            <section className={styles.section3}>
                <div className={styles.line1} />
                <div className={styles.line2} />
                <div className={styles.line3} />
                <div className={styles.line4} />
                <div className={styles.hero}>
                    <h1 className={styles.s3title}>
                        Who uses our platform?
                    </h1>

                    <p className={styles.s3description}>
                        Our app is beeing used by so many comapnies around the world and normal people, come join them in this knoweldge journey.
                    </p>

                    <div className={styles.brands}>
                        <img id="brand" className={styles.brand} alt="Brand" src={f1} />
                        <img className={styles.brand} alt="Brand" src={f2} />
                        <img className={styles.brand} alt="Brand" src={f3} />
                        <img className={styles.brand} alt="Brand" src={f4} />
                        <img className={styles.brand} alt="Brand" src={f5} />
                        <img className={styles.brand} alt="Brand" src={f6} />
                        <img className={styles.brand} alt="Brand" src={f7} />
                        <img className={styles.brand} alt="Brand" src={f9} />
                        <img className={styles.brand} alt="Brand" src={f10} />
                        <img className={styles.brand} alt="Brand" src={f12} />
                    </div>

                </div>
            </section>

            <section className={styles.section2}>
                <div className={styles.line1} />
                <div className={styles.line2} />
                <div className={styles.line3} />
                <div className={styles.line4} />
                <div className={styles.hero}>
                    <h1 className={styles.title}>
                        A platform with many features for you!
                    </h1>

                    <p className={styles.description}>
                        From pitch decks to project plans, conference keynotes to all-hands meetings, our presentation software gives teams space to share all the work that matters.
                    </p>

                    <div className={styles.s2content}>
                        <div className={styles.s2switcher}>
                            <div className={styles.switcherbox} id={s3view === 'one' ? "isActiveBox" : null} onClick={() => setS3view('one')}>
                                Play Quizzes
                            </div>

                            <div className={styles.switcherbox} id={s3view === 'two' ? "isActiveBox" : null} onClick={() => setS3view('two')}>
                                Build Quizzes
                            </div>

                            <div className={styles.switcherbox} id={s3view === 'three' ? "isActiveBox" : null} onClick={() => setS3view('three')}>
                                Brwose Community
                            </div>

                        </div>
                        <div>
                            {{
                                "one": <><img src={theme === "darkmode" ? add_quiz_dark : add_quiz_light} width="100%" /> <p className={styles.currentContent}>Play quizzes of your wish, get one from your friends.</p></>,
                                "two": <><img src={theme === "darkmode" ? add_quiz_dark : add_quiz_light} width="100%" /> <p className={styles.currentContent}>Make your own quizzes, that sounds good i know.</p></>,
                                "three": <><img src={web} width="100%" /> <p className={styles.currentContent}>Share quizzes to the community so they can play your quizzes.</p></>,
                            }[s3view]}
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.section4}>
                <div className={styles.line1} />
                <div className={styles.line2} />
                <div className={styles.line3} />
                <div className={styles.line4} />
                <div className={styles.hero}>
                    <h1 className={styles.title}>
                        What others say about us?
                    </h1>

                    <p className={styles.description}>
                        The best way of learning with our platform, are you read to play quizes and seek knowledge, while not forgetin to  conhtruibuyte by making new quizzes.
                    </p>


                    <div className={styles.slider}>
                        <div className={styles.slidercontainer}>
                            <div className={styles.reviewbody}>
                                <p className={styles.reviewp}>
                                    “Our presentations have to live up to our high standards for product design. Pitch allows us to create internal and external assets that look amazing, without spending hours on it.”
                                </p>
                            </div>
                            <div className={styles.reviewwho}>who reviewd</div>
                        </div>

                        <div className={styles.goright}>go right</div>
                        <div className={styles.goleft}>go left</div>

                    </div>

                </div>
            </section>

            <section className={styles.section5}>
                <div className={styles.line1} />
                <div className={styles.line2} />
                <div className={styles.line3} />
                <div className={styles.line4} />
                <div className={styles.hero}>
                    <h1 className={styles.cta_title}>
                        Get started with Swiftquiz
                    </h1>

                    <button className={styles.btn_primary}>Try Swiftquiz for Free</button>

                    <div className={styles.featureswrap}>
                        <p className={styles.cta_description}>
                            <svg style={{ marginRight: '.25em' }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM11.003 16L6.76 11.757L8.174 10.343L11.003 13.172L16.659 7.515L18.074 8.929L11.003 16Z" fill="var(--icon-border)" />
                            </svg>

                            Best quizzing tools
                        </p>
                        <p className={styles.cta_description}>
                            <svg style={{ marginRight: '.25em' }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM11.003 16L6.76 11.757L8.174 10.343L11.003 13.172L16.659 7.515L18.074 8.929L11.003 16Z" fill="var(--icon-border)" />
                            </svg>

                            Community hand made
                        </p>
                        <p className={styles.cta_description}>
                            <svg style={{ marginRight: '.25em' }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM11.003 16L6.76 11.757L8.174 10.343L11.003 13.172L16.659 7.515L18.074 8.929L11.003 16Z" fill="var(--icon-border)" />
                            </svg>

                            Free 4 ever
                        </p>
                    </div>

                    <img src={web} className={styles.web} />

                </div>
            </section>
        </>
    )
}
