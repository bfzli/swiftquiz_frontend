import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import * as styles from './Checkout.module.scss'
import { useState } from 'react';
import Comploader from '../../../../components/shared/Loaders/Comploader'
import c2 from '../../../../assets/images/coins-medium.png'
import ReactDOM from 'react-dom'

export default function Checkout({ setCheckout, currentPackage }) {

    const stripe = useStripe();
    const elements = useElements();
    const [state, setState] = useState('none')

    const pay = async () => {
        setState('loading')
        try {
            const response = await fetch("http://localhost:5001/api/user/pay/coins", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId: '61b1bfe057e557000845fc78',
                    coins: currentPackage
                })
            }
            );
            const data = await response.json();
            const cardElement = elements.getElement(CardElement);
            const confirmPayment = await stripe.confirmCardPayment(
                data.clientSecret,
                { payment_method: { card: cardElement } }
            );
            console.log(confirmPayment);
            const { paymentIntent } = confirmPayment;
            if (paymentIntent.status === "succeeded") {
                setState('completed')
                window.location.reload()
            }
            else {
                setState('error');
            };

        } catch (err) {
            console.error(err);
            setState('error')
        }
    };

    let style = {

        base: {
            iconColor: 'var(--icon-color)',
            color: 'var(--text-color)',
            fontWeight: '500',
            fontFamily: 'Poppins',
            fontSize: '1.1em',
            fontSmoothing: 'antialiased',
            '::placeholder': {
                color: 'var(--text-color)',
            },
        },
        invalid: {
            iconColor: 'red',
            color: 'red',
        },
    };

    return ReactDOM.createPortal(
        <div className={styles.modal_container}>
            <div className={styles.modal_box}>
                <div className={styles.modal_header}>
                    <p className={styles.modal_title}>Checkout</p>

                    <svg onClick={() => state === 'loading' ? null : setCheckout(false)} className={styles.closemodal} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 10.586L16.95 5.63599L18.364 7.04999L13.414 12L18.364 16.95L16.95 18.364L12 13.414L7.04999 18.364L5.63599 16.95L10.586 12L5.63599 7.04999L7.04999 5.63599L12 10.586Z" fill="var(--icon-border)" />
                    </svg>
                </div>

                <div className={styles.modal_body}>
                    {
                        {
                            'loading': <Comploader />,
                            'completed': <div className={styles.coinsWrapper}>
                                <svg width="1" height="" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.4" d="M14.3402 -0.000198364H5.67024C2.28024 -0.000198364 0.000244141 2.3798 0.000244141 5.9198V14.0898C0.000244141 17.6198 2.28024 19.9998 5.67024 19.9998H14.3402C17.7302 19.9998 20.0002 17.6198 20.0002 14.0898V5.9198C20.0002 2.3798 17.7302 -0.000198364 14.3402 -0.000198364Z" fill="#130F26" />
                                    <path d="M8.81332 13.2479C8.58932 13.2479 8.36532 13.1629 8.19432 12.9919L5.82132 10.6189C5.47932 10.2769 5.47932 9.7229 5.82132 9.3819C6.16332 9.0399 6.71632 9.0389 7.05832 9.3809L8.81332 11.1359L12.9413 7.0079C13.2833 6.6659 13.8363 6.6659 14.1783 7.0079C14.5203 7.3499 14.5203 7.9039 14.1783 8.2459L9.43232 12.9919C9.26132 13.1629 9.03732 13.2479 8.81332 13.2479Z" fill="#130F26" />
                                </svg>
                                <h2>Payment Completed!</h2>
                                <h3>{currentPackage} coins where added to your account.</h3>
                            </div>,
                            'error': <div>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.4" d="M14.3399 -0.000198364H5.66988C2.27988 -0.000198364 -0.00012207 2.3798 -0.00012207 5.9198V14.0898C-0.00012207 17.6198 2.27988 19.9998 5.66988 19.9998H14.3399C17.7299 19.9998 19.9999 17.6198 19.9999 14.0898V5.9198C19.9999 2.3798 17.7299 -0.000198364 14.3399 -0.000198364Z" fill="#130F26" />
                                    <path d="M13.0156 11.7703L11.2366 9.9923L13.0146 8.2143C13.3566 7.8733 13.3566 7.3183 13.0146 6.9773C12.6726 6.6333 12.1196 6.6343 11.7776 6.9763L9.99858 8.7543L8.21958 6.9743C7.87758 6.6323 7.32358 6.6343 6.98158 6.9743C6.64058 7.3163 6.64058 7.8713 6.98158 8.2123L8.76158 9.9923L6.98558 11.7673C6.64358 12.1093 6.64358 12.6643 6.98558 13.0043C7.15658 13.1763 7.37958 13.2613 7.60358 13.2613C7.82858 13.2613 8.05158 13.1763 8.22258 13.0053L9.99858 11.2293L11.7786 13.0083C11.9496 13.1793 12.1726 13.2643 12.3966 13.2643C12.6206 13.2643 12.8446 13.1783 13.0156 13.0083C13.3576 12.6663 13.3576 12.1123 13.0156 11.7703Z" fill="#130F26" />
                                </svg>
                                <h2>Something went wrong!</h2>
                                <h3>Something went wrong, make sure you filled the card information or maybe there is a problem with your credit card.</h3>
                            </div>
                        }[state]
                    }
                    <div id={state !== 'none' ? 'none' : 'show'} className={styles.center}>
                        <img className={styles.quiz_image} alt="Quiz Image" width="200px" src={c2} />
                        <h3>You Are buying {currentPackage} coins.</h3>
                        <div className={styles.card}>
                            <CardElement options={{ hidePostalCode: true, style: style }} />
                            <button className={styles.button} onClick={() => pay()}>Purchase</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >, document.getElementById("portal")
    )
}
