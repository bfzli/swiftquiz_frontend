import * as styles from './Footer.module.scss'
import { Link } from 'react-router-dom'
import * as CONST from '../../../reduxComponents/constants/index';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Footer() {
    const [lang, setLang] = useState(localStorage.getItem('i18nextLng') || 'en')
    const theme = useSelector((state) => state.ui.theme);
    const dispatch = useDispatch();
    const { t, i18n } = useTranslation()
    const [isModal, setIsModal] = useState(false)

    function handleTheme() {
        theme === 'lightmode'
            ? dispatch({ type: CONST.SET_DARK_MODE })
            : dispatch({ type: CONST.SET_LIGHT_MODE });
    }

    const changeLang = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem('i18nextLng', lang)
    }

    // useEffect(() => {
    // 	setTimeout(() => {
    // 		setLoading(false)
    // 	}, 1234)
    // }, [])

    return (
        <footer className={styles.footer}>
            {
                isModal === true ?
                    <div className={styles.modal_container}>
                        <div className={styles.modal_box}>
                            <div className={styles.modal_header}>
                                <p className={styles.modal_title}>{t("dashbar.settings")}</p>

                                <svg onClick={() => setIsModal(false)} className={styles.closemodal} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 10.586L16.95 5.63599L18.364 7.04999L13.414 12L18.364 16.95L16.95 18.364L12 13.414L7.04999 18.364L5.63599 16.95L10.586 12L5.63599 7.04999L7.04999 5.63599L12 10.586Z" fill="var(--icon-border)" />
                                </svg>
                            </div>

                            <div className={styles.modal_body}>
                                <label className={styles._form_label_name} htmFor="thememode">{t("dashbar.theme")}</label>
                                <select className={styles._form_input} defaultValue={theme === "lightmode" ? "lightmode" : "darkmode"} onChange={(e) => { const selected = e.target.value; selected === 'darkmode' ? dispatch({ type: CONST.SET_DARK_MODE }) : dispatch({ type: CONST.SET_LIGHT_MODE }) }} id="thememode" placeholder="Category">
                                    <option value="lightmode">{t("dashbar.lightmode")}</option>
                                    <option value="darkmode">{t("dashbar.darkmode")}</option>
                                </select>
                            </div>

                            <div style={{ marginTop: '-1em' }} className={styles.modal_body}>
                                <label className={styles._form_label_name} htmFor="languagechoser">{t("dashbar.language")}</label>
                                <select value={localStorage.getItem('i18nextLng')} onChange={(e) => {
                                    setLang(e.target.value)
                                    changeLang(e.target.value)
                                }} className={styles._form_input} value={lang} id="languagechoser" placeholder="Language">
                                    <option value="sq">{t("dashbar.sq")}</option>
                                    <option value="ar">{t("dashbar.ar")}</option>
                                    <option value="en">{t("dashbar.en")}</option>
                                    <option value="de">{t("dashbar.de")}</option>
                                    <option value="fr">{t("dashbar.fr")}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    : null
            }
            <div className={styles.line1} />
            <div className={styles.line2} />
            <div className={styles.line3} />
            <div className={styles.line4} />
            <div className={styles.foostart}>
                <div className={styles.fooone}>
                    <Link to="/" style={{ display: 'flex' }}>
                        <svg className={styles.logo} viewBox="0 0 156 155" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M108.841 80.5999C111.906 82.1312 114.313 84.2504 123.166 93.2117C153.634 124.05 153.469 123.853 154.775 131.053C155.283 133.855 155.235 135.199 154.516 138.297C153.39 143.156 151.677 146.046 147.854 149.54C143.087 153.897 140.404 154.957 134.045 154.995C124.931 155.05 124.874 155.01 102.147 132.256C91.5449 121.642 82.3098 112.074 81.625 110.995C79.5546 107.729 78.5135 103.801 78.5141 99.2556C78.5141 95.7341 78.7895 94.4328 80.125 91.6428C82.4147 86.8587 86.4293 82.8503 91.3553 80.4293C95.3048 78.488 95.307 78.488 100.39 78.6282C104.505 78.7415 105.661 79.0113 108.841 80.5999Z" />
                            <path d="M86.9274 0.744438C92.8692 1.73335 97.6741 2.88717 100.95 4.1111C102.339 4.62996 103.979 5.20435 104.596 5.38777C107.117 6.1366 116.553 11.3807 120.262 14.0939C122.443 15.6903 126.336 19.0255 128.91 21.5054C144.972 36.9768 153.126 55.3168 153.11 75.9369C153.104 82.613 151.79 93.0804 150.589 96.0057C149.322 99.093 149.264 99.0447 123.899 73.7953C110.506 60.4627 98.6361 48.8785 97.5221 48.0517C94.2379 45.6161 87.4827 42.5366 83.5618 41.688C70.0099 38.7543 55.8505 44.4623 47.0165 56.4201C45.8296 58.0271 44.8581 59.6807 44.8581 60.0947C44.8581 60.5092 44.6393 61.0875 44.3717 61.3809C41.9154 64.0722 40.6276 78.6406 42.2672 85.1921C43.7104 90.9584 46.7158 96.2811 51.7597 102.002C54.2883 104.87 65.6173 116.58 76.9351 128.023C91.951 143.205 97.3611 149.012 96.9494 149.508C95.252 151.553 79.2646 153.333 69.9476 152.514C50.7006 150.823 33.8466 142.527 20.1404 127.998C10.313 117.58 3.24252 103.268 0.7767 88.8022C-0.591394 80.776 -0.0910456 66.0719 1.79759 58.8203C5.57317 44.3221 12.2128 32.6924 22.5422 22.4836C34.1023 11.0581 46.7848 4.27209 61.9662 1.39062C64.4343 0.921686 66.9585 0.431438 67.5755 0.300182C70.2399 -0.26579 82.555 0.0169195 86.9274 0.744438Z" />
                        </svg>
                    </Link>
                    <p className={styles.description}>
                        Our platform makes possible learning in a way that is more enjoyable and fun, play quizzes now.
                    </p>
                    <div className={styles.icons}>
                        <svg className={styles.icon} viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.543 2.498C20 4.28 20 8 20 8C20 8 20 11.72 19.543 13.502C19.289 14.487 18.546 15.262 17.605 15.524C15.896 16 10 16 10 16C10 16 4.107 16 2.395 15.524C1.45 15.258 0.708 14.484 0.457 13.502C2.98023e-08 11.72 0 8 0 8C0 8 2.98023e-08 4.28 0.457 2.498C0.711 1.513 1.454 0.738 2.395 0.476C4.107 -1.78814e-07 10 0 10 0C10 0 15.896 -1.78814e-07 17.605 0.476C18.55 0.742 19.292 1.516 19.543 2.498ZM8 11.5L14 8L8 4.5V11.5Z" />
                        </svg>

                        <svg className={styles.icon} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0C4.477 0 0 4.477 0 10C0 14.991 3.657 19.128 8.438 19.879V12.89H5.898V10H8.438V7.797C8.438 5.291 9.93 3.907 12.215 3.907C13.309 3.907 14.453 4.102 14.453 4.102V6.562H13.193C11.95 6.562 11.563 7.333 11.563 8.124V10H14.336L13.893 12.89H11.563V19.879C16.343 19.129 20 14.99 20 10C20 4.477 15.523 0 10 0Z" />
                        </svg>

                        <svg className={styles.icon} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0C12.717 0 13.056 0.00999994 14.122 0.0599999C15.187 0.11 15.912 0.277 16.55 0.525C17.21 0.779 17.766 1.123 18.322 1.678C18.8305 2.1779 19.224 2.78259 19.475 3.45C19.722 4.087 19.89 4.813 19.94 5.878C19.987 6.944 20 7.283 20 10C20 12.717 19.99 13.056 19.94 14.122C19.89 15.187 19.722 15.912 19.475 16.55C19.2247 17.2178 18.8311 17.8226 18.322 18.322C17.822 18.8303 17.2173 19.2238 16.55 19.475C15.913 19.722 15.187 19.89 14.122 19.94C13.056 19.987 12.717 20 10 20C7.283 20 6.944 19.99 5.878 19.94C4.813 19.89 4.088 19.722 3.45 19.475C2.78233 19.2245 2.17753 18.8309 1.678 18.322C1.16941 17.8222 0.775931 17.2175 0.525 16.55C0.277 15.913 0.11 15.187 0.0599999 14.122C0.0129999 13.056 0 12.717 0 10C0 7.283 0.00999994 6.944 0.0599999 5.878C0.11 4.812 0.277 4.088 0.525 3.45C0.775236 2.78218 1.1688 2.17732 1.678 1.678C2.17767 1.16923 2.78243 0.775729 3.45 0.525C4.088 0.277 4.812 0.11 5.878 0.0599999C6.944 0.0129999 7.283 0 10 0ZM10 5C8.67392 5 7.40215 5.52678 6.46447 6.46447C5.52678 7.40215 5 8.67392 5 10C5 11.3261 5.52678 12.5979 6.46447 13.5355C7.40215 14.4732 8.67392 15 10 15C11.3261 15 12.5979 14.4732 13.5355 13.5355C14.4732 12.5979 15 11.3261 15 10C15 8.67392 14.4732 7.40215 13.5355 6.46447C12.5979 5.52678 11.3261 5 10 5ZM16.5 4.75C16.5 4.41848 16.3683 4.10054 16.1339 3.86612C15.8995 3.6317 15.5815 3.5 15.25 3.5C14.9185 3.5 14.6005 3.6317 14.3661 3.86612C14.1317 4.10054 14 4.41848 14 4.75C14 5.08152 14.1317 5.39946 14.3661 5.63388C14.6005 5.8683 14.9185 6 15.25 6C15.5815 6 15.8995 5.8683 16.1339 5.63388C16.3683 5.39946 16.5 5.08152 16.5 4.75ZM10 7C10.7956 7 11.5587 7.31607 12.1213 7.87868C12.6839 8.44129 13 9.20435 13 10C13 10.7956 12.6839 11.5587 12.1213 12.1213C11.5587 12.6839 10.7956 13 10 13C9.20435 13 8.44129 12.6839 7.87868 12.1213C7.31607 11.5587 7 10.7956 7 10C7 9.20435 7.31607 8.44129 7.87868 7.87868C8.44129 7.31607 9.20435 7 10 7Z" />
                        </svg>

                        <svg className={styles.icon} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 0V11.74L13.304 16.435H9.391L6.954 18.783H3.913V16.435H0V3.13L1.227 0H18ZM16.435 1.565H3.13V13.305H6.26V15.652L8.609 13.304H13.304L16.434 10.174V1.565H16.435ZM13.305 4.695V9.391H11.739V4.696H13.304L13.305 4.695ZM9.391 4.695V9.391H7.826V4.696H9.391V4.695Z" />
                        </svg>
                    </div>
                </div>


                <div className={styles.foothree}>
                    <h2 className={styles.linkthree} style={{ fontFamily: 'Markpromedium', fontSize: '1.3em', textDecoration: 'underline', cursor: 'help' }}>Links</h2>
                    <a className={styles.linkthree}>Privacy Policy</a>
                    <a className={styles.linkthree}>Terms of Service</a>
                    <a className={styles.linkthree}>Contact</a>
                    <a className={styles.linkthree}>Our Team</a>
                    <a className={styles.linkthree}>Community</a>
                </div>

                <div className={styles.foothree}>
                    <h2 className={styles.linkthree} style={{ fontFamily: 'Markpromedium', fontSize: '1.3em', textDecoration: 'underline', cursor: 'help' }}>Links</h2>
                    <a className={styles.linkthree}>Privacy Policy</a>
                    <a className={styles.linkthree}>Terms of Service</a>
                    <a className={styles.linkthree}>Contact</a>
                    <a className={styles.linkthree}>Our Team</a>
                    <a className={styles.linkthree}>Community</a>
                </div>
            </div>

            <div className={styles.fooend}>
                <div>
                    <p className={styles.logo_name}>Swiftquiz &copy; All rights reserved. Made with by <a className={styles.swfit} href="">Swift Team</a></p>
                </div>
                <div onClick={() => setIsModal(!isModal)} style={{ display: 'flex', cursor: 'pointer' }}>
                    <svg width="1.25em" style={{marginRight: '.5em'}} viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.52954 3.20991C4.44701 2.80086 4.53718 2.35651 4.86658 2.10032C5.58638 1.54051 6.37947 1.08187 7.22368 0.737217C7.61066 0.579229 8.04141 0.723465 8.35483 1.00003C8.62874 1.24173 8.93536 1.44543 9.26657 1.60468C9.80742 1.86472 10.3999 1.9995 11 1.99901C11.6002 1.9995 12.1927 1.86472 12.7335 1.60468C13.0647 1.44543 13.3714 1.24173 13.6453 1.00002C13.9587 0.723465 14.3894 0.579229 14.7764 0.737216C15.6206 1.08187 16.4137 1.54051 17.1335 2.10032C17.4629 2.35651 17.5531 2.80085 17.4705 3.2099C17.3982 3.56801 17.3752 3.93543 17.403 4.3019C17.4484 4.89985 17.6278 5.47991 17.928 5.99901C18.2276 6.5191 18.6406 6.96496 19.1363 7.30343C19.4398 7.51065 19.7694 7.67435 20.1157 7.79075C20.5121 7.924 20.8524 8.22518 20.909 8.6395C21.0323 9.54217 21.0323 10.4575 20.9088 11.3601C20.8522 11.7736 20.513 12.0746 20.1174 12.2076C19.2257 12.5073 18.4361 13.1201 17.928 13.999C17.6277 14.5182 17.4481 15.0985 17.4028 15.6966C17.375 16.0632 17.398 16.4307 17.4703 16.7889C17.553 17.198 17.4628 17.6426 17.1332 17.8988C16.4133 18.4583 15.6203 18.9167 14.7761 19.2611C14.3893 19.4189 13.9587 19.2748 13.6454 18.9984C13.3714 18.7567 13.0647 18.5531 12.7334 18.3939C12.1925 18.134 11.6001 17.9994 11 18C10.3999 17.9995 9.80742 18.1343 9.26657 18.3943C8.93532 18.5536 8.62866 18.7573 8.35472 18.9991C8.04137 19.2756 7.61071 19.4199 7.22376 19.262C6.37969 18.9176 5.58669 18.4592 4.86692 17.8998C4.53734 17.6436 4.44714 17.199 4.52977 16.7899C4.60209 16.4317 4.62513 16.0642 4.59733 15.6976C4.55197 15.0995 4.37243 14.5192 4.07205 14C3.77234 13.4801 3.3593 13.0344 2.86363 12.6961C2.56023 12.4891 2.23065 12.3255 1.88452 12.2092C1.48809 12.076 1.14767 11.7748 1.09104 11.3604C0.967696 10.458 0.967702 9.54291 1.09105 8.64046C1.14768 8.22615 1.48802 7.925 1.88439 7.79176C2.23063 7.67536 2.56031 7.51166 2.86379 7.30443C3.35946 6.96596 3.77245 6.5201 4.07205 6.00001C4.37228 5.48091 4.55173 4.90085 4.59709 4.3029C4.6249 3.93632 4.60187 3.56842 4.52954 3.20991ZM12.5 12.597C12.844 12.4015 13.1458 12.1398 13.3883 11.8271C13.6307 11.5144 13.8088 11.1569 13.9125 10.7751C14.0161 10.3933 14.0433 9.99472 13.9923 9.60238C13.9413 9.21004 13.8132 8.83166 13.6153 8.48903C13.4175 8.14639 13.1539 7.84628 12.8396 7.60595C12.5253 7.36563 12.1666 7.18984 11.7841 7.08871C11.4016 6.98759 11.0029 6.96312 10.6109 7.01672C10.2189 7.07031 9.84136 7.20092 9.50005 7.40101C8.81663 7.80166 8.31942 8.45637 8.11694 9.22225C7.91445 9.98814 8.02312 10.803 8.41923 11.4891C8.81533 12.1752 9.46673 12.6767 10.2313 12.8843C10.9958 13.0918 11.8114 12.9886 12.5 12.597Z" fill="var(--icon-border)" />
                    </svg>
                    <p>Website Settings</p>
                </div>
            </div>
        </footer>
    )
}
