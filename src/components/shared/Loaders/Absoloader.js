import { useSelector } from 'react-redux'
import * as styles from './Loaders.module.scss'

export default function Absoloader() {
    const theme = useSelector((state) => state.ui.theme);
    return (
        <div className={styles.absoloader_container} id={theme === "lightmode" ? "lightmode" : "darkmode"}>
            {
                theme === 'darkmode' ?
                    <lottie-player
                        src="https://assets4.lottiefiles.com/packages/lf20_msale29a.json"
                        background="transparent"
                        speed="1"
                        style={{ width: '64px', height: '64px' }}
                        loop
                        autoplay />
                    :
                    <lottie-player
                        src="https://assets10.lottiefiles.com/packages/lf20_n5d5t5sp.json"
                        background="transparent"
                        speed="1"
                        style={{ width: '64px', height: '64px' }}
                        loop
                        autoplay />
            }
        </div>
    )
}
