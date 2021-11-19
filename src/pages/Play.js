import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet';
import Code from '../components/pages/Play/Code/Code'
import Screen from "../components/pages/Play/Screen/Screen";
import { useSelector, useDispatch } from 'react-redux';
import { fetchQuiz } from '../reduxComponents/actions/Questions'

export default function Play() {
    const dispatch = useDispatch()
    const playingCode = /[^/]*$/.exec(window.location.href)[0];
    const [isPlaying, setIsPlaying] = useState(false);
    const [selectedQuiz, setSelectedQuiz] = useState({});
    const [code, setCode] = useState(playingCode)

    useEffect(() => {
        dispatch(fetchQuiz())
    }, []);

    const all_quizzes = useSelector(state => state.quizes.quizes);

    function select_quiz(code) {
        let filter_it = all_quizzes.filter(quiz => quiz.redeem_code === code);
        setSelectedQuiz(filter_it)
        console.log(selectedQuiz)
        console.log(code)
        console.log(filter_it)
    }

    return (
        <>
            <Helmet>
                <title>Let's see what you know! - Swiftquiz</title>
                <meta name="description" content="Ops something went wrong with the page, if you think this is a mistake contact the team." />
            </Helmet>

            {
                isPlaying === false

                    ?
                    
                    <Code code={code} setCode={setCode} select_quiz={() => select_quiz()} />
                    
                    :

                    <Screen quiz={selectedQuiz} />
            }
        </>
    )
}