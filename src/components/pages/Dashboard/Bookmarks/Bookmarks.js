import * as styles from './Bookmarks.module.scss'
export default function Bookmarks() {
    return (
        <div className={styles.container}>
            <div className={styles.page_info} data-aos="fade-down">
                <h2 className={styles.welcome_text}>Bookmarks</h2>
                <div className={styles.search}>
                    <input
                        className={styles.search_input}
                        type="text"
                        placeholder="Search community..."
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

                    </div>
                </div>
            </main >
        </div >
    )
}