import { useNavigate, useParams } from 'react-router';
import Dashlayout from '../../../../pages/Dashboard/Dashlayout';
import { TITLES } from './topics';
import * as styles from './Contact.module.scss';

const QuestionRow = ({ question }) => {
	return (
		<div className={styles.question_row}>
			<a href="#">{question}</a>
		</div>
	);
};

const SelectedSupport = () => {
	const params = useParams();
	const navigate = useNavigate();
	const topic = TITLES.filter((t) => t.title.toLowerCase() === params.title.toLowerCase())[0];

	return (
		<Dashlayout>
			<div className={styles.questions_container}>
				<div className={styles.questions_wrapper}>
					<div className={styles.questions_header}>
						<h1>(FAQ) about {params.title.toUpperCase()} </h1>
						<button className={styles.goBack_btn} onClick={() => navigate(-1)}>
							Go Back
						</button>
					</div>
					<div className={styles.question_row_wrapper}>
						{topic && topic.questions.map((q, i) => <QuestionRow question={q} key={i} />)}
					</div>
				</div>
			</div>
		</Dashlayout>
	);
};

export default SelectedSupport;
