import * as styles from './Header.module.scss'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { logOutAction } from '../../../reduxComponents/actions/Auth';
import * as CONST from '../../../reduxComponents/constants/index';
import { useTranslation } from 'react-i18next';

export default function Header() {
    const theme = useSelector((state) => state.ui.theme);
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth.auth);
    const user = useSelector((state) => state.user);
    const [dropdown, setDropdown] = useState(false);
    const { t } = useTranslation()

    function handleTheme() {
        theme === 'lightmode' ? dispatch({ type: CONST.SET_DARK_MODE }) : dispatch({ type: CONST.SET_LIGHT_MODE });
    }

    const handleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div data-aos="fade-down">
            <header className={styles.header}>
                <div className={styles.left}>
                    <Logo />
                    <Link className={styles.link} to="/mission">
                        {t("header.mission")}
                    </Link>
                    <Link className={styles.link} to="/about">
                        {t("header.about")}
                    </Link>
                    <Link className={styles.link} to="/pricing">
                        {t("header.pricing")}
                    </Link>
                    <Link className={styles.link} to="/contact">
                        {t("header.contact")}
                    </Link>
                    <Link className={styles.link} to="/team">
                        {t("header.team")}
                    </Link>
                </div>

                {
                    auth.token !== undefined ?
                        <div className={styles.right}>
                            <div onClick={() => handleTheme()}>
                                {theme === 'Lightmode' ?
                                    <svg
                                        className={styles.modeicon}
                                        viewBox="0 0 24 24"
                                        fill="var(--icon-inside)"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12 18C10.4087 18 8.88258 17.3679 7.75736 16.2426C6.63214 15.1174 6 13.5913 6 12C6 10.4087 6.63214 8.88258 7.75736 7.75736C8.88258 6.63214 10.4087 6 12 6C13.5913 6 15.1174 6.63214 16.2426 7.75736C17.3679 8.88258 18 10.4087 18 12C18 13.5913 17.3679 15.1174 16.2426 16.2426C15.1174 17.3679 13.5913 18 12 18ZM12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.515 4.929L4.929 3.515L7.05 5.636L5.636 7.05L3.515 4.93V4.929ZM16.95 18.364L18.364 16.95L20.485 19.071L19.071 20.485L16.95 18.364ZM19.071 3.514L20.485 4.929L18.364 7.05L16.95 5.636L19.071 3.515V3.514ZM5.636 16.95L7.05 18.364L4.929 20.485L3.515 19.071L5.636 16.95ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"
                                        />
                                    </svg>
                                    :
                                    <svg
                                        className={styles.modeicon}
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10 6C9.99965 7.40007 10.3667 8.77571 11.0646 9.98947C11.7624 11.2032 12.7666 12.2126 13.9767 12.9167C15.1868 13.6208 16.5605 13.995 17.9606 14.0019C19.3606 14.0088 20.738 13.6482 21.955 12.956C21.474 18.03 17.2 22 12 22C6.477 22 2 17.523 2 12C2 6.8 5.97 2.526 11.044 2.045C10.3576 3.24994 9.99768 4.61325 10 6ZM4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20C13.4135 19.9999 14.8017 19.6256 16.0237 18.9151C17.2456 18.2047 18.2577 17.1834 18.957 15.955C18.641 15.985 18.321 16 18 16C12.477 16 8 11.523 8 6C8 5.679 8.015 5.36 8.045 5.043C6.81664 5.74232 5.79533 6.75439 5.08486 7.97633C4.37438 9.19827 4.00008 10.5865 4 12ZM18.164 2.291L19 2.5V3.5L18.164 3.709C17.8124 3.79693 17.4913 3.97875 17.235 4.23503C16.9788 4.4913 16.7969 4.8124 16.709 5.164L16.5 6H15.5L15.291 5.164C15.2031 4.8124 15.0212 4.4913 14.765 4.23503C14.5087 3.97875 14.1876 3.79693 13.836 3.709L13 3.5V2.5L13.836 2.291C14.1874 2.20291 14.5083 2.02102 14.7644 1.76475C15.0205 1.50849 15.2021 1.18748 15.29 0.836L15.5 0H16.5L16.709 0.836C16.7969 1.1876 16.9788 1.5087 17.235 1.76497C17.4913 2.02125 17.8124 2.20307 18.164 2.291ZM23.164 7.291L24 7.5V8.5L23.164 8.709C22.8124 8.79693 22.4913 8.97875 22.235 9.23503C21.9788 9.4913 21.7969 9.8124 21.709 10.164L21.5 11H20.5L20.291 10.164C20.2031 9.8124 20.0212 9.4913 19.765 9.23503C19.5087 8.97875 19.1876 8.79693 18.836 8.709L18 8.5V7.5L18.836 7.291C19.1876 7.20307 19.5087 7.02125 19.765 6.76497C20.0212 6.5087 20.2031 6.1876 20.291 5.836L20.5 5H21.5L21.709 5.836C21.7969 6.1876 21.9788 6.5087 22.235 6.76497C22.4913 7.02125 22.8124 7.20307 23.164 7.291Z"
                                        />
                                    </svg>
                                }
                            </div>
                            <section className={styles.acc_actions}>
                                <div onClick={() => setDropdown(!dropdown)} className={styles.action_item}>
                                    <p className={styles.action_item_acc_name}> {auth.name} </p>
                                    <img
                                        style={{ marginLeft: '.3em' }}
                                        className={styles.actions_bar_icon}
                                        src={`https://swiftapi.vercel.app/${user.avatar}`}
                                    />
                                </div>

                                {dropdown === true ? (
                                    <div className={styles.acc_actions_dropwdown}>
                                        <Link to="/dashboard/profile">
                                            <div className={styles.action_dropdown_item}>
                                                <p className={styles.action_dropdown_item_name}>Profile</p>
                                                <svg
                                                    className={styles.action_item_icon}
                                                    viewBox="0 0 24 24"
                                                    fill="var(--icon-inside)"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        clip-rule="evenodd"
                                                        d="M8.75 7C8.75 5.20507 10.2051 3.75 12 3.75C13.7949 3.75 15.25 5.20507 15.25 7C15.25 8.79493 13.7949 10.25 12 10.25C10.2051 10.25 8.75 8.79493 8.75 7ZM12 2.25C9.37665 2.25 7.25 4.37665 7.25 7C7.25 9.62335 9.37665 11.75 12 11.75C14.6234 11.75 16.75 9.62335 16.75 7C16.75 4.37665 14.6234 2.25 12 2.25ZM5.75 19C5.75 17.2051 7.20507 15.75 9 15.75H15C16.7949 15.75 18.25 17.2051 18.25 19C18.25 19.6904 17.6904 20.25 17 20.25H7C6.30964 20.25 5.75 19.6904 5.75 19ZM9 14.25C6.37665 14.25 4.25 16.3766 4.25 19C4.25 20.5188 5.48122 21.75 7 21.75H17C18.5188 21.75 19.75 20.5188 19.75 19C19.75 16.3766 17.6234 14.25 15 14.25H9Z"
                                                        fill="var(--icon-border)"
                                                    />
                                                </svg>
                                            </div>
                                        </Link>
                                        <div onClick={() => dispatch(logOutAction())} className={styles.action_dropdown_item}>
                                            <p className={styles.action_dropdown_item_name}> Logout </p>
                                            <svg
                                                className={styles.action_item_icon}
                                                viewBox="0 0 24 24"
                                                fill="var(--icon-inside)"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M13.5302 7.46975C13.2374 7.17686 12.7625 7.17686 12.4696 7.46975C12.1767 7.76264 12.1767 8.23752 12.4696 8.53041L15.1893 11.2501L2.99991 11.2501C2.5857 11.2501 2.24991 11.5859 2.24991 12.0001C2.24991 12.4143 2.5857 12.7501 2.99991 12.7501L15.1893 12.7501L12.4696 15.4698C12.1767 15.7626 12.1767 16.2375 12.4696 16.5304C12.7625 16.8233 13.2374 16.8233 13.5302 16.5304L17.5302 12.5304C17.8231 12.2375 17.8231 11.7626 17.5302 11.4698L13.5302 7.46975ZM16.2 2.75C17.0525 2.75 17.6467 2.75058 18.1093 2.78838C18.5632 2.82547 18.824 2.8946 19.0215 2.99523C19.4448 3.21095 19.789 3.55516 20.0048 3.97852C20.1054 4.17604 20.1745 4.4368 20.2116 4.89068C20.2494 5.35331 20.25 5.94755 20.25 6.8L20.25 17.2C20.25 18.0525 20.2494 18.6467 20.2116 19.1093C20.1745 19.5632 20.1054 19.824 20.0048 20.0215C19.789 20.4448 19.4448 20.789 19.0215 21.0048C18.824 21.1054 18.5632 21.1745 18.1093 21.2116C17.6467 21.2494 17.0525 21.25 16.2 21.25L11.8 21.25C10.9475 21.25 10.3533 21.2494 9.89068 21.2116C9.43681 21.1745 9.17604 21.1054 8.97852 21.0048C8.55516 20.789 8.21095 20.4448 7.99524 20.0215C7.8946 19.824 7.82547 19.5632 7.78838 19.1093C7.75058 18.6467 7.75 18.0525 7.75 17.2L7.75 16C7.75 15.5858 7.41421 15.25 7 15.25C6.58579 15.25 6.25 15.5858 6.25 16L6.25 17.2L6.25 17.2321L6.25 17.2321C6.24999 18.045 6.24999 18.7006 6.29336 19.2315C6.33803 19.7781 6.43239 20.2582 6.65873 20.7025C7.01825 21.4081 7.59193 21.9817 8.29754 22.3413C8.74176 22.5676 9.2219 22.662 9.76853 22.7066C10.2994 22.75 10.955 22.75 11.7679 22.75L11.8 22.75L16.2 22.75L16.2321 22.75C17.045 22.75 17.7006 22.75 18.2315 22.7066C18.7781 22.662 19.2582 22.5676 19.7025 22.3413C20.4081 21.9817 20.9817 21.4081 21.3413 20.7025C21.5676 20.2582 21.662 19.7781 21.7066 19.2315C21.75 18.7006 21.75 18.0449 21.75 17.2321L21.75 17.2L21.75 6.8L21.75 6.76788C21.75 5.95505 21.75 5.29944 21.7066 4.76853C21.662 4.22189 21.5676 3.74175 21.3413 3.29754C20.9817 2.59193 20.4081 2.01825 19.7025 1.65872C19.2582 1.43239 18.7781 1.33803 18.2315 1.29336C17.7006 1.24999 17.0449 1.24999 16.2321 1.25L16.2 1.25L11.8 1.25L11.7679 1.25C10.9551 1.24999 10.2994 1.24999 9.76853 1.29336C9.2219 1.33803 8.74175 1.43239 8.29754 1.65873C7.59193 2.01825 7.01825 2.59193 6.65873 3.29754C6.43239 3.74175 6.33803 4.2219 6.29336 4.76853C6.24999 5.29944 6.24999 5.95506 6.25 6.7679L6.25 6.8L6.25 8C6.25 8.41421 6.58579 8.75 7 8.75C7.41421 8.75 7.75 8.41421 7.75 8L7.75 6.8C7.75 5.94755 7.75058 5.35331 7.78838 4.89068C7.82546 4.43681 7.8946 4.17604 7.99524 3.97852C8.21095 3.55516 8.55516 3.21095 8.97852 2.99524C9.17604 2.8946 9.4368 2.82547 9.89068 2.78838C10.3533 2.75058 10.9475 2.75 11.8 2.75L16.2 2.75Z"
                                                    fill="var(--icon-border)"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                ) : null}
                            </section>

                        </div>

                        :

                        <div className={styles.right}>
                            <Link to="/auth">
                                <button className={styles.login_btn} styles={{ marginRight: '16px' }}>{t("header.logincta")}</button>
                            </Link>

                            <Link to="/auth">
                                <button className={styles.get_started}>{t("header.registercta")}</button>
                            </Link>
                        </div>
                }

            </header >




            <header className={styles.mobile}>
                <div className={styles.left}>
                    <Logo />
                </div>

                <div className={styles.right}>
                    {
                        isOpen === false ?
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <button className={styles.button_fill}>GET STARTED</button>

                                <svg onClick={handleMenu} className={styles.menu_icon} viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 0.5H0.5V1V3V3.5H1H19H19.5V3V1V0.5H19H1ZM7 7.5H6.5V8V10V10.5H7H19H19.5V10V8V7.5H19H7ZM1 14.5H0.5V15V17V17.5H1H19H19.5V17V15V14.5H19H1Z" />
                                </svg>

                            </div>
                            :
                            <div className={styles.screen}>
                                <svg className={styles.close_icon} onClick={handleMenu} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.99999 5.58599L11.95 0.635986L13.364 2.04999L8.41399 6.99999L13.364 11.95L11.95 13.364L6.99999 8.41399L2.04999 13.364L0.635986 11.95L5.58599 6.99999L0.635986 2.04999L2.04999 0.635986L6.99999 5.58599Z" />
                                </svg>

                                <Link className={styles.link} to="/mission">
                                    {t("header.mission")}
                                </Link>
                                <Link className={styles.link} to="/about">
                                    {t("header.about")}
                                </Link>
                                <Link className={styles.link} to="/pricing">
                                    {t("header.pricing")}
                                </Link>
                                <Link className={styles.link} to="/contact">
                                    {t("header.contact")}
                                </Link>
                                <Link className={styles.link} to="/team">
                                    {t("header.team")}
                                </Link>
                            </div>
                    }
                </div>
            </header>

        </div >
    )
}
