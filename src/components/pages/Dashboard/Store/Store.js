import * as styles from './Store.module.scss'
import { useState } from 'react'
import c1 from '../../../../assets/images/coins-little.png'
import c2 from '../../../../assets/images/coins-medium.png'
import c3 from '../../../../assets/images/coins-bulk.png'
import c4 from '../../../../assets/images/coins-wow.png'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import Checkout from './Checkout'

export default function Store() {

    const [checkout, setCheckout] = useState(false)
    const [currentPackage, setCurrentPackage] = useState(null)
    const stripePromise = loadStripe("pk_test_51K4mxiLnXCgNNfwKkU4EdTX7oFQWJgCKoG7ZcxUpoJBGywgmIZUxyWIkeAb6BIHR2J0AktPVmCZdhazkuYIjKLOk00zsyeDaOx")

    return (
        <div className={styles.container}>
            <div className={styles.page_info} data-aos="fade-down">
                <h2 className={styles.welcome_text}>Store</h2>
                <div className={styles.search}>
                    <input
                        className={styles.search_input}
                        type="text"
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
                </div>

            </div>
            <main style={{ marginTop: '2.5em' }}>
                <div className={styles.top_right} data-aos="fade-left">
                    <div className={styles.quizess}>
                        <div className={styles.quiz}>
                            <img className={styles.quiz_image} alt="Quiz Image" src={c1} />

                            <h3 className={styles.quiz_title}>
                                1,000 Coins for $9.99
                            </h3>

                            <p className={styles.quiz_description}>
                            
                            </p>

                            <button style={{ textAlign: 'center' }} onClick={() => {setCurrentPackage(1000); setCheckout(true)}} className={styles.quiz_play}>Buy</button>
                        </div>
                        <div className={styles.quiz}>
                            <img className={styles.quiz_image} alt="Quiz Image" src={c2} />

                            <h3 className={styles.quiz_title}>
                                5,000 Coins for $29.99
                            </h3>

                            <p className={styles.quiz_description}>
                            
                            </p>

                            <button style={{ textAlign: 'center' }} onClick={() => {setCurrentPackage(5000); setCheckout(true)}} className={styles.quiz_play}>Buy</button>
                        </div>
                        <div className={styles.quiz}>
                            <img className={styles.quiz_image} alt="Quiz Image" src={c3} />

                            <h3 className={styles.quiz_title}>
                                10,000 Coins for $59.99
                            </h3>

                            <p className={styles.quiz_description}>
                            
                            </p>

                            <button style={{ textAlign: 'center' }} onClick={() => {setCurrentPackage(10000); setCheckout(true)}} className={styles.quiz_play}>Buy</button>
                        </div>
                        <div className={styles.quiz}>
                            <img className={styles.quiz_image} alt="Quiz Image" src={c4} />

                            <h3 className={styles.quiz_title}>
                                50,000 Coins for $99.99
                            </h3>

                            <p className={styles.quiz_description}>
                            
                            </p>

                            <button style={{ textAlign: 'center' }} onClick={() => {setCurrentPackage(50000); setCheckout(true)}} className={styles.quiz_play}>Buy</button>
                        </div>
                        {
                            checkout && <Elements stripe={stripePromise}><Checkout currentPackage={currentPackage} setCheckout={setCheckout} /></Elements>
                        }
                    </div>
                </div>
            </main >
        </div >
    )
}
