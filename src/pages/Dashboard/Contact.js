import Dashlayout from "./Dashlayout";
import Contact from '../../components/pages/Dashboard/Contact/Contact'
import { Helmet } from 'react-helmet'

export default function ContactPage() {
    return (
        <Dashlayout>
            <Helmet>
                <title>Contact - Swiftquiz</title>
                <meta name="description" content="Your saved Quizzes here, come here to play." />
            </Helmet>
            
            <Contact />
        </Dashlayout>
    )
}
