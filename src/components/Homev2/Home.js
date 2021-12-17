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

export default function Homev2() {
    const [s3view, setS3view] = useState('one')

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
                        <img className={styles.brand} alt="" src={f1} />
                        <img className={styles.brand} alt="" src={f2} />
                        <img className={styles.brand} alt="" src={f3} />
                        <img className={styles.brand} alt="" src={f4} />
                        <img className={styles.brand} alt="" src={f5} />
                        <img className={styles.brand} alt="" src={f6} />
                        <img className={styles.brand} alt="" src={f7} />
                        <img className={styles.brand} alt="" src={f9} />
                        <img className={styles.brand} alt="" src={f10} />
                        <img className={styles.brand} alt="" src={f12} />
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
                                "one": <><img src={web} width="100%" /> <p className={styles.currentContent}>Play quizzes of your wish, get one from your friends.</p></>,
                                "two": <><img src={web} width="100%" /> <p className={styles.currentContent}>Make your own quizzes, that sounds good i know.</p></>,
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
                        <div className={styles.slidercontainer}></div>

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

                    <div style={{ display: 'flex' }}>
                        <p className={styles.cta_description}>
                            Best quizzing tools
                        </p>
                        <p className={styles.cta_description}>
                            Community hand made
                        </p>
                        <p className={styles.cta_description}>
                            Free 4 ever
                        </p>
                    </div>

                    <img src={web} className={styles.web} />

                </div>
            </section>
        </>
    )
}
