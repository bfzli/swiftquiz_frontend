import Dashlayout from './Dashlayout'
import LeaderboardComponent from '../../components/pages/Dashboard/Leaderboard/Leaderboard'
import { Helmet } from 'react-helmet'

export default function Leaderboard() {
    return (
        <Dashlayout>
            <Helmet>
                <title>Leaderboard - Swiftquiz</title>
                <meta name="description" content="Your saved Quizzes here, come here to play." />
            </Helmet>
            
            <LeaderboardComponent />
        </Dashlayout>
    )
}
