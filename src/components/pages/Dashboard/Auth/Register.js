import * as styles from './Auth.module.scss'
import { Link } from 'react-router-dom'

export default function Reset({setIsLogin}) {
    return (
        <section className={styles.container}>
            <div className={styles.box}>
                <Link to="/">
                    <svg style={{ cursor: 'pointer', marginBottom: '.8em' }} width="3.5em" viewBox="0 0 83 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M57.5804 42.6399C59.2018 43.45 60.4752 44.5712 65.159 49.312C81.2774 65.6265 81.1902 65.5221 81.8807 69.3311C82.1495 70.8137 82.1243 71.5244 81.7442 73.1636C81.148 75.7343 80.2421 77.2632 78.2194 79.1116C75.6977 81.4164 74.2783 81.977 70.9141 81.9975C66.0926 82.0266 66.0626 82.0052 54.039 69.9679C48.4302 64.3526 43.5445 59.291 43.1822 58.7198C42.0869 56.9921 41.5362 54.914 41.5365 52.5094C41.5365 50.6464 41.6822 49.958 42.3887 48.482C43.6 45.951 45.7239 43.8305 48.3299 42.5497C50.4193 41.5227 50.4205 41.5227 53.1093 41.5969C55.2865 41.6568 55.8981 41.7995 57.5804 42.6399Z" fill="var(--text-color)" />
                        <path d="M45.9874 0.393832C49.1308 0.916997 51.6727 1.52741 53.406 2.17491C54.1405 2.4494 55.0085 2.75327 55.3349 2.8503C56.6685 3.24646 61.6604 6.02075 63.6225 7.45611C64.7765 8.30065 66.8356 10.0651 68.1977 11.377C76.695 19.5619 81.0086 29.2644 81 40.1731C80.997 43.705 80.3017 49.2425 79.6664 50.7901C78.996 52.4234 78.9655 52.3979 65.5466 39.0401C58.4611 31.9867 52.1817 25.8583 51.5923 25.4209C49.8549 24.1324 46.2812 22.5033 44.2069 22.0543C37.0375 20.5023 29.5467 23.522 24.8732 29.8481C24.2453 30.6982 23.7314 31.573 23.7314 31.792C23.7314 32.0113 23.6156 32.3173 23.4741 32.4725C22.1746 33.8963 21.4933 41.6034 22.3607 45.0694C23.1242 48.12 24.7142 50.9358 27.3825 53.9626C28.7203 55.4799 34.7137 61.6745 40.7011 67.7284C48.645 75.7599 51.5072 78.8321 51.2894 79.0944C50.3914 80.1763 41.9335 81.1179 37.0045 80.685C26.8223 79.7903 17.9059 75.4014 10.6549 67.715C5.4559 62.2039 1.7154 54.6324 0.410899 46.9792C-0.312866 42.7331 -0.048166 34.9542 0.950981 31.1178C2.94838 23.4478 6.46098 17.2953 11.9256 11.8945C18.0412 5.85011 24.7507 2.26007 32.7821 0.735682C34.0878 0.487602 35.4232 0.228245 35.7496 0.158806C37.1592 -0.140612 43.6742 0.00895092 45.9874 0.393832Z" fill="var(--text-color)" />
                    </svg>
                </Link>

                <p className={styles.form_title}>
                   Join SwiftQuiz!
                </p>

                <p className={styles.form_description}>
                    By opening your account you can play, share and even make your own quizzes so you can share with your community and have fun learning.
                </p>


                <input
                    className={styles.input}
                    type="text"
                    placeholder="Full Name"
                />

                <input
                    className={styles.input}
                    type="text"
                    placeholder="Username"
                />

                <input
                    className={styles.input}
                    type="text"
                    placeholder="Email"
                />

                <input
                    className={styles.input}
                    type="text"
                    placeholder="Password"
                />

                <button
                    className={styles.input}
                    type="text"
                    placeholder="Name" >Login </button>

                <p onClick={() => setIsLogin('login')} className={styles.noaccount}>
                    Already part of platform? Login Instead.
                </p>
            </div>
        </section>
    )
}
