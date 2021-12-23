import * as styles from './Contact.module.scss';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

const Tickets = (props) => {
	const navigate = useNavigate();
	const theme = useSelector((state) => state.ui.theme);

	return (
		<div className={styles.anwsers_container}>
			<p className={styles.answers_topic}>{props.title}</p>
			<div className={styles.breakline} />
			<div className={styles.asnwers_img_wrapper}>
				<img
					src={props.logo}
					style={{
						display: 'block',
						width: '40%',
						filter: theme === 'darkmode' ? 'invert(100%)' : 'invert(0%)'
					}}
					id={props.title.toLowerCase()}
					onClick={(e) => navigate(`/dashboard/support/${e.target.id}`)}
				/>
			</div>
		</div>
	);
};

export default Tickets;
