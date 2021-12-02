import Layout from './Dashlayout'
import BookmarksComponent from '../../components/pages/Dashboard/Bookmarks/Bookmarks'
import { Helmet } from 'react-helmet'

export default function Bookmarks() {

    return (
        <Layout>
            <Helmet>
                <title>Bookmarks - Swiftquiz</title>
                <meta name="description" content="Your saved Quizzes here, come here to play." />
            </Helmet>

            <BookmarksComponent />
        </Layout>
    )
}
