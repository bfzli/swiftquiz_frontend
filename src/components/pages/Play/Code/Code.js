import * as styles from './Code.module.scss'

export default function Screen({ code, setCode }) {
    return (
        <div className={styles.container}>
            <div className={styles.right}>
            <h1 className={styles.title}>be an einstein, play now!</h1>
            <p className={styles.description}>
                Playing a quiz is simple easly, play by entering a code or through a link that someone invited you to do so.
            </p>
                <div style={{display: 'flex'}}>
                    <input className={styles.codebox} placeholder="SWIFT2991" type="text" />
                    <button title="By entering a code you agree to our Terms of Service and Privacy Policy." onClick={() => setCode(!code)} className={styles.cta}>Enter</button>
                </div>
            </div>
            <div className={styles.left}>
                <lottie-player className={styles.lottie} src="https://assets1.lottiefiles.com/packages/lf20_g3dzz0wz.json"  background="transparent"  speed="1"  style={{width: "1400", height: "1400"}} autoplay loop  ></lottie-player>            
            </div>
        </div>
    )
}
