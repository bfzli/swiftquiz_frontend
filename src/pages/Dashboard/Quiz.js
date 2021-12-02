import Dashlayout from "./Dashlayout";
import Quiz from '../../components/pages/Dashboard/Quiz/Quiz'
import { Helmet } from 'react-helmet'

export default function Screen() {
    return (
        <Dashlayout>
            <Helmet>
                <title>Quiz Builder - Swiftquiz</title>
                <meta name="description" content="Your saved Quizzes here, come here to play." />
            </Helmet>

            <Quiz />
        </Dashlayout>
    )
}
