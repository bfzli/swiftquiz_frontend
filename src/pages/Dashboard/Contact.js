import Dashlayout from "./Dashlayout";
import Contact from '../../components/pages/Dashboard/Contact/Contact'
import { Helmet } from 'react-helmet'

export default function ContactPage() {
    return (
        <Dashlayout>
            <Helmet>
                <title>Support - Swiftquiz</title>
                <meta name="description" content="You can get personalized support here if you need to." />
            </Helmet>
            
            <Contact />
        </Dashlayout>
    )
}
