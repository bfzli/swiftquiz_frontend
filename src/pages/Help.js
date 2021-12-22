import { Helmet } from 'react-helmet';
import HelpPage from '../components/pages/Help';
import Dashlayout from './Dashboard/Dashlayout';

export default function Help() {
	return (
		<Dashlayout>
			<Helmet>
				<title>Get Help and Support - Swiftquiz</title>
				<meta
					name="description"
					content="We let you find the help and support you need, so you can have the best experience ever"
				/>
			</Helmet>

			<HelpPage />
		</Dashlayout>
	);
}
