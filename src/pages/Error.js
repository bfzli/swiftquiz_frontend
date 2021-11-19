import { Helmet } from 'react-helmet'
import ErrorView from '../components/pages/Error/Error'
import Header from '../components/shared/Header/Header'

export default function Error() {
    return (
        <>
            <Helmet>
                <title>404 Not Found - Swiftquiz</title>
                <meta name="description" content="Ops something went wrong with the page, if you think this is a mistake contact the team." />
            </Helmet>
           <div id="globl">
           <Header />
           </div>
            <ErrorView />
        </>
    )
}
