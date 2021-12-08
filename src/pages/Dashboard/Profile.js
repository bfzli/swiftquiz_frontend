import Dashlayout from './Dashlayout'
import ProfilePage from '../../components/pages/Dashboard/Profile/Profile'
import { Helmet } from 'react-helmet'

export default function Profile() {
    return (
        <Dashlayout>
            <Helmet>
                <title>Profile - Swiftquiz</title>
                <meta name="description" content="Your saved Quizzes here, come here to play." />
            </Helmet>

            <ProfilePage />
        </Dashlayout>
    )
}
