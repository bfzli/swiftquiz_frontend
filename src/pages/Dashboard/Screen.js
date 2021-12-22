import Dashlayout from "./Dashlayout";
import Welcome from '../../components/pages/Dashboard/Welcome/Welcome'
import { Helmet } from 'react-helmet'

export default function Screen() {
    return (
        <Dashlayout>
            <Helmet>
                <title>Homepage - Swiftquiz</title>
                <meta name="description" content="Your saved Quizzes here, come here to play." />
            </Helmet>
            
            <Welcome />
        </Dashlayout>
    )
}
