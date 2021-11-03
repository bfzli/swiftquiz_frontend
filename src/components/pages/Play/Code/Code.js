import * as styles from './Code.module.scss'
import {Link} from 'react-router-dom'

export default function Screen({ code, setCode }) {
    return (
        <div className={styles.container}>
            <Link className="#hover" to="/">
                <svg className={styles.logo} viewBox="0 0 156 155" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M108.841 80.5999C111.906 82.1312 114.313 84.2504 123.166 93.2117C153.634 124.05 153.469 123.853 154.775 131.053C155.283 133.855 155.235 135.199 154.516 138.297C153.39 143.156 151.677 146.046 147.854 149.54C143.087 153.897 140.404 154.957 134.045 154.995C124.931 155.05 124.874 155.01 102.147 132.256C91.5449 121.642 82.3098 112.074 81.625 110.995C79.5546 107.729 78.5135 103.801 78.5141 99.2556C78.5141 95.7341 78.7895 94.4328 80.125 91.6428C82.4147 86.8587 86.4293 82.8503 91.3553 80.4293C95.3048 78.488 95.307 78.488 100.39 78.6282C104.505 78.7415 105.661 79.0113 108.841 80.5999Z" />
                    <path d="M86.9274 0.744438C92.8692 1.73335 97.6741 2.88717 100.95 4.1111C102.339 4.62996 103.979 5.20435 104.596 5.38777C107.117 6.1366 116.553 11.3807 120.262 14.0939C122.443 15.6903 126.336 19.0255 128.91 21.5054C144.972 36.9768 153.126 55.3168 153.11 75.9369C153.104 82.613 151.79 93.0804 150.589 96.0057C149.322 99.093 149.264 99.0447 123.899 73.7953C110.506 60.4627 98.6361 48.8785 97.5221 48.0517C94.2379 45.6161 87.4827 42.5366 83.5618 41.688C70.0099 38.7543 55.8505 44.4623 47.0165 56.4201C45.8296 58.0271 44.8581 59.6807 44.8581 60.0947C44.8581 60.5092 44.6393 61.0875 44.3717 61.3809C41.9154 64.0722 40.6276 78.6406 42.2672 85.1921C43.7104 90.9584 46.7158 96.2811 51.7597 102.002C54.2883 104.87 65.6173 116.58 76.9351 128.023C91.951 143.205 97.3611 149.012 96.9494 149.508C95.252 151.553 79.2646 153.333 69.9476 152.514C50.7006 150.823 33.8466 142.527 20.1404 127.998C10.313 117.58 3.24252 103.268 0.7767 88.8022C-0.591394 80.776 -0.0910456 66.0719 1.79759 58.8203C5.57317 44.3221 12.2128 32.6924 22.5422 22.4836C34.1023 11.0581 46.7848 4.27209 61.9662 1.39062C64.4343 0.921686 66.9585 0.431438 67.5755 0.300182C70.2399 -0.26579 82.555 0.0169195 86.9274 0.744438Z" />
                </svg>
            </Link>
            <div className={styles.right}>
                <h1 className={styles.title}>be an einstein, play now!</h1>
                <p className={styles.description}>
                    Playing a quiz is simple easly, play by entering a code or through a link that someone invited you to do so.
                </p>
                <div style={{ display: 'flex' }}>
                    <input className={styles.codebox} placeholder="SWIFT2991" type="text" />
                    <button title="By entering a code you agree to our Terms of Service and Privacy Policy." onClick={() => setCode(!code)} className={styles.cta}>Enter</button>
                </div>
            </div>
            <div className={styles.left}>
                <lottie-player className={styles.lottie} src="https://assets1.lottiefiles.com/packages/lf20_g3dzz0wz.json" background="transparent" speed="1" className={styles.illustration} autoplay loop  ></lottie-player>
            </div>
        </div>
    )
}
