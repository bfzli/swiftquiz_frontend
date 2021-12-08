import { container } from './Pageloader.module.scss'

export default function Pagloader({ color }) {

    if (color === "purple")
        return (
            <div className={container}>
                <lottie-player
                    src="https://assets5.lottiefiles.com/packages/lf20_q6qamshp.json"
                    background="transparent"
                    speed="1"
                    style={{ width: '82px', height: '82px' }}
                    loop
                    autoplay />
            </div>
        )

    if (color === "white")
        return (
            <div className={container}>

                <lottie-player
                    src="https://assets7.lottiefiles.com/packages/lf20_sjemap28.json"
                    background="transparent"
                    speed="1"
                    style={{ width: '82px', height: '82px' }}
                    loop
                    autoplay />
            </div>
        )
}
