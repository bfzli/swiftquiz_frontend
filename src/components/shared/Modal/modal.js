import ReactDOM from 'react-dom';
import * as styles from './Modal.module.scss'

export default function Modal(props) {
	return ReactDOM.createPortal(
		<section className={styles.container}>
			<div class={styles.modal}>
				<div className={styles.modal_header}>
					<p className={styles.modal_title}>{props.title}</p>
					
					<svg onClick={props.onClose} className={styles.closemodal} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M12 10.586L16.95 5.63599L18.364 7.04999L13.414 12L18.364 16.95L16.95 18.364L12 13.414L7.04999 18.364L5.63599 16.95L10.586 12L5.63599 7.04999L7.04999 5.63599L12 10.586Z" fill="var(--icon-border)" />
					</svg>
				</div>

				<div className={styles.modal_body}>
					<p>{props.text}</p>
				</div>
			</div>
		</section>,
		document.getElementById('portal')
	);
}
