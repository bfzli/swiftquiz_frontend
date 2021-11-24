import * as styles from './Welcome.module.scss'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'

import quiz1 from '../../../../assets/images/community/rubyonrails.webp'
import benjamin from '../../../../assets/images/profiles/benjamin.webp'

import { useSelector } from 'react-redux'
import { connect } from "react-redux";
import { selectQuizesOfUsers } from '../../../../reduxComponents/selectors/selectorsUserQuizzes'

function Welcome({ userQuizes }) {

    const all_quizzes = useSelector(state => state.quizes.quizes);

    return (
        <div className={styles.container}>

					<div className={styles.top_right} data-aos="fade-left">
						<h2 className={styles.top_right_title}>COMMUNITY</h2>
						<div className={styles.quizess}>
							<div className={styles.quiz}>
								<img className={styles.quiz_image} alt="Quiz Image" src={quiz1} />
								<h3 className={styles.quiz_title}>RUBY & RAILS</h3>
								<p className={styles.quiz_description}>
									Ruby on Rails is your favorite Ruby web framework to use.
								</p>
								<div className={styles.quizer_holder}>
									<img src={benjamin} alt="Quiz Topic" className={styles.quizer_profile} />
									<p className={styles.quizer_name}>Benjamin Fazli</p>
								</div>
								<button class={styles.quiz_play}>PLAY QUIZ</button>
							</div>

							<div className={styles.quiz}>
								<img className={styles.quiz_image} alt="Quiz Image" src={quiz2} />
								<h3 className={styles.quiz_title}>SVLETE</h3>
								<p className={styles.quiz_description}>
									Svelte is a radical new approach to building user interfaces.
								</p>
								<div className={styles.quizer_holder}>
									<img src={mendrit} alt="Quiz Topic" className={styles.quizer_profile} />
									<p className={styles.quizer_name}>Mendrit Arifi</p>
								</div>
								<button class={styles.quiz_play}>PLAY QUIZ</button>
							</div>

            <main className={styles.main}>
                <div className={styles.main_top}>
                    <div data-aos="fade-right" className={styles.top_left}>
                        <h2 className={styles.top_right_title}>
                            YOUR QUIZES
                        </h2>
                        <div className={styles.your_quizzes}>
                            {
                                userQuizes.map(item =>
                                    <div className={styles.your_quiz}>
                                        <div className={styles.your_quiz_wrapper}>
                                            <img src={item.thumbnail} alt="Blog" className={styles.your_quiz_thumb} />
                                            <div className={styles.your_quiz_info}>
                                                <p className={styles.quiz_title}>
                                                    {item.title}
                                                </p>
                                                <p className={styles.quiz_description}>
                                                    {item.description}
                                                </p>
                                                <p className={styles.quiz_description}>
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className={styles.edit}>
                                                <Link to={`/invite/${item.redeem_code}`}>
                                                    <svg className={styles.edit_icon} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M9.44781 14.0001C9.44781 16.489 11.4852 18.514 14.0007 18.514C16.5047 18.514 18.5421 16.489 18.5421 14.0001C18.5421 11.4999 16.5047 9.47483 14.0007 9.47483C11.4852 9.47483 9.44781 11.4999 9.44781 14.0001ZM20.6933 7.05382C22.6852 8.5924 24.3811 10.8437 25.599 13.6607C25.6901 13.8756 25.6901 14.1245 25.599 14.3282C23.1633 19.9621 18.8267 23.3334 14.0007 23.3334H13.9893C9.17464 23.3334 4.83805 19.9621 2.40228 14.3282C2.31122 14.1245 2.31122 13.8756 2.40228 13.6607C4.83805 8.02675 9.17464 4.66675 13.9893 4.66675H14.0007C16.4137 4.66675 18.7015 5.50392 20.6933 7.05382ZM14.002 16.8146C15.5614 16.8146 16.8362 15.5475 16.8362 13.9976C16.8362 12.4364 15.5614 11.1693 14.002 11.1693C13.8654 11.1693 13.7288 11.1806 13.6036 11.2032C13.5581 12.4477 12.5337 13.4432 11.2703 13.4432H11.2134C11.1793 13.6243 11.1565 13.8053 11.1565 13.9976C11.1565 15.5475 12.4313 16.8146 14.002 16.8146Z" fill="#5928E5" />
                                                    </svg>
                                                </Link>
                                                <svg className={styles.edit_icon} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.9391 23.3659L21.1899 10.1097C21.747 9.39482 21.9451 8.56835 21.7594 7.72682C21.5985 6.9618 21.128 6.2344 20.4223 5.68258L18.7015 4.31557C17.2035 3.12415 15.3465 3.24956 14.2818 4.61657L13.1304 6.11024C12.9819 6.29711 13.019 6.57302 13.2047 6.72351C13.2047 6.72351 16.114 9.0562 16.1759 9.10637C16.374 9.29449 16.5226 9.54532 16.5597 9.84631C16.6216 10.4358 16.2131 10.9876 15.6065 11.0628C15.3217 11.1004 15.0493 11.0127 14.8513 10.8496L11.7934 8.4166C11.6448 8.30498 11.422 8.32881 11.2982 8.4793L4.03099 17.8853C3.56055 18.4748 3.39961 19.2398 3.56055 19.9797L4.48906 24.0055C4.53858 24.2187 4.72428 24.3692 4.94713 24.3692L9.03258 24.319C9.77539 24.3065 10.4687 23.9679 10.9391 23.3659ZM16.6596 22.1121H23.3214C23.9714 22.1121 24.5 22.6476 24.5 23.3061C24.5 23.9657 23.9714 24.5 23.3214 24.5H16.6596C16.0097 24.5 15.481 23.9657 15.481 23.3061C15.481 22.6476 16.0097 22.1121 16.6596 22.1121Z" fill="#5928E5" />
                                                </svg>
                                                <svg className={styles.edit_icon} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M23.6683 6.11671C24.1222 6.11671 24.5 6.49354 24.5 6.97304V7.41637C24.5 7.8842 24.1222 8.27269 23.6683 8.27269H4.33283C3.87784 8.27269 3.5 7.8842 3.5 7.41637V6.97304C3.5 6.49354 3.87784 6.11671 4.33283 6.11671H7.73449C8.42549 6.11671 9.02685 5.62555 9.1823 4.93256L9.36044 4.1369C9.63729 3.05308 10.5484 2.33325 11.5911 2.33325H16.4088C17.4402 2.33325 18.3616 3.05308 18.6282 4.07973L18.8188 4.93139C18.9731 5.62555 19.5745 6.11671 20.2666 6.11671H23.6683ZM21.9401 22.323C22.2953 19.0132 22.9171 11.1499 22.9171 11.0706C22.9398 10.8302 22.8615 10.6027 22.706 10.4196C22.5392 10.2481 22.3282 10.1466 22.0956 10.1466H5.91328C5.67954 10.1466 5.45715 10.2481 5.30284 10.4196C5.14626 10.6027 5.0691 10.8302 5.08045 11.0706C5.08253 11.0851 5.10484 11.3621 5.14214 11.8252C5.30785 13.8823 5.76936 19.6118 6.06759 22.323C6.27863 24.3203 7.58915 25.5756 9.48741 25.6211C10.9522 25.6549 12.4613 25.6666 14.0044 25.6666C15.4579 25.6666 16.9341 25.6549 18.4443 25.6211C20.4084 25.5873 21.7177 24.3541 21.9401 22.323Z" fill="#5928E5" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>

                    <div className={styles.top_right} data-aos="fade-left">
                        <h2 className={styles.top_right_title}>
                            COMMUNITY
                        </h2>
                        <div className={styles.quizess}>
                            {
                                all_quizzes.map(item =>
                                    <div className={styles.quiz}>
                                        <img className={styles.quiz_image} alt="Quiz Image" src={quiz1} />
                                        <h3 className={styles.quiz_title}>
                                            {item.title}
                                        </h3>
                                        <p className={styles.quiz_description}>
                                            {item.title}
                                        </p>
                                        <div className={styles.quizer_holder}>
                                            <img src={benjamin} alt="Quiz Topic" className={styles.quizer_profile} />
                                            <p className={styles.quizer_name}>{item.created_by.name}</p>
                                        </div>
                                        <Link to={`/invite/${item.redeem_code}`} className={styles.quiz_play}>PLAY QUIZ</Link>
                                    </div>)
                            }
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

const mapStateToProps = (state) => ({
	userQuizes: selectQuizesOfUsers(state)
});

export default connect(mapStateToProps)(Welcome);
