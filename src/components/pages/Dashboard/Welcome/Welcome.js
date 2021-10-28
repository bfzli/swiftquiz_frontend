import * as styles from './Welcome.module.scss'

import quiz1 from '../../../../assets/images/community/rubyonrails.png'
import quiz2 from '../../../../assets/images/community/svlete.png'
import quiz3 from '../../../../assets/images/community/typescript.png'

import avatar from '../../../../assets/images/avatar.jpg'

export default function Welcome() {
    return (
        <div className={styles.container}>
            <div className={styles.page_info}>
                <h2 className={styles.welcome_text}>WELCOME BACK, BENJAMIN!</h2>
                <p className={styles.breadcrumb}>Dashboard / Home</p>
            </div>

            <main className={styles.main}>
                <div className={styles.main_top}>
                    <div className={styles.top_left}></div>
                    <div className={styles.top_right}>
                        <h2 className={styles.top_right_title}>
                            COMMUNITY
                        </h2>
                        <div className={styles.quizess}>
                            <div className={styles.quiz}>
                                <img className={styles.quiz_image} alt="Quiz Image" src={quiz1} />
                                <h3 className={styles.quiz_title}>
                                    RUBY & RAILS
                                </h3>
                                <p className={styles.quiz_description}>
                                    Ruby on Rails is open source software, so not only is it free to use, you can also help make it better.
                                </p>
                                <div className={styles.quizer_holder}>
                                    <img src={avatar} alt="Quiz Topic" className={styles.quizer_profile} />
                                    <p className={styles.quizer_name}>Benjamin Akhi</p>
                                </div>
                                <button class={styles.quiz_play}>PLAY QUIZ</button>
                            </div>

                            <div className={styles.quiz}>
                                <img className={styles.quiz_image} alt="Quiz Image" src={quiz2} />
                                <h3 className={styles.quiz_title}>
                                    SVLETE QUIZ
                                </h3>
                                <p className={styles.quiz_description}>
                                    Svelte is a radical new approach to building user interfaces. With different approach than other basic Frameworks.                                </p>
                                <div className={styles.quizer_holder}>
                                    <img src={avatar} alt="Quiz Topic" className={styles.quizer_profile} />
                                    <p className={styles.quizer_name}>Benjamin Akhi</p>
                                </div>
                                <button class={styles.quiz_play}>PLAY QUIZ</button>
                            </div>

                            <div className={styles.quiz}>
                                <img className={styles.quiz_image} alt="Quiz Image" src={quiz3} />
                                <h3 className={styles.quiz_title}>
                                    TYPESCRIPT
                                </h3>
                                <p className={styles.quiz_description}>
                                    A programming language developed and maintained by Microsoft. It is a strict syntactical superset of JS.
                                </p>
                                <div className={styles.quizer_holder}>
                                    <img src={avatar} alt="Quiz Topic" className={styles.quizer_profile} />
                                    <p className={styles.quizer_name}>Benjamin Akhi</p>
                                </div>
                                <button class={styles.quiz_play}>PLAY QUIZ</button>
                            </div>

                            <div className={styles.quiz}>
                                <img className={styles.quiz_image} alt="Quiz Image" src={quiz1} />
                                <h3 className={styles.quiz_title}>
                                    RUBY ON RAILS
                                </h3>
                                <p className={styles.quiz_description}>
                                    Ruby on Rails is open source software, so not only is it free to use, you can also help make it better.
                                </p>
                                <div className={styles.quizer_holder}>
                                    <img src={avatar} alt="Quiz Topic" className={styles.quizer_profile} />
                                    <p className={styles.quizer_name}>Benjamin Akhi</p>
                                </div>
                                <button class={styles.quiz_play}>PLAY QUIZ</button>
                            </div>

                            <div className={styles.quiz}>
                                <img className={styles.quiz_image} alt="Quiz Image" src={quiz1} />
                                <h3 className={styles.quiz_title}>
                                    RUBY ON RAILS
                                </h3>
                                <p className={styles.quiz_description}>
                                    Ruby on Rails is open source software, so not only is it free to use, you can also help make it better.
                                </p>
                                <div className={styles.quizer_holder}>
                                    <img src={avatar} alt="Quiz Topic" className={styles.quizer_profile} />
                                    <p className={styles.quizer_name}>Benjamin Akhi</p>
                                </div>
                                <button class={styles.quiz_play}>PLAY QUIZ</button>
                            </div>

                            <div className={styles.quiz}>
                                <img className={styles.quiz_image} alt="Quiz Image" src={quiz1} />
                                <h3 className={styles.quiz_title}>
                                    RUBY ON RAILS
                                </h3>
                                <p className={styles.quiz_description}>
                                    Ruby on Rails is open source software, so not only is it free to use, you can also help make it better.
                                </p>
                                <div className={styles.quizer_holder}>
                                    <img src={avatar} alt="Quiz Topic" className={styles.quizer_profile} />
                                    <p className={styles.quizer_name}>Benjamin Akhi</p>
                                </div>
                                <button class={styles.quiz_play}>PLAY QUIZ</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.main_bottom}>
                    <div className={styles.bottom_left}>
                        s
                    </div>
                    <div className={styles.bottom_right}>
                        s
                    </div>
                </div>
            </main>
        </div>
    )
}
