import React from 'react'

export default function Pagloader({color}) {

    if (color === "purple")
        return (
            <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_q6qamshp.json"
                background="transparent"
                speed="1"
                style={{ width: '120px', height: '120px' }}
                loop
                autoplay />
        )

    if (color === "white")
        return (
            <lottie-player
                src="https://assets7.lottiefiles.com/packages/lf20_sjemap28.json"
                background="transparent"
                speed="1"
                style={{ width: '120px', height: '120px' }}
                loop
                autoplay />
        )
}
