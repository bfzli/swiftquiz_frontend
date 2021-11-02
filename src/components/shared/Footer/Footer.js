import { container, left, right, center, cta_name, links, cta_wrapper, cta_svg, logo, contact_title, link, smm, smm_icon, links_flex, top, bottom, description, copyright, newsletter_input, newsletter_title } from './Footer.module.scss'
import { button_fill } from '../Buttons/Buttons.module.scss'
import Links from './Links'
import { Link } from 'react-router-dom'

import Logo from "../../shared/Header/Logo";

export default function Footer() {
    return (
        <footer className={container} data-aos="fade-up">
            <div className={top}>
                <div className={left}>
                    <Logo className={logo} />
                    <p className={description}>
                        SwiftQuiz is your favorite platform on seeking knowledge by playing quizes of your favorite topic and also having the option for you to do share them with the community.
                    </p>
                    <div className={smm}>
                        <Link to="facebook.com/swiftquiz">
                            <svg className={smm_icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z" />
                            </svg>
                        </Link>

                        <Link to="facebook.com/swiftquiz">
                            <svg className={smm_icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.543 6.498C22 8.28 22 12 22 12C22 12 22 15.72 21.543 17.502C21.289 18.487 20.546 19.262 19.605 19.524C17.896 20 12 20 12 20C12 20 6.107 20 4.395 19.524C3.45 19.258 2.708 18.484 2.457 17.502C2 15.72 2 12 2 12C2 12 2 8.28 2.457 6.498C2.711 5.513 3.454 4.738 4.395 4.476C6.107 4 12 4 12 4C12 4 17.896 4 19.605 4.476C20.55 4.742 21.292 5.516 21.543 6.498ZM10 15.5L16 12L10 8.5V15.5Z" />
                            </svg>
                        </Link>

                        <Link to="facebook.com/swiftquiz">
                            <svg className={smm_icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z" />
                            </svg>
                        </Link>

                        <Link to="facebook.com/swiftquiz">
                            <svg className={smm_icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.1618 5.65599C21.3984 5.99368 20.5888 6.21546 19.7598 6.31399C20.6336 5.79142 21.2875 4.969 21.5998 3.99999C20.7798 4.48799 19.8808 4.82999 18.9438 5.01499C18.3144 4.34157 17.4802 3.89495 16.5708 3.74457C15.6614 3.59419 14.7277 3.74848 13.9151 4.18344C13.1024 4.6184 12.4562 5.30967 12.0769 6.14978C11.6976 6.98989 11.6066 7.93177 11.8178 8.82899C10.1549 8.74564 8.52814 8.31351 7.0431 7.56065C5.55805 6.80779 4.24794 5.75104 3.19781 4.45899C2.8261 5.09744 2.63076 5.82321 2.63181 6.56199C2.63181 8.01199 3.36981 9.29299 4.49181 10.043C3.82782 10.0221 3.17844 9.84277 2.59781 9.51999V9.57199C2.59801 10.5377 2.93218 11.4736 3.54366 12.221C4.15513 12.9685 5.00629 13.4815 5.95281 13.673C5.33642 13.84 4.69012 13.8646 4.06281 13.745C4.32968 14.5762 4.84982 15.3032 5.5504 15.8241C6.25099 16.345 7.09694 16.6338 7.96981 16.65C7.10229 17.3313 6.10899 17.835 5.04669 18.1322C3.98439 18.4293 2.87394 18.5142 1.77881 18.382C3.69051 19.6114 5.9159 20.2641 8.18881 20.262C15.8818 20.262 20.0888 13.889 20.0888 8.36199C20.0888 8.18199 20.0838 7.99999 20.0758 7.82199C20.8947 7.23016 21.6014 6.49701 22.1628 5.65699L22.1618 5.65599Z" />
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className={center}>
                    <h4 className={links}>
                        HELPFUL LINKS
                    </h4>
                    <div className={links_flex}>
                        {
                            Links.map(item =>
                                <Link className={link} key={item.id} to={item.link}>
                                    {item.name}
                                </Link>
                            )
                        }
                    </div>
                </div>

                <div className={right}>
                    <div>
                    <div style={{ marginBottom: '1.5em' }}>
                        <p className={newsletter_title}>Newsletter</p>
                        <div style={{display: 'flex'}}>
                            <input className={newsletter_input} placeholder="Email Address" />
                            <button className={button_fill}>Join</button>
                        </div>
                    </div>
                        <p className={contact_title}>Get in Touch</p>
                        <a href="mailto:support@swiftquiz.com" className={cta_wrapper}>
                            <svg className={cta_svg} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.945838 7.31504C0.423838 7.14104 0.418838 6.86004 0.955838 6.68104L20.0428 0.31904C20.5718 0.14304 20.8748 0.43904 20.7268 0.95704L15.2728 20.043C15.1228 20.572 14.8178 20.59 14.5938 20.088L10.9998 12L16.9998 4.00004L8.99984 10L0.945838 7.31504Z" />
                            </svg>
                            <p className={cta_name}>support@swiftquiz.com</p>
                        </a>

                        <Link to="/livechat" className={cta_wrapper}>
                            <svg className={cta_svg} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 7.00002C20.5304 7.00002 21.0391 7.21074 21.4142 7.58581C21.7893 7.96088 22 8.46959 22 9.00002V13C22 13.5305 21.7893 14.0392 21.4142 14.4142C21.0391 14.7893 20.5304 15 20 15H18.938C18.6942 16.9333 17.7533 18.7112 16.2917 20C14.8302 21.2888 12.9486 22 11 22V20C12.5913 20 14.1174 19.3679 15.2426 18.2427C16.3679 17.1174 17 15.5913 17 14V8.00002C17 6.40872 16.3679 4.8826 15.2426 3.75738C14.1174 2.63216 12.5913 2.00002 11 2.00002C9.4087 2.00002 7.88258 2.63216 6.75736 3.75738C5.63214 4.8826 5 6.40872 5 8.00002V15H2C1.46957 15 0.960859 14.7893 0.585786 14.4142C0.210714 14.0392 0 13.5305 0 13V9.00002C0 8.46959 0.210714 7.96088 0.585786 7.58581C0.960859 7.21074 1.46957 7.00002 2 7.00002H3.062C3.30603 5.06692 4.24708 3.2893 5.70857 2.0007C7.17007 0.712101 9.05155 0.00109863 11 0.00109863C12.9484 0.00109863 14.8299 0.712101 16.2914 2.0007C17.7529 3.2893 18.694 5.06692 18.938 7.00002H20ZM6.76 14.785L7.82 13.089C8.77308 13.6861 9.87537 14.0018 11 14C12.1246 14.0018 13.2269 13.6861 14.18 13.089L15.24 14.785C13.9693 15.5812 12.4995 16.0023 11 16C9.50046 16.0023 8.03074 15.5812 6.76 14.785Z" />
                            </svg>
                            <p className={cta_name}>Live Chat</p>
                        </Link>
                    </div>
                </div>
            </div>

            <div className={bottom}>
                <p className={copyright}> SwfitQuiz &nbsp;<span style={{ marginTop: '5px', fontSize: '1.5em' }}>&copy;</span>&nbsp; All rights Reserved </p>
            </div>
        </footer>
    )
}