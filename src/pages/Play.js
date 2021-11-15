import { useState } from 'react'
import { Helmet } from 'react-helmet';
import Code from '../components/pages/Play/Code/Code'
import Screen from "../components/pages/Play/Screen/Screen";

export default function Play() {

    const [code, setCode] = useState(true);

    return (
        <>

            <Helmet>
                <title>Let's see what you know! - Swiftquiz</title>
                <meta name="description" content="Ops something went wrong with the page, if you think this is a mistake contact the team." />
            </Helmet>

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