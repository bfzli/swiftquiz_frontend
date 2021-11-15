import Form from '../components/pages/Form/Form';
import { Helmet } from 'react-helmet';

export default function FormView() {
    return (
        <>
            <Helmet>
                <title>Authentication - Swiftquiz</title>
                <meta name="description" content="Ops something went wrong with the page, if you think this is a mistake contact the team." />
            </Helmet>

            <Form />
        </>
    )
}
