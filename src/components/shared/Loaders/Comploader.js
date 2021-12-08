import React from 'react'

export default function Comploader({color}) {

    if (color === "purple")
        return (
            <lottie-player
                src="https://assets10.lottiefiles.com/packages/lf20_n4kjxu8m.json"
                background="transparent"
                speed="1"
                style={{ width: '82px', height: '82px' }}
                loop
                autoplay />
        )

    if (color === "white")
        return (
            <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_xxfmppzp.json"
                background="transparent"
                speed="1"
                style={{ width: '82px', height: '82px' }}
                loop
                autoplay />
        )
}
