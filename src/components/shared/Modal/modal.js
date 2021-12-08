import ReactDOM from 'react-dom';

const MODAL_STYLES = {
	position: 'fixed',
	margin: '0 auto',
	top: '10%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	background: '#111',
	padding: '4rem 8rem',
	zIndex: 2,
	color: '#fff',
	borderRadius: '12px',
	boxShadow: '0 0 6px 2px gray'
};

export default function Modal(props) {
	return ReactDOM.createPortal(
		<div style={MODAL_STYLES}>
			<h3>{props.text}</h3>
			<button type="button" onClick={props.onClose}>
				CLOSE HERE
			</button>
		</div>,
		document.getElementById('portal')
	);
}
