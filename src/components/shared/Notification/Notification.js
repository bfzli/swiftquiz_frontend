import * as styles from './Notification.module.scss'
import {useState} from 'react'

export default function Notification({message}) {

    const [toggle, setToggle] = useState(true);

    return (
            <div id="notiBody" className={toggle === false ? "container hide" : "container show"} >
                <span>Swift Quiz</span>
                <input type="button" id={styles.closeNoti} onClick={() => setToggle(false)} value="X" />
                <div className={styles.innerContentNotification}>
                    <p>{message}</p>
                </div>
            </div>
    )
}
