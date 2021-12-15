import { useState } from 'react'
import * as styles from './Community.module.scss';
import coin from '../../../shared/Dashbar/components/coin.svg'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector, } from 'react-redux'
import { connect } from "react-redux";
import { searchAllQuizes } from '../../../../reduxComponents/selectors/selectorsUserQuizzes';
import { setTextFilter } from '../../../../reduxComponents/actions/Filters';
import { setCategoryFilter } from '../../../../reduxComponents/actions/Filters';
import { useTranslation } from 'react-i18next';
import { purchaseQuiz } from '../../../../reduxComponents/actions/Questions';

export function Community({ userQuizes }) {
    const dispatch = useDispatch();
    const [isModal, setIsModal] = useState(false);

    const handleOnChange = e => {
        const text = e.target.value;
        dispatch(setTextFilter(text));
    }

    const handlePurchase = (e) =>{
        if(isModal === false) {
            setIsModal(true)
            return;
        }

        else {
            setIsModal(false)
            dispatch(purchaseQuiz(e.target.id))
            return;
        }
    }

    const { t } = useTranslation()

    return (
        <div className={styles.container}>
            {isModal === true ? <button onClick={(e) => handlePurchase(e)}>hahah</button> : null }
            <div className={styles.page_info} data-aos="fade-down">
                <h2 className={styles.welcome_text}>{t("community.title")}</h2>
                <div className={styles.search}>
                    <input
                        className={styles.search_input}
                        type="text"
                        placeholder={t("community.search")}
                        onChange={handleOnChange}
                    />
                    <div className={styles.search_wrapper}>
                        <svg
                            className={styles.search_icon}
                            width="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.867 18 18 14.867 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18ZM19.485 18.071L22.314 20.899L20.899 22.314L18.071 19.485L19.485 18.071Z" />
                        </svg>
                    </div>
                    <select className={styles.category_filter} onChange={(e) => {
                        const get_value = e.target.value;
                        console.log(get_value)
                        dispatch(setCategoryFilter(get_value));
                    }}>
                        <option value="">{t("community.categories")}</option>
                        <option value="61a49f18da82d9000993e281">{t("community.religion")}</option>
                        <option value="61961bd788d1b5058807904c">{t("community.programming")}</option>
                        <option value="61961c6488d1b50588079058">{t("community.mathematics")}</option>
                        <option value="61961c1788d1b50588079052">{t("community.physics")}</option>
                        <option value="617bf1df3b7012bee6d4056d">{t("community.sport")}</option>
                        <option value="61961c1b88d1b50588079055">{t("community.art")}</option>
                        <option value="61961be088d1b5058807904f">{t("community.others")}</option>
                    </select>
                </div>
            </div>
            <main style={{ marginTop: '2.5em' }}>
                <div className={styles.top_right} data-aos="fade-left">
                    <div className={styles.quizess}>
                        {
                            userQuizes.map((item,i) => {
                                return <>
                                    <div className={styles.quiz}>
                                        <img className={styles.quiz_image} alt="Quiz Image" src={`https://swiftapi.vercel.app/${item.thumbnail}`} />

                                        <h3 className={styles.quiz_title}>
                                            {item.title}
                                        </h3>

                                        <p className={styles.quiz_description}>
                                            {item.description}
                                        </p>

                                        <Link to={`/dashboard/profile/${item.created_by.username}`} className={styles.quizer_holder}>
                                            <img src={`https://swiftapi.vercel.app/${item.created_by.profile}`} alt={item.name} className={styles.quizer_profile} />
                                            <p className={styles.quizer_name}>{item.created_by.name}</p>
                                        </Link>

                                        <button to={`/invite/${item.redeem_code}`} onClick={() => handlePurchase()} className={styles.quiz_play}>
                                            <p style={{ textAlign: 'center' }}>
                                                {t("community.play")} {item.purchaseCoins} {t("community.coins")}
                                            </p>
                                        </button>
                                    </div>
                                    
                                </>

                            }

                            )}
                    </div>
                </div>
            </main >
        </div >
    )
}

const mapStateToProps = (state) => ({
    userQuizes: searchAllQuizes(state)
});

export default connect(mapStateToProps)(Community);