import { useSelector } from 'react-redux';
import * as styles from './help.module.scss';
import { Link } from 'react-router-dom';

export default function HelpCard(props) {
	const theme = useSelector((state) => state.ui.theme);
	return (
		<a className={styles.help_card_body}>
			<div className={styles.help_card_img}>
				<img
					src={props.img}
					alt={props.text}
					style={{ filter: theme === 'darkmode' ? 'invert(100%)' : 'invert(0%)' }}
				/>
			</div>
			<h2 className={styles.help_card_title}>{props.text}</h2>
		</a>
	);
}
