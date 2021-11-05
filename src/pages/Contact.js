import Layout from './Layout'
import ContactForm from '../components/pages/Contact/ContactForm'
import { Helmet } from 'react-helmet'

export default function Contact() {

    return (
        <Layout>
            <Helmet>
                <title>Get In Touch - Swiftquiz</title>
                <meta name="description" content="Contact our team for anything related to our platform." />
            </Helmet>

            <ContactForm />
        </Layout>
    )
}
