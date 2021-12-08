import * as styles from './Contact.module.scss'
import { Link } from 'react-router-dom'

export default function Contact() {
    return (
        <div className={styles.container}>
            <div className={styles.page_info} data-aos="fade-down">
				<h2 className={styles.welcome_text}>Support Center</h2>

				<div className={styles.search}>
					<input className={styles.search_input} type="text" placeholder='Search your tickets...'/>
					<div className={styles.search_wrapper}>
						<svg className={styles.search_icon} width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.867 18 18 14.867 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18ZM19.485 18.071L22.314 20.899L20.899 22.314L18.071 19.485L19.485 18.071Z" />
						</svg>
					</div>
					<Link to="/dashboard/quizzes/add-quiz" className={styles.add_btn}>
						<svg className={styles.add_btn_icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clipRule="evenodd" d="M19.8408 3.90339C19.364 3.47003 18.636 3.47003 18.1592 3.90339C18.1405 3.9204 18.1161 3.9445 18.0303 4.03027L17.7233 4.33728C17.6991 5.41346 18.5865 6.30088 19.6627 6.27662L19.9697 5.96961C20.0554 5.88384 20.0795 5.85943 20.0965 5.84073C20.5299 5.36397 20.5299 4.63592 20.0965 4.15916C20.0795 4.14045 20.0554 4.11604 19.9697 4.03027C19.8839 3.94451 19.8595 3.9204 19.8408 3.90339ZM18.3917 7.54755C17.5064 7.2019 16.798 6.49357 16.4524 5.60821L13.7838 8.27679C13.3006 8.76001 13.1189 8.94489 12.9729 9.14793C12.8361 9.33827 12.7203 9.54284 12.6275 9.7581C12.5285 9.98771 12.4634 10.2386 12.2977 10.9016L12.0308 11.9692L13.0983 11.7023C13.7613 11.5365 14.0122 11.4715 14.2418 11.3725C14.4571 11.2797 14.6617 11.1638 14.852 11.027C15.055 10.881 15.2399 10.6994 15.7232 10.2161L18.3917 7.54755ZM17.1503 2.79342C18.1991 1.84002 19.8009 1.84002 20.8497 2.79342C20.8985 2.83776 20.9503 2.88957 21.0175 2.95682L21.0177 2.95698L21.0177 2.95701L21.0303 2.96961L21.0429 2.98218L21.0429 2.98221C21.1103 3.04954 21.1621 3.1014 21.2065 3.15021C22.1599 4.19908 22.1599 5.8008 21.2065 6.84967C21.1621 6.89848 21.1103 6.95033 21.0429 7.01765L21.0429 7.01769L21.0303 7.03027L16.7838 11.2768L16.7397 11.3209L16.7397 11.3209C16.3152 11.7455 16.0415 12.0193 15.7276 12.245C15.4494 12.4449 15.1504 12.6142 14.8358 12.7499C14.4807 12.903 14.1051 12.9968 13.5227 13.1424L13.5226 13.1424L13.5226 13.1424L13.4621 13.1575L11.1819 13.7275C10.9263 13.7914 10.656 13.7166 10.4697 13.5303C10.2834 13.344 10.2085 13.0736 10.2724 12.818L10.8425 10.5378L10.8576 10.4773C11.0031 9.89484 11.097 9.51922 11.2501 9.16417C11.3857 8.84957 11.555 8.55057 11.755 8.27239C11.9807 7.95844 12.2545 7.68471 12.679 7.26024L12.679 7.26023L12.6791 7.26022L12.7232 7.21613L16.9697 2.96961L16.9822 2.95703L16.9823 2.95698L16.9823 2.95696C17.0496 2.88964 17.1015 2.83779 17.1503 2.79342ZM9.367 2.24994L9.4 2.24994H12C12.4142 2.24994 12.75 2.58573 12.75 2.99994C12.75 3.41416 12.4142 3.74994 12 3.74994H9.4C8.26752 3.74994 7.46327 3.75053 6.83388 3.80195C6.21326 3.85266 5.829 3.94903 5.52453 4.10417C4.91301 4.41576 4.41582 4.91295 4.10423 5.52447C3.94909 5.82895 3.85271 6.2132 3.80201 6.83382C3.75058 7.46321 3.75 8.26746 3.75 9.39994L3.75 14.5999C3.75 15.7324 3.75058 16.5367 3.80201 17.1661C3.85271 17.7867 3.94909 18.1709 4.10423 18.4754C4.41582 19.0869 4.91301 19.5841 5.52453 19.8957C5.829 20.0508 6.21326 20.1472 6.83388 20.1979C7.46327 20.2494 8.26752 20.2499 9.4 20.2499H14.6C15.7325 20.2499 16.5367 20.2494 17.1661 20.1979C17.7867 20.1472 18.171 20.0508 18.4755 19.8957C19.087 19.5841 19.5842 19.0869 19.8958 18.4754C20.0509 18.1709 20.1473 17.7867 20.198 17.1661C20.2494 16.5367 20.25 15.7324 20.25 14.5999V11.9999C20.25 11.5857 20.5858 11.2499 21 11.2499C21.4142 11.2499 21.75 11.5857 21.75 11.9999V14.5999V14.633C21.75 15.7251 21.75 16.5906 21.693 17.2882C21.6347 18.0016 21.5131 18.6052 21.2323 19.1564C20.7769 20.0502 20.0502 20.7768 19.1565 21.2322C18.6053 21.5131 18.0017 21.6347 17.2883 21.693C16.5907 21.75 15.7252 21.7499 14.633 21.7499H14.6H9.4H9.36698C8.27485 21.7499 7.40935 21.75 6.71174 21.693C5.99835 21.6347 5.39472 21.5131 4.84355 21.2322C3.94978 20.7768 3.22312 20.0502 2.76772 19.1564C2.48688 18.6052 2.36528 18.0016 2.30699 17.2882C2.24999 16.5906 2.25 15.7251 2.25 14.633V14.6329V14.5999L2.25 9.39994V9.36694V9.36688C2.25 8.27476 2.24999 7.40928 2.30699 6.71168C2.36528 5.99829 2.48688 5.39466 2.76772 4.84349C3.22312 3.94972 3.94978 3.22306 4.84355 2.76766C5.39472 2.48682 5.99835 2.36522 6.71174 2.30693C7.40936 2.24993 8.27486 2.24994 9.367 2.24994Z" />
						</svg>

						<p className={styles.add_btn_txt}>Open Ticket</p>
					</Link>
				</div>
			</div>

            <main style={{ marginTop: '2.5em' }}>
                <div className={styles.bottom} data-aos="fade-left">

                    <div className={styles.contact_info_wrapper}>
                        <h1 className={styles.contact_title}>Get the Help you deserve!</h1>
                        <p className={styles.contact_description}>You can open an ticket at any time and don't worry we got your back.</p>
                    </div>

                    <div className={styles.contact_features_wrapper}>
                        <div className={styles.contact_feature_box_wrapper}>
                            <p className={styles.contact_feature_title}>24 / 7 Support</p>
                            <p className={styles.contact_feature_description}>Our Team works hard to anwser all tickets 24 hours 7 day a week, so don't hesitate to open an ticket.</p>
                        </div>

                        <div className={styles.contact_feature_box_wrapper}>
                            <p className={styles.contact_feature_title}>Kind Team</p>
                            <p className={styles.contact_feature_description}>Our Team works hard to anwser all tickets 24 hours 7 day a week, so don't hesitate to open an ticket.</p>
                        </div>

                        <div className={styles.contact_feature_box_wrapper}>
                            <p className={styles.contact_feature_title}>Free of Charge</p>
                            <p className={styles.contact_feature_description}>Our Team works hard to anwser all tickets 24 hours 7 day a week, so don't hesitate to open an ticket.</p>
                        </div>
                    </div>

                    <div className={styles.all_tickets_wrapper}>

                        <h2>Tickets</h2>

                        <hr />
                        <Link className={styles.ticket_wrapper_info}>
                            <p className={styles.ticket_title}>Title</p>
                            <p className={styles.askedby}>Asked by</p>
                            <p className={styles.activity}>Activity</p>
                            <p className={styles.priority}>Priority</p>
                            <p className={styles.state}>State</p>
                        </Link>

                        <Link className={styles.ticket_wrapper}>
                            <p className={styles.ticket_title}>I'm having a problem</p>
                            <p className={styles.askedby}>Benjamin Fazli</p>
                            <p className={styles.activity}>3m ago</p>
                            <p className={styles.priority}>High</p>
                            <p className={styles.state}>Open</p>
                        </Link>

                        <Link className={styles.ticket_wrapper}>
                            <p className={styles.ticket_title}>I'm having a problem</p>
                            <p className={styles.askedby}>Benjamin Fazli</p>
                            <p className={styles.activity}>3m ago</p>
                            <p className={styles.priority}>High</p>
                            <p className={styles.state}>Open</p>
                        </Link>

                    </div>
                </div>
            </main >
        </div >
    )
}