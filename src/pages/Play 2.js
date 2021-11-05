import Layout from "./Layout";
import { useState } from 'react'

import Code from '../components/pages/Play/Code/Code'
import Screen from "../components/pages/Play/Screen/Screen";

export default function Play() {

    const [code, setCode] = useState(true);

    return (
        <>
            {
                code === true

                    ?

                    <Code code={code} setCode={setCode} />

                    :

                    <>
                        <Screen />
                    </>
            }
            </>
    )
}