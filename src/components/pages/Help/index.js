import HelpCard from './HelpCard';
import * as styles from './help.module.scss';
import rulesImg from '../../../assets/images/HelpPage/rules.png';
import gameImg from '../../../assets/images/HelpPage/game.png';
import authImg from '../../../assets/images/HelpPage/auth.png';
import helpImg from '../../../assets/images/HelpPage/help.png';
import paymentImg from '../../../assets/images/HelpPage/payment.png';
import accountImg from '../../../assets/images/HelpPage/account.png';

export default function HelpPage() {
	const TITLES = [
		{ text: 'ACCOUNT', img: accountImg },
		{ text: 'RULES', img: rulesImg },
		{ text: 'HELP', img: helpImg },
		{ text: 'PLAY', img: gameImg },
		{ text: 'PAYMENTS', img: paymentImg },
		{ text: 'AUTH', img: authImg }
	];

	return (
		<div className={styles.help_container}>
			<div className={styles.help_container_content}>
				<div className={styles.help_header}>
					<div className={styles.help_header_img}>
						<img />
					</div>
					<h1>Frequently Asked Questions (FAQ)</h1>
				</div>
				<div className={styles.help_body}>
					<div className={styles.help_body_content}>{TITLES.map((t, i) => <HelpCard key={i} {...t} />)}</div>
				</div>
			</div>
		</div>
	);
}
