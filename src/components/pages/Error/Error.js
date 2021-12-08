import { container, button, description, illustration } from './Error.module.scss'
import { useNavigate } from 'react-router-dom';
export default function Error() {

    const history = useNavigate();

    return (
        <div className={container} data-aos="fade-down">
            <lottie-player className={illustration} style={{ width: '50%', height: '50%' }} className={illustration} src="https://assets10.lottiefiles.com/private_files/lf30_wvfo5uzg.json" background="transparent" speed="1" loop autoplay></lottie-player>

            <p className={description}>
                This page is not found, or private, if you think this is a mistake please contact our team for support.
            </p>
            
            <button onClick={() => history.push('/')} className={button}>Go to Home</button>
        </div>
    )
}
