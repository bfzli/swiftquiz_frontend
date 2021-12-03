import Dashlayout from "./Dashlayout";
import UserProfile from '../../components/pages/Dashboard/User/User'
import { Helmet } from 'react-helmet'

export default function User() {
    return (
        <Dashlayout>
            <Helmet>
                <title>test - Swiftquiz</title>
                <meta name="description" content="Your saved Quizzes here, come here to play." />
            </Helmet>

            <UserProfile />
        </Dashlayout>
    )
}
