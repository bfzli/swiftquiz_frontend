import { useSelector } from 'react-redux'

export default function Pagloader() {
    const theme = useSelector((state) => state.ui.theme);
    return (
        <div id={theme === "lightmode" ? "lightmode" : "darkmode"}>
            {
                theme === 'lightmode' ?
                    <lottie-player
                        src="https://assets4.lottiefiles.com/packages/lf20_msale29a.json"
                        background="transparent"
                        speed="1"
                        style={{ width: '82px', height: '82px' }}
                        loop
                        autoplay />
                    :
                    <lottie-player
                        src="https://assets10.lottiefiles.com/packages/lf20_n5d5t5sp.json"
                        background="transparent"
                        speed="1"
                        style={{ width: '82px', height: '82px' }}
                        loop
                        autoplay />
            }
        </div>
    )
}
