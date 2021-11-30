import { useSelector } from 'react-redux'

export default function Comploader() {
    const theme = useSelector((state) => state.ui.theme);

    return (
        <div id={theme === "lightmode" ? "lightmode" : "darkmode"}>
            {
                theme === 'lightmode' ?
                    <lottie-player
                        src="https://assets10.lottiefiles.com/packages/lf20_n4kjxu8m.json"
                        background="transparent"
                        speed="1"
                        style={{ width: '82px', height: '82px' }}
                        loop
                        autoplay />
                    :
                    <lottie-player
                        src="https://assets5.lottiefiles.com/packages/lf20_xxfmppzp.json"
                        background="transparent"
                        speed="1"
                        style={{ width: '82px', height: '82px' }}
                        loop
                        autoplay />
            }
        </div>

    )
}
