import Layout from './Layout'
import { Helmet } from 'react-helmet'
import ErrorView from '../components/pages/Error/Error'

export default function Error() {
    return (
        <Layout>
            <Helmet>
                <title>404 Not Found - Swiftquiz</title>
                <meta name="description" content="Ops something went wrong with the page, if you think this is a mistake contact the team." />
            </Helmet>
            <ErrorView />
        </Layout>
    )
}
