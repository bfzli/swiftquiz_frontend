import * as styles from './Modal.module.scss'

export default function Edit({ editModal, quiz, setQuiz, setEditModal, fields, setParent }) {
    return (
        <section className={styles._container}>
            <div className={styles._modal}>
                <svg className={styles._close_icon} onClick={() => setEditModal(!editModal)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 10.586L16.95 5.63599L18.364 7.04999L13.414 12L18.364 16.95L16.95 18.364L12 13.414L7.04999 18.364L5.63599 16.95L10.586 12L5.63599 7.04999L7.04999 5.63599L12 10.586Z" />
                </svg>
                <h3 className={styles._modal_title}>Quiz Settings</h3>

                <div className={styles._form_wrapper}>
                    <label className={styles._form_label_name} for="l-quiz-name">Quiz Name</label>
                    <input 
                        className={styles._form_input} 
                        type="text" 
                        id="l-quiz-name" 
                        placeholder="Title"
                        onChange={(e) => setParent("title", e.target.value)}
                        value={quiz.title} />
                </div>

                <div className={styles._form_wrapper}>
                    <label className={styles._form_label_name} for="l-quiz-name">Quiz Name</label>
                    <textarea className={styles._form_input} type="text" id="l-quiz-name" placeholder="Description" />
                </div>

                <div className={styles._form_wrapper}>
                    <label className={styles._form_label_name} for="l-quiz-name">Category</label>
                    <select className={styles._form_input} id="l-quiz-name" placeholder="Quiz Name">
                        <option>Programming</option>
                        <option>Mathematics</option>
                        <option>Algorithm</option>
                        <option>Physics</option>
                        <option>Computer Science</option>
                        <option>Sport</option>
                        <option>Other</option>
                    </select>
                </div>

                <div className={styles._form_wrapper}>
                    <label className={styles._form_label_name} for="l-quiz-name">Quiz Name</label>
                    <input className={styles._form_input} type="file" id="l-quiz-name" placeholder="Quiz Name" />
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.9999 12.586L16.2429 16.828L14.8279 18.243L12.9999 16.415V22H10.9999V16.413L9.17189 18.243L7.75689 16.828L11.9999 12.586ZM11.9999 2C13.7169 2.00008 15.374 2.63111 16.6561 3.77312C17.9382 4.91512 18.756 6.48846 18.9539 8.194C20.1982 8.53332 21.2836 9.2991 22.0206 10.3575C22.7575 11.416 23.099 12.6997 22.9855 13.9844C22.872 15.2691 22.3106 16.473 21.3995 17.3858C20.4883 18.2986 19.2854 18.8622 18.0009 18.978L17.9999 17C18.0015 15.4271 17.3854 13.9166 16.2842 12.7935C15.1831 11.6703 13.685 11.0245 12.1124 10.995C10.5398 10.9655 9.01856 11.5547 7.87608 12.6357C6.7336 13.7168 6.0613 15.2032 6.00389 16.775L5.99989 17V18.978C4.71534 18.8623 3.5123 18.2989 2.60103 17.3862C1.68976 16.4735 1.12822 15.2696 1.01457 13.9848C0.900915 12.7001 1.24237 11.4163 1.97926 10.3578C2.71615 9.29926 3.8016 8.53339 5.04589 8.194C5.2436 6.48838 6.0613 4.91491 7.34347 3.77287C8.62565 2.63082 10.2829 1.99986 11.9999 2Z" fill="#333333" />
                    </svg>
                </div>
            </div>
        </section>
    )
}
