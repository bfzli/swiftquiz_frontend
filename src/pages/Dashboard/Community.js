import Dashlayout from './Dashlayout'
import CommunityComp from '../../components/pages/Dashboard/Community/Community'
import { Helmet } from 'react-helmet'

export default function Community() {
    return (
        <Dashlayout>
            <Helmet>
                <title>Community - Swiftquiz</title>
                <meta name="description" content="Your saved Quizzes here, come here to play." />
            </Helmet>

            <CommunityComp />
        </Dashlayout>
    )
}
