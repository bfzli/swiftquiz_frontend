import Dashlayout from "./Dashlayout";
import EditQuiz from '../../components/pages/Dashboard/EditQuiz/EditQuiz'
import { Helmet } from 'react-helmet'

export default function EditQuizPage() {
    return (
        <Dashlayout>
            <Helmet>
                <title>Community - Swiftquiz</title>
                <meta name="description" content="Your saved Quizzes here, come here to play." />
            </Helmet>

            <EditQuiz />
        </Dashlayout>
    )
}
