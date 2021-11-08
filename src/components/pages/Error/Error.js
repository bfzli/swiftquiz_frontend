import { container, title, button, description, illustration } from './Error.module.scss'
import { useHistory } from 'react-router-dom';

export default function Error() {

    const history = useHistory();

    return (
        <main className={container} data-aos="fade-down">
            <lottie-player style={{ width: '50%', height: '50%' }} className={illustration} src="https://assets4.lottiefiles.com/private_files/lf30_cdljtase.json" background="transparent" speed="1" loop autoplay></lottie-player>
            <h1 className={title}>
                Not Found
            </h1>
            <p className={description}>
                This page is not found, or private, if you think this is a mistake please contact our team for support.
            </p>
            <button onClick={() => history.push('/')} className={button}>Go to Home</button>
        </main> 
    )
}
