import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet';
import Code from '../components/pages/Play/Code/Code'
import Screen from "../components/pages/Play/Screen/Screen";
import { useSelector, useDispatch } from 'react-redux';
import { fetchQuiz } from '../reduxComponents/actions/Questions'
import axios from 'axios'

export default function Play() {
    const dispatch = useDispatch()
    const [playing, setPlaying] = useState(false);
    const [quiz, setQuiz] = useState({});
    const url = /[^/]*$/.exec(window.location.href)[0];
    const [typing, setTyping] = useState(url === 'play' ? '' : url)

    useEffect(() => {
        dispatch(fetchQuiz())
    }, []);

    function play_quiz(){
        console.log(typing)
    }

    return (
        <>
            <Helmet>
                <title>Let's see what do you know! - Swiftquiz</title>
                <meta name="description" content="Ops something went wrong with the page, if you think this is a mistake contact the team." />
            </Helmet>

            {
                playing === false

                    ?

                    <Code code={typing} setCode={setTyping} play_quiz={() => play_quiz()} />

                    :

                    <Screen quiz={quiz} />
            }
        </>
    )
}