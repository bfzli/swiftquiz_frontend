import * as styles from './Dashbar.module.scss'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import avatar from '../../../assets/images/profiles/benjamin.png'
import CheckPath from '../../../utils/CheckPath'
import { useSelector } from 'react-redux'
// import { connect } from "react-redux";
// import { selectQuizesOfUsers } from '../../../../reduxComponents/selectors/selectorsUserQuizzes'
// import filterReducer from '../../../../reduxComponents/reducers/Filters';


export default function Dashbar() {

    const user = useSelector(state => state.auth.auth);
    const current_url = document.URL;

    return (
        <>
            <header className={styles.container}>
                <div className={styles.top}>
                    <Logo />
                </div>

                <div className={styles.center}>
                    <Link to="/dashboard/welcome">
                        <div id="tooltip" className={CheckPath(current_url, 'welcome') === true ? styles.icon_holder_active : styles.icon_holder} data-text="Home">
                            <svg className={CheckPath(current_url, 'welcome') === true ? styles.icon_active : styles.icon} viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.622 53.6872V45.7645C23.6219 43.7568 25.2545 42.1257 27.2766 42.1131H34.7016C36.7327 42.1131 38.3793 43.7479 38.3793 45.7645V45.7645V53.6642C38.3793 55.4056 39.7944 56.8207 41.5482 56.8333H46.6139C48.9797 56.8394 51.2508 55.9106 52.9258 54.2519C54.6009 52.5932 55.5423 50.3409 55.5423 47.992V25.4869C55.5423 23.5895 54.6952 21.7898 53.2292 20.5725L36.02 6.90861C33.0118 4.51865 28.7154 4.59585 25.7962 7.09232L8.9571 20.5725C7.4219 21.7539 6.50433 23.559 6.45898 25.4869V47.9691C6.45898 52.8647 10.4564 56.8333 15.3874 56.8333H20.3374C21.1818 56.8395 21.9938 56.5107 22.5931 55.92C23.1924 55.3293 23.5295 54.5256 23.5294 53.6872H23.622Z" />
                            </svg>
                        </div>
                    </Link>

                    <Link to="/dashboard/quizzes">
                        <div id="tooltip" className={CheckPath(current_url, 'quizzes') === true ? styles.icon_holder_active : styles.icon_holder} data-text="Quizzes">
                            <svg className={CheckPath(current_url, 'quizzes') === true ? styles.icon_active : styles.icon} viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.4" d="M43.6172 13.2134H36.0143C34.1202 13.2259 32.322 12.3834 31.1217 10.9211L28.618 7.45978C27.4379 5.98467 25.6397 5.13819 23.7485 5.16748H18.3736C8.72634 5.16748 5.16604 10.8294 5.16604 20.4571V30.8641C5.15404 32.0086 56.8214 32.0071 56.8247 30.8641V27.8383C56.8707 18.2106 53.4023 13.2134 43.6172 13.2134Z" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M53.8157 16.9041C54.6422 17.8705 55.2809 18.9821 55.6992 20.1821C56.5222 22.6484 56.9032 25.2401 56.8247 27.8383V41.4087C56.8214 42.5518 56.737 43.6931 56.5721 44.8242C56.258 46.8204 55.5557 48.7361 54.5048 50.4633C54.0218 51.2976 53.4352 52.0677 52.7591 52.7556C49.6983 55.5647 45.6338 57.0269 41.481 56.8129H20.4868C16.3273 57.0254 12.2563 55.5638 9.1857 52.7556C8.51764 52.0664 7.93888 51.2963 7.46298 50.4633C6.41829 48.7373 5.73096 46.8199 5.44165 44.8242C5.25769 43.695 5.16552 42.5528 5.16602 41.4087V27.8383C5.16557 26.705 5.22691 25.5725 5.34978 24.4458C5.37561 24.2481 5.41436 24.0536 5.45272 23.8612C5.51665 23.5404 5.57947 23.2251 5.57947 22.9099C5.81264 21.5502 6.23799 20.2305 6.8428 18.9901C8.63443 15.162 12.3096 13.2135 18.3276 13.2135H43.5942C46.9649 12.9528 50.3105 13.9676 52.9658 16.056C53.2716 16.3153 53.5559 16.5989 53.8157 16.9041ZM18.006 40.148H44.0077H44.0536C44.6241 40.1728 45.1809 39.9685 45.5995 39.5809C46.0181 39.1933 46.2638 38.6545 46.2817 38.0849C46.3139 37.5842 46.1491 37.0907 45.8223 36.7095C45.4463 36.1972 44.8506 35.8915 44.2144 35.8843H18.006C16.8263 35.8843 15.8699 36.8388 15.8699 38.0161C15.8699 39.1935 16.8263 40.148 18.006 40.148Z" />
                            </svg>
                        </div>
                    </Link>

                    <Link to="/dashboard/community">
                        <div id="tooltip" className={CheckPath(current_url, 'community') === true ? styles.icon_holder_active : styles.icon_holder} data-text="Community">
                            <svg className={CheckPath(current_url, 'community') === true ? styles.icon_active : styles.icon} viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="27.3807" cy="27.521" rx="22.2146" ry="22.3542" />
                                <path opacity="0.4" d="M53.4097 56.718C52.5467 56.69 51.7262 56.335 51.1124 55.7239L45.8516 49.5748C44.7238 48.5433 44.6316 46.7904 45.6449 45.6449V45.6449C46.1192 45.1649 46.7641 44.895 47.4368 44.895C48.1094 44.895 48.7543 45.1649 49.2286 45.6449L55.8448 50.9387C56.7978 51.9141 57.0919 53.3622 56.5956 54.6357C56.0993 55.9092 54.9054 56.77 53.5475 56.8335L53.4097 56.718Z" />
                            </svg>
                        </div>
                    </Link>

                    <Link to="">
                        <div id="tooltip" className={styles.icon_holder} data-text="Saved">
                            <svg className={styles.icon} viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.4" d="M30.9779 48.1058L14.2076 56.4824C12.9411 57.1699 11.3613 56.7109 10.653 55.4497C10.4461 55.0531 10.3367 54.6124 10.334 54.1645V35.4146C10.334 37.2735 11.3821 38.421 14.1392 39.7062L30.9779 48.1058Z" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M22.9801 5.16675H38.9301C45.9253 5.16675 51.599 7.92072 51.6673 14.9663V54.1644C51.6645 54.605 51.555 55.0383 51.3483 55.4267C51.0162 56.0601 50.4427 56.5304 49.7594 56.7294C49.0762 56.9285 48.342 56.8393 47.7254 56.4823L30.9779 48.1057L14.1392 39.7061C11.3821 38.4209 10.334 37.2734 10.334 35.4145V14.9663C10.334 7.92072 16.0076 5.16675 22.9801 5.16675ZM21.2484 24.8576H40.6846C41.8046 24.8576 42.7125 23.9431 42.7125 22.8151C42.7125 21.687 41.8046 20.7726 40.6846 20.7726H21.2484C20.1284 20.7726 19.2204 21.687 19.2204 22.8151C19.2204 23.9431 20.1284 24.8576 21.2484 24.8576Z" />
                            </svg>
                        </div>
                    </Link>

                    <Link to="">
                        <div id="tooltip" className={styles.icon_holder} data-text="History">
                            <svg className={styles.icon} viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M39.3766 12.2389C39.3766 17.9764 44.0346 22.6276 49.7806 22.6276C50.4133 22.6245 51.0444 22.5638 51.666 22.4462V43.0423C51.666 51.7072 46.5549 56.8335 37.8773 56.8335H18.9774C10.2772 56.8335 5.16602 51.7072 5.16602 43.0423V24.1701C5.16602 15.5052 10.2772 10.3335 18.9774 10.3335H39.5583C39.4362 10.9613 39.3753 11.5994 39.3766 12.2389ZM33.9701 38.483L41.3529 28.9562V28.9108C41.9849 28.0615 41.8236 26.864 40.9894 26.2115C40.5856 25.8998 40.0725 25.7649 39.5674 25.8376C39.0622 25.9103 38.6082 26.1843 38.3089 26.5972L32.0847 34.6042L24.9972 29.0242C24.5926 28.709 24.0778 28.5698 23.5692 28.6381C23.0605 28.7064 22.6009 28.9764 22.294 29.3872L14.6614 39.2315C14.3931 39.5659 14.2487 39.9826 14.2525 40.4111C14.2082 41.277 14.755 42.0636 15.583 42.325C16.411 42.5864 17.3112 42.2565 17.7735 41.5225L24.1567 33.2659L31.2442 38.8232C31.6473 39.1482 32.1654 39.2956 32.6795 39.2314C33.1936 39.1672 33.6595 38.8971 33.9701 38.483Z" />
                                <ellipse opacity="0.4" cx="50.3744" cy="11.6251" rx="6.45834" ry="6.45833" />
                            </svg>
                        </div>
                    </Link>
                </div>

                <div className={styles.bottom}>
                    <Link to="/dashboard/profile">
                        <div style={{marginBottom: '.3em'}} className={styles.icon_holder} id="tooltip" data-text={user.name}>
                            <img className={styles.user_pic} src={avatar} alt="Profile Image" />
                        </div>
                    </Link>
                </div>

            </header>
        </>

    )

}
