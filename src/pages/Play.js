import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet';
import Code from '../components/pages/Play/Code/Code'
import Screen from "../components/pages/Play/Screen/Screen";
import { useSelector, useDispatch } from 'react-redux';
import { fetchQuiz } from '../reduxComponents/actions/Questions'
import axios from 'axios'

export default function Play() {
    const dispatch = useDispatch()
    const playingCode = /[^/]*$/.exec(window.location.href)[0];
    const [isPlaying, setIsPlaying] = useState(false);
    const [selectedQuiz, setSelectedQuiz] = useState({});
    const [code, setCode] = useState(playingCode === 'play' ? '' : playingCode)
    console.log(playingCode)

    useEffect(() => {
        dispatch(fetchQuiz())
    }, []);

    const all_quizzes = useSelector(state => state.quizes.quizes);

    // function select_quiz(code) {
    //     // let filter_it = all_quizzes.filter(quiz => quiz.redeem_code === code);
    //     // setSelectedQuiz(filter_it)
    //     // console.log(selectedQuiz)
    //     // console.log(code)
    //     setIsPlaying(true)
    // }

    // useEffect(() => {
    // }, [setSelectedQuiz])
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjE4YTM0Njc5OWYxM2FhZmFlYTZlNTAyIiwicm9sZSI6InVzZXIiLCJ1c2VybmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBzd2ZpdHF1aS5jb20iLCJpYXQiOjE2MzczMDU5MzIsImV4cCI6MTYzNzQ3ODczMn0.thV53lWhPkMqZiYbgF7qRStY-oWhn4e_9V_ySvUB9d8";

    // const instance = axios.create({
    //     baseURL: 'https://swiftquiz-api.herokuapp.com/api/user',
    //     timeout: 1000,
    //     headers: { 'Authorization': 'Bearer ' + token }
    // });


    function select_quiz() {
        // instance.get(`/618a346799f13aafaea6e502/quizzes/my-quizzes/${code}`)
        //     .then(response => console.log(response))
        setIsPlaying(true)
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