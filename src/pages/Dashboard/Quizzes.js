import Dashlayout from './Dashlayout'
import QuizScreen from '../../components/pages/Dashboard/Quizzes/Quizzes'
import { Helmet } from 'react-helmet'

export default function Quizzes() {
    return (
        <Dashlayout>
            <Helmet>
                <title>My Quizzes - Swiftquiz</title>
                <meta name="description" content="Your saved Quizzes here, come here to play." />
            </Helmet>

            <QuizScreen />
        </Dashlayout>
    )
}
