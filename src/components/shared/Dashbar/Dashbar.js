import * as styles from './Dashbar.module.scss';
import Logo from './Logo';
import { useState, useEffect } from 'react';
import coin from './components/coin.png';
import { useSelector } from 'react-redux';
import CheckPath from '../../../utils/CheckPath';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchUserData } from '../../../reduxComponents/actions/User';
import * as CONST from '../../../reduxComponents/constants/index';

export default function Dashbar({ page }) {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	const [menu, setMenu] = useState(false);
	const [dropdown, setDropdown] = useState(false);
	const theme = useSelector((state) => state.ui.theme);
	const current_url = document.URL;
	const [isModal, setIsModal] = useState(false);

	useEffect(() => {
		dispatch(fetchUserData());
	}, []);

	return (
		<main className={styles.container}>
			{
				isModal === true ?
					<div className={styles.modal_container}>
						<div className={styles.modal_box}>
							<div className={styles.modal_header}>
								<p className={styles.modal_title}>Settings</p>

								<svg onClick={() => setIsModal(false)} className={styles.closemodal} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M12 10.586L16.95 5.63599L18.364 7.04999L13.414 12L18.364 16.95L16.95 18.364L12 13.414L7.04999 18.364L5.63599 16.95L10.586 12L5.63599 7.04999L7.04999 5.63599L12 10.586Z" fill="var(--icon-border)" />
								</svg>
							</div>

							<div className={styles.modal_body}>
								<label className={styles._form_label_name} htmFor="thememode">Theme</label>
								<select className={styles._form_input} defaultValue={theme === "lightmode" ? "lightmode" : "darkmode"} onChange={(e) => { const selected = e.target.value; selected === 'darkmode' ? dispatch({ type: CONST.SET_DARK_MODE }) : dispatch({ type: CONST.SET_LIGHT_MODE }) }} id="thememode" placeholder="Category">
									<option value="lightmode">Lightmode</option>
									<option value="darkmode">Darkmode</option>
								</select>
							</div>

							<div className={styles.modal_body}>
								<label className={styles._form_label_name} htmFor="languagechoser">Language</label>
								<select className={styles._form_input} id="languagechoser" placeholder="Category">
									<option value="61961c1788d1b50588079052">English</option>
									<option value="617bf1df3b7012bee6d4056d">Albanian</option>
									<option value="61961c1b88d1b50588079055">Turkish</option>
									<option value="61961be088d1b5058807904f">German</option>
								</select>
							</div>
						</div>
					</div> : null
			}
			<header onMouseLeave={() => setMenu(false)} onMouseEnter={() => setMenu(true)} className={styles.sidebar}>
				<div className={menu === true ? styles.sidebar_top : styles.sidebar_top_small}>
					<Logo />
					<div className={styles.spacer} />

					<Link to="/dashboard/welcome">
						<div
							id="nav-item"
							className={CheckPath(current_url, '/welcome') === true ? styles.item_is_active : null}
						>
							<svg
								className={styles.sidebar_item_icon}
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M19 15V9L16.2426 6.24264C14.2426 4.24264 13.2426 3.24264 12 3.24264C10.7574 3.24264 9.75736 4.24264 7.75736 6.24264L5 9V15C5 17.8284 5 19.2426 5.87868 20.1213C6.75736 21 8.17157 21 11 21H13C15.8284 21 17.2426 21 18.1213 20.1213C19 19.2426 19 17.8284 19 15Z"
									fill="var(--icon-inside)"
									fill-opacity="0.15"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M9.70191 5.3587C10.3836 4.67704 10.8426 4.22027 11.2301 3.92463C11.6002 3.6422 11.8157 3.57837 12 3.57837C12.1843 3.57837 12.3998 3.6422 12.7699 3.92464C13.1574 4.22027 13.6164 4.67704 14.2981 5.3587L16.7123 7.77291C17.6227 8.68328 17.9207 9.00011 18.0787 9.38154C18.2367 9.76298 18.25 10.1978 18.25 11.4852V14.9999C18.25 16.4354 18.2484 17.4365 18.1469 18.1918C18.0482 18.9256 17.8678 19.3142 17.591 19.5909C17.3142 19.8677 16.9257 20.0481 16.1919 20.1468C15.4365 20.2484 14.4354 20.2499 13 20.2499H11C9.56458 20.2499 8.56347 20.2484 7.80812 20.1468C7.07434 20.0481 6.68577 19.8677 6.40901 19.5909C6.13225 19.3142 5.9518 18.9256 5.85315 18.1918C5.75159 17.4365 5.75 16.4354 5.75 14.9999V11.4852C5.75 10.1978 5.76328 9.76298 5.92127 9.38154C6.07864 9.00163 6.37495 8.6858 7.27683 7.78378C7.28044 7.78016 7.28406 7.77654 7.28769 7.77291L9.70191 5.3587ZM5.93564 7.00364L1.46967 11.4696C1.17678 11.7625 1.17678 12.2374 1.46967 12.5303C1.76256 12.8232 2.23744 12.8232 2.53033 12.5303L4.25116 10.8094C4.24978 10.9783 4.24987 11.1555 4.24995 11.3426L4.25 11.4852V14.9999L4.25 15.0548C4.24998 16.4224 4.24996 17.5247 4.36652 18.3917C4.48754 19.2918 4.74643 20.0497 5.34835 20.6516C5.95027 21.2535 6.70814 21.5124 7.60825 21.6334C8.47522 21.75 9.57754 21.75 10.9451 21.7499H11H13H13.0549C14.4225 21.75 15.5248 21.75 16.3918 21.6334C17.2919 21.5124 18.0497 21.2535 18.6516 20.6516C19.2536 20.0497 19.5125 19.2918 19.6335 18.3917C19.75 17.5247 19.75 16.4224 19.75 15.0548V14.9999V11.4852L19.75 11.3426C19.7501 11.1555 19.7502 10.9783 19.7488 10.8094L21.4697 12.5303C21.7626 12.8232 22.2374 12.8232 22.5303 12.5303C22.8232 12.2374 22.8232 11.7625 22.5303 11.4696L18.064 7.00327C18.0023 6.94138 17.9389 6.87806 17.8738 6.81306L17.7742 6.7135L17.773 6.71225L15.3588 4.29804L15.322 4.26128C15.2823 4.22157 15.243 4.18227 15.2041 4.1434C14.6207 3.56035 14.1271 3.07338 13.6798 2.7321C13.6169 2.68407 13.5535 2.63784 13.4895 2.5937C13.0414 2.2847 12.5636 2.07837 12 2.07837C11.3559 2.07837 10.8238 2.34787 10.3202 2.7321C10.2606 2.77761 10.2001 2.8257 10.1387 2.87627C9.70899 3.23023 9.23391 3.70534 8.67802 4.26126L8.67802 4.26126L8.67801 4.26127"
									fill="var(--icon-border)"
								/>
							</svg>
							{menu === true ? <p className={styles.sidebar_item_text}>Homepage</p> : null}
						</div>
					</Link>

					<Link to="/dashboard/quizzes">
						<div
							id="nav-item"
							className={CheckPath(current_url, '/quizzes') === true || CheckPath(current_url, '/quizzes') === true ? styles.item_is_active : null}
						>
							<svg
								className={styles.sidebar_item_icon}
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect
									x="4"
									y="6"
									width="16"
									height="12"
									rx="2"
									fill="var(--icon-inside)"
									fill-opacity="0.15"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M4.24988 2C4.24988 1.58579 4.58567 1.25 4.99988 1.25H18.9999C19.4141 1.25 19.7499 1.58579 19.7499 2C19.7499 2.41421 19.4141 2.75 18.9999 2.75H4.99988C4.58567 2.75 4.24988 2.41421 4.24988 2ZM7.94788 5.25L7.99988 5.25H15.9999L16.0519 5.25C16.9504 5.24997 17.6996 5.24994 18.2944 5.32991C18.9222 5.41432 19.489 5.59999 19.9444 6.05546C20.3999 6.51093 20.5856 7.07773 20.67 7.70552C20.7499 8.3003 20.7499 9.04952 20.7499 9.948V10V14V14.052C20.7499 14.9505 20.7499 15.6997 20.67 16.2945C20.5856 16.9223 20.3999 17.4891 19.9444 17.9445C19.489 18.4 18.9222 18.5857 18.2944 18.6701C17.6996 18.7501 16.9504 18.75 16.0519 18.75H16.0519H16.0519L15.9999 18.75H7.99988L7.94788 18.75H7.94785H7.94782C7.04937 18.75 6.30017 18.7501 5.7054 18.6701C5.07761 18.5857 4.51081 18.4 4.05534 17.9445C3.59987 17.4891 3.41419 16.9223 3.32979 16.2945C3.24982 15.6997 3.24985 14.9505 3.24988 14.052V14V10V9.948C3.24985 9.04952 3.24982 8.3003 3.32979 7.70552C3.41419 7.07773 3.59987 6.51093 4.05534 6.05546C4.51081 5.59999 5.07761 5.41432 5.7054 5.32991C6.30018 5.24994 7.0494 5.24997 7.94788 5.25ZM5.90527 6.81654C5.44381 6.87858 5.24631 6.9858 5.116 7.11612C4.98568 7.24643 4.87846 7.44393 4.81641 7.90539C4.75147 8.38843 4.74988 9.03599 4.74988 10V14C4.74988 14.964 4.75147 15.6116 4.81641 16.0946C4.87846 16.5561 4.98568 16.7536 5.116 16.8839C5.24631 17.0142 5.44381 17.1214 5.90527 17.1835C6.38831 17.2484 7.03587 17.25 7.99988 17.25H15.9999C16.9639 17.25 17.6115 17.2484 18.0945 17.1835C18.5559 17.1214 18.7534 17.0142 18.8838 16.8839C19.0141 16.7536 19.1213 16.5561 19.1833 16.0946C19.2483 15.6116 19.2499 14.964 19.2499 14V10C19.2499 9.03599 19.2483 8.38843 19.1833 7.90539C19.1213 7.44393 19.0141 7.24643 18.8838 7.11612C18.7534 6.9858 18.5559 6.87858 18.0945 6.81654C17.6115 6.75159 16.9639 6.75 15.9999 6.75H7.99988C7.03587 6.75 6.38831 6.75159 5.90527 6.81654ZM4.99988 21.25C4.58567 21.25 4.24988 21.5858 4.24988 22C4.24988 22.4142 4.58567 22.75 4.99988 22.75H18.9999C19.4141 22.75 19.7499 22.4142 19.7499 22C19.7499 21.5858 19.4141 21.25 18.9999 21.25H4.99988Z"
									fill="var(--icon-border)"
								/>
							</svg>
							{menu === true ? <p className={styles.sidebar_item_text}>My Quizzes</p> : null}
						</div>
					</Link>

					<Link to="/dashboard/community">
						<div
							id="nav-item"
							className={CheckPath(current_url, '/community') === true ? styles.item_is_active : null}
						>
							<svg
								className={styles.sidebar_item_icon}
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.0913 3.26467 14.1827 3.60145 15.1296C4.1276 16.609 4.39067 17.3486 4.4171 17.7689C4.44675 18.2406 4.4246 18.4195 4.28084 18.8697C4.15275 19.2709 3.84348 19.7348 3.22496 20.6626L3 21H12Z"
									fill="var(--icon-inside)"
									fill-opacity="0.15"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M12 3.75C7.44365 3.75 3.75 7.44365 3.75 12C3.75 12.9766 3.98831 13.9792 4.30809 14.8783L4.31311 14.8924C4.57195 15.6201 4.77257 16.1842 4.91115 16.6183C5.04587 17.0403 5.14598 17.4095 5.16562 17.7218C5.1813 17.9712 5.18681 18.1893 5.15832 18.4195C5.12983 18.6497 5.0713 18.8599 4.9953 19.0979C4.90459 19.382 4.75975 19.6573 4.57853 19.9569C4.52323 20.0483 4.46217 20.1457 4.39535 20.25H12C16.5564 20.25 20.25 16.5563 20.25 12C20.25 7.44365 16.5564 3.75 12 3.75ZM2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75H3C2.7234 21.75 2.46926 21.5978 2.33875 21.3539C2.20823 21.11 2.22254 20.8141 2.37596 20.584L2.60092 20.2465C2.91394 19.777 3.135 19.4451 3.29509 19.1805C3.45516 18.9159 3.529 18.7587 3.56638 18.6416C3.63414 18.4294 3.65857 18.325 3.66968 18.2352C3.68079 18.1455 3.68255 18.0383 3.66858 17.816C3.66179 17.7081 3.61715 17.4972 3.4822 17.0745C3.35199 16.6666 3.1597 16.1257 2.89482 15.3809C2.54104 14.3862 2.25 13.2061 2.25 12ZM7.25 10C7.25 9.58579 7.58579 9.25 8 9.25H16C16.4142 9.25 16.75 9.58579 16.75 10C16.75 10.4142 16.4142 10.75 16 10.75H8C7.58579 10.75 7.25 10.4142 7.25 10ZM8 13.25C7.58579 13.25 7.25 13.5858 7.25 14C7.25 14.4142 7.58579 14.75 8 14.75H12C12.4142 14.75 12.75 14.4142 12.75 14C12.75 13.5858 12.4142 13.25 12 13.25H8Z"
									fill="var(--icon-border)"
								/>
							</svg>
							{menu === true ? <p className={styles.sidebar_item_text}>Community</p> : null}
						</div>
					</Link>

					<Link to="/dashboard/leaderboard">
						<div
							id="nav-item"
							className={CheckPath(current_url, '/leaderboard') === true ? styles.item_is_active : null}
						>
							<svg
								className={styles.sidebar_item_icon}
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M5.50049 10.5001L2.00049 7.99999L2.46015 7.54034C3.63938 6.36114 4.229 5.77153 4.93974 5.55221C5.35581 5.42382 5.79485 5.38753 6.22635 5.44588C6.96345 5.54555 7.64186 6.03037 8.99868 6.99999L5.50049 10.5001ZM15.4588 20.5421C16.6395 19.3613 17.2299 18.771 17.4491 18.0592C17.5769 17.6441 17.613 17.2063 17.5551 16.7758C17.4557 16.0377 16.9702 15.3585 15.9992 14L12.5008 17.5L15.0008 21L15.4588 20.5421ZM14.0025 10.9996C15.107 10.9996 16.0025 10.1042 16.0025 8.9996C16.0025 7.89503 15.107 6.9996 14.0025 6.9996C12.8979 6.9996 12.0025 7.89503 12.0025 8.9996C12.0025 10.1042 12.8979 10.9996 14.0025 10.9996Z"
									fill="var(--icon-inside)"
									fill-opacity="0.15"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M16.3418 1.25005L16.4844 1.25009L17.9991 1.25009L18.0485 1.25009C18.7134 1.25005 19.2862 1.25002 19.745 1.3117C20.2366 1.3778 20.7079 1.52685 21.0901 1.9091C21.4724 2.29135 21.6214 2.76261 21.6875 3.25425C21.7492 3.71299 21.7492 4.28586 21.7491 4.95072L21.7491 5.00009L21.7491 6.51481L21.7492 6.65741C21.7497 7.74519 21.7501 8.50114 21.4637 9.19251C21.1773 9.88389 20.6425 10.4182 19.873 11.187L19.873 11.187L19.7721 11.2878L16.9783 14.0816C17.2892 14.5206 17.549 14.8993 17.7497 15.2391C18.0312 15.7155 18.23 16.1685 18.2984 16.6757C18.3708 17.2138 18.3256 17.7611 18.1658 18.28C18.0152 18.7692 17.7447 19.1833 17.3888 19.6071C17.0452 20.0163 16.5832 20.4784 16.0131 21.0485L16.013 21.0485L16.0129 21.0486L16.0129 21.0486L15.9891 21.0724L15.5312 21.5304C15.3753 21.6863 15.1587 21.7657 14.939 21.7475C14.7192 21.7293 14.5187 21.6154 14.3905 21.436L12.3739 18.6127C12.3079 18.6673 12.2429 18.7191 12.1789 18.7679C11.6753 19.1522 11.1433 19.4217 10.4991 19.4217C9.85501 19.4217 9.32293 19.1522 8.81933 18.7679C8.34221 18.4039 7.81245 17.8741 7.17716 17.2388L7.14038 17.202L5.79723 15.8588L5.76046 15.8221L5.76044 15.8221C5.12511 15.1868 4.59532 14.657 4.2313 14.1799C3.84707 13.6763 3.57757 13.1442 3.57757 12.5001C3.57757 11.856 3.84707 11.3239 4.2313 10.8203C4.28 10.7565 4.33167 10.6917 4.38616 10.6258L1.56455 8.61031C1.38515 8.48217 1.27122 8.28158 1.25304 8.06187C1.23486 7.84216 1.31427 7.62557 1.47017 7.46968L1.92983 7.01004L1.9536 6.98627L1.95361 6.98625L1.95362 6.98624C2.52305 6.41682 2.98455 5.95532 3.39328 5.61204C3.8165 5.25659 4.2301 4.98633 4.71859 4.83559C5.23868 4.6751 5.78747 4.62974 6.32686 4.70268C6.83346 4.77119 7.28581 4.96988 7.76164 5.25103C8.10089 5.45148 8.47908 5.71076 8.91743 6.02114L11.7114 3.22712L11.8123 3.12625C12.5811 2.35671 13.1153 1.82192 13.8067 1.53554C14.4981 1.24917 15.254 1.24953 16.3418 1.25005ZM15.4688 13.4698L18.7114 10.2271C19.6218 9.31676 19.9199 8.99992 20.0779 8.61849C20.2359 8.23705 20.2491 7.80226 20.2491 6.51481L20.2491 5.00009C20.2491 4.27178 20.2475 3.801 20.2009 3.45412C20.1572 3.12881 20.0866 3.02685 20.0295 2.96976C19.9724 2.91267 19.8704 2.84206 19.5451 2.79832C19.1982 2.75168 18.7274 2.75009 17.9991 2.75009L16.4844 2.75009C15.197 2.75009 14.7622 2.76337 14.3807 2.92136C13.9993 3.07936 13.6825 3.37742 12.7721 4.28778L8.566 8.49389L6.45197 10.6091C5.9888 11.0761 5.65644 11.4253 5.42383 11.7302C5.1414 12.1003 5.07757 12.3158 5.07757 12.5001C5.07757 12.6844 5.1414 12.8999 5.42383 13.27C5.71947 13.6575 6.17624 14.1165 6.85789 14.7982L6.99951 14.9398L8.4695 13.4698C8.7624 13.1769 9.23727 13.1769 9.53016 13.4698C9.82306 13.7627 9.82306 14.2376 9.53016 14.5305L8.06017 16.0005L8.20104 16.1413C8.8827 16.823 9.34172 17.2798 9.7292 17.5754C10.0994 17.8578 10.3148 17.9217 10.4991 17.9217C10.6834 17.9217 10.8989 17.8578 11.2691 17.5754C11.6566 17.2798 12.1156 16.823 12.7972 16.1413L15.4688 13.4698ZM5.79724 9.14133L7.50433 7.43424L7.84077 7.09762C7.51066 6.86655 7.2396 6.68485 6.99859 6.54245C6.61174 6.31387 6.35634 6.22032 6.12585 6.18915C5.80222 6.14539 5.47294 6.1726 5.16089 6.2689C4.93865 6.33748 4.70206 6.47169 4.35798 6.76067C4.03874 7.02879 3.66804 7.39384 3.15689 7.90437L5.41902 9.52024C5.52886 9.40969 5.64268 9.29588 5.76011 9.17846L5.76046 9.17811L5.79724 9.14133ZM15.0965 19.8436L13.4803 17.581L15.9019 15.1583C16.1335 15.4891 16.3156 15.7607 16.4583 16.0021C16.6871 16.3894 16.7807 16.6452 16.8118 16.876C16.8553 17.1988 16.8281 17.5272 16.7323 17.8385C16.6637 18.0611 16.5294 18.298 16.2401 18.6425C15.972 18.9619 15.6069 19.3326 15.0965 19.8436ZM12.7524 8.99963C12.7524 8.30927 13.3121 7.74963 14.0024 7.74963C14.6928 7.74963 15.2524 8.30927 15.2524 8.99963C15.2524 9.68998 14.6928 10.2496 14.0024 10.2496C13.3121 10.2496 12.7524 9.68998 12.7524 8.99963ZM14.0024 6.24963C12.4837 6.24963 11.2524 7.48084 11.2524 8.99963C11.2524 10.5184 12.4837 11.7496 14.0024 11.7496C15.5212 11.7496 16.7524 10.5184 16.7524 8.99963C16.7524 7.48084 15.5212 6.24963 14.0024 6.24963Z"
									fill="var(--icon-border)"
								/>
							</svg>
							{menu === true ? <p className={styles.sidebar_item_text}>Leaderboard</p> : null}
						</div>
					</Link>

					<Link to="/dashboard/bookmarks">
						<div
							id="nav-item"
							className={CheckPath(current_url, '/bookmarks') === true ? styles.item_is_active : null}
						>
							<svg
								className={styles.sidebar_item_icon}
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M19 21V9C19 6.17157 19 4.75736 18.1213 3.87868C17.2426 3 15.8284 3 13 3H11C8.17157 3 6.75736 3 5.87868 3.87868C5 4.75736 5 6.17157 5 9V21L10.0154 18.134C10.9844 17.5803 11.4689 17.3035 12 17.3035C12.5311 17.3035 13.0156 17.5803 13.9846 18.134L19 21Z"
									fill="var(--icon-inside)"
									fill-opacity="0.15"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M10.9451 2.25L11 2.25H13L13.0549 2.25C14.4225 2.24998 15.5248 2.24996 16.3918 2.36652C17.2919 2.48754 18.0497 2.74643 18.6517 3.34835C19.2536 3.95027 19.5125 4.70814 19.6335 5.60825C19.75 6.47522 19.75 7.57754 19.75 8.94513V9V21C19.75 21.2674 19.6077 21.5145 19.3764 21.6487C19.1452 21.7829 18.86 21.7838 18.6279 21.6512L13.6125 18.7852C13.1154 18.5012 12.7887 18.3154 12.5212 18.1955C12.2686 18.0822 12.123 18.0535 12 18.0535C11.877 18.0535 11.7314 18.0822 11.4788 18.1955C11.2113 18.3154 10.8846 18.5012 10.3875 18.7852L5.37211 21.6512C5.13998 21.7838 4.85479 21.7829 4.62356 21.6487C4.39232 21.5145 4.25 21.2674 4.25 21V9L4.25 8.94513C4.24998 7.57754 4.24996 6.47522 4.36652 5.60825C4.48754 4.70814 4.74643 3.95027 5.34835 3.34835C5.95027 2.74643 6.70814 2.48754 7.60825 2.36652C8.47522 2.24996 9.57754 2.24998 10.9451 2.25ZM7.80812 3.85315C7.07435 3.9518 6.68577 4.13225 6.40901 4.40901C6.13225 4.68577 5.9518 5.07435 5.85315 5.80812C5.75159 6.56347 5.75 7.56458 5.75 9V19.7076L9.64334 17.4829L9.67333 17.4657C10.1322 17.2035 10.5226 16.9804 10.865 16.8268C11.2297 16.6632 11.5918 16.5535 12 16.5535C12.4082 16.5535 12.7703 16.6632 13.135 16.8268C13.4774 16.9803 13.8678 17.2035 14.3266 17.4657L14.3567 17.4829L18.25 19.7076V9C18.25 7.56459 18.2484 6.56347 18.1469 5.80812C18.0482 5.07435 17.8678 4.68577 17.591 4.40901C17.3142 4.13225 16.9257 3.9518 16.1919 3.85315C15.4365 3.75159 14.4354 3.75 13 3.75H11C9.56459 3.75 8.56347 3.75159 7.80812 3.85315Z"
									fill="var(--icon-border)"
								/>
							</svg>
							{menu === true ? <p className={styles.sidebar_item_text}>Bookmarks</p> : null}
						</div>
					</Link>

					<Link to="/dashboard/support">
						<div
							id="nav-item"
							className={CheckPath(current_url, '/support') === true ? styles.item_is_active : null}
						>
							<svg
								className={styles.sidebar_item_icon}
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect
									x="2"
									y="4"
									width="20"
									height="16"
									rx="4"
									fill="var(--icon-inside)"
									fill-opacity="0.15"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M10 3.25H9.94358C8.10582 3.24998 6.65019 3.24997 5.51098 3.40313C4.33856 3.56076 3.38961 3.89288 2.64124 4.64124C1.89288 5.38961 1.56076 6.33856 1.40314 7.51098C1.24997 8.65019 1.24998 10.1058 1.25 11.9436V12V12.0564C1.24998 13.8942 1.24997 15.3498 1.40314 16.489C1.56076 17.6614 1.89288 18.6104 2.64124 19.3588C3.38961 20.1071 4.33856 20.4392 5.51098 20.5969C6.65018 20.75 8.1058 20.75 9.94354 20.75H9.94359H10H14H14.0564H14.0565C15.8942 20.75 17.3498 20.75 18.489 20.5969C19.6614 20.4392 20.6104 20.1071 21.3588 19.3588C22.1071 18.6104 22.4392 17.6614 22.5969 16.489C22.75 15.3498 22.75 13.8942 22.75 12.0565V12.0564V12V11.9436V11.9435C22.75 10.1058 22.75 8.65018 22.5969 7.51098C22.4392 6.33856 22.1071 5.38961 21.3588 4.64124C20.6104 3.89288 19.6614 3.56076 18.489 3.40313C17.3498 3.24997 15.8942 3.24998 14.0564 3.25H14H10ZM3.7019 5.7019C4.12511 5.27869 4.70476 5.02502 5.71085 4.88976C6.73851 4.75159 8.09318 4.75 10 4.75H14C15.9068 4.75 17.2615 4.75159 18.2892 4.88976C19.2952 5.02502 19.8749 5.27869 20.2981 5.7019C20.7213 6.12511 20.975 6.70476 21.1102 7.71085C21.2484 8.73851 21.25 10.0932 21.25 12C21.25 13.9068 21.2484 15.2615 21.1102 16.2892C20.975 17.2952 20.7213 17.8749 20.2981 18.2981C19.8749 18.7213 19.2952 18.975 18.2892 19.1102C17.2615 19.2484 15.9068 19.25 14 19.25H10C8.09318 19.25 6.73851 19.2484 5.71085 19.1102C4.70476 18.975 4.12511 18.7213 3.7019 18.2981C3.27869 17.8749 3.02502 17.2952 2.88976 16.2892C2.75159 15.2615 2.75 13.9068 2.75 12C2.75 10.0932 2.75159 8.73851 2.88976 7.71085C3.02502 6.70476 3.27869 6.12511 3.7019 5.7019ZM6.41603 7.37596C6.07138 7.1462 5.60573 7.23933 5.37596 7.58398C5.1462 7.92862 5.23933 8.39427 5.58398 8.62404L11.584 12.624C11.8359 12.792 12.1641 12.792 12.416 12.624L18.416 8.62404C18.7607 8.39427 18.8538 7.92862 18.624 7.58398C18.3943 7.23933 17.9286 7.1462 17.584 7.37596L12 11.0986L6.41603 7.37596Z"
									fill="var(--icon-border)"
								/>
							</svg>
							{menu === true ? <p className={styles.sidebar_item_text}>Support</p> : null}
						</div>
					</Link>
				</div>

				<div className={styles.sidebar_bottom}>
					<div onClick={() => setIsModal(true)}>
						<div
							id="nav-item"
							className={isModal === true ? styles.item_is_active : null}
						>
							<svg className={styles.sidebar_item_icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" clipRule="evenodd" fill="var(--icon-border)" d="M10.25 7C10.25 4.92893 11.9289 3.25 14 3.25C15.8142 3.25 17.3275 4.53832 17.675 6.25H21C21.4142 6.25 21.75 6.58579 21.75 7C21.75 7.41421 21.4142 7.75 21 7.75H17.675C17.3275 9.46168 15.8142 10.75 14 10.75C11.9289 10.75 10.25 9.07107 10.25 7ZM14 4.75C15.2426 4.75 16.25 5.75736 16.25 7C16.25 8.24264 15.2426 9.25 14 9.25C12.7574 9.25 11.75 8.24264 11.75 7C11.75 5.75736 12.7574 4.75 14 4.75ZM2 6.25C1.58579 6.25 1.25 6.58579 1.25 7C1.25 7.41421 1.58579 7.75 2 7.75H8C8.41421 7.75 8.75 7.41421 8.75 7C8.75 6.58579 8.41421 6.25 8 6.25H2ZM2 16.25C1.58579 16.25 1.25 16.5858 1.25 17C1.25 17.4142 1.58579 17.75 2 17.75H5.32501C5.67247 19.4617 7.18578 20.75 9 20.75C11.0711 20.75 12.75 19.0711 12.75 17C12.75 14.9289 11.0711 13.25 9 13.25C7.18578 13.25 5.67247 14.5383 5.32501 16.25H2ZM6.75 17C6.75 18.2426 7.75736 19.25 9 19.25C10.2426 19.25 11.25 18.2426 11.25 17C11.25 15.7574 10.2426 14.75 9 14.75C7.75736 14.75 6.75 15.7574 6.75 17ZM15 16.25C14.5858 16.25 14.25 16.5858 14.25 17C14.25 17.4142 14.5858 17.75 15 17.75H21C21.4142 17.75 21.75 17.4142 21.75 17C21.75 16.5858 21.4142 16.25 21 16.25H15Z" />
							</svg>

							{menu === true ? <p className={styles.sidebar_item_text}>Settings</p> : null}
						</div>
					</div>
					<Link to="/dashboard/profile" id="nav-item-profile">
						<img
							className={styles.profile_nav}
							src={`https://swiftapi.vercel.app/${user.avatar}`}
						/>

						{menu === true ? (
							<p className={styles.sidebar_item_text}>{user.name}</p>
						) : null}
					</Link>
				</div>
			</header>
			<section className="body-dash">{page}</section>
			{
				CheckPath(current_url, '/add-quiz') === true ? null : (
					<section className={styles.acc_actions}>
						<div className={styles.action_item}>
							<p className={styles.action_item_acc_name}> {user.coins} Coins </p>
							<img className={styles.actions_bar_icon} src={coin} />
						</div>

						<div onClick={() => setDropdown(!dropdown)} className={styles.action_item}>
							<p className={styles.action_item_acc_name}>{user.name}</p>
							<img
								style={{ marginLeft: '.3em' }}
								className={styles.actions_bar_icon}
								src={`https://swiftapi.vercel.app/${user.avatar}`}
							/>
						</div>

						{dropdown === true ? (
							<div className={styles.acc_actions_dropwdown}>
								<div className={styles.action_dropdown_item}>
									<p className={styles.action_dropdown_item_name}>Profile</p>
									<svg
										className={styles.action_item_icon}
										viewBox="0 0 24 24"
										fill="var(--icon-inside)"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M8.75 7C8.75 5.20507 10.2051 3.75 12 3.75C13.7949 3.75 15.25 5.20507 15.25 7C15.25 8.79493 13.7949 10.25 12 10.25C10.2051 10.25 8.75 8.79493 8.75 7ZM12 2.25C9.37665 2.25 7.25 4.37665 7.25 7C7.25 9.62335 9.37665 11.75 12 11.75C14.6234 11.75 16.75 9.62335 16.75 7C16.75 4.37665 14.6234 2.25 12 2.25ZM5.75 19C5.75 17.2051 7.20507 15.75 9 15.75H15C16.7949 15.75 18.25 17.2051 18.25 19C18.25 19.6904 17.6904 20.25 17 20.25H7C6.30964 20.25 5.75 19.6904 5.75 19ZM9 14.25C6.37665 14.25 4.25 16.3766 4.25 19C4.25 20.5188 5.48122 21.75 7 21.75H17C18.5188 21.75 19.75 20.5188 19.75 19C19.75 16.3766 17.6234 14.25 15 14.25H9Z"
											fill="var(--icon-border)"
										/>
									</svg>
								</div>
								<div className={styles.action_dropdown_item}>
									<p className={styles.action_dropdown_item_name}> Logout </p>
									<svg
										className={styles.action_item_icon}
										viewBox="0 0 24 24"
										fill="var(--icon-inside)"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M13.5302 7.46975C13.2374 7.17686 12.7625 7.17686 12.4696 7.46975C12.1767 7.76264 12.1767 8.23752 12.4696 8.53041L15.1893 11.2501L2.99991 11.2501C2.5857 11.2501 2.24991 11.5859 2.24991 12.0001C2.24991 12.4143 2.5857 12.7501 2.99991 12.7501L15.1893 12.7501L12.4696 15.4698C12.1767 15.7626 12.1767 16.2375 12.4696 16.5304C12.7625 16.8233 13.2374 16.8233 13.5302 16.5304L17.5302 12.5304C17.8231 12.2375 17.8231 11.7626 17.5302 11.4698L13.5302 7.46975ZM16.2 2.75C17.0525 2.75 17.6467 2.75058 18.1093 2.78838C18.5632 2.82547 18.824 2.8946 19.0215 2.99523C19.4448 3.21095 19.789 3.55516 20.0048 3.97852C20.1054 4.17604 20.1745 4.4368 20.2116 4.89068C20.2494 5.35331 20.25 5.94755 20.25 6.8L20.25 17.2C20.25 18.0525 20.2494 18.6467 20.2116 19.1093C20.1745 19.5632 20.1054 19.824 20.0048 20.0215C19.789 20.4448 19.4448 20.789 19.0215 21.0048C18.824 21.1054 18.5632 21.1745 18.1093 21.2116C17.6467 21.2494 17.0525 21.25 16.2 21.25L11.8 21.25C10.9475 21.25 10.3533 21.2494 9.89068 21.2116C9.43681 21.1745 9.17604 21.1054 8.97852 21.0048C8.55516 20.789 8.21095 20.4448 7.99524 20.0215C7.8946 19.824 7.82547 19.5632 7.78838 19.1093C7.75058 18.6467 7.75 18.0525 7.75 17.2L7.75 16C7.75 15.5858 7.41421 15.25 7 15.25C6.58579 15.25 6.25 15.5858 6.25 16L6.25 17.2L6.25 17.2321L6.25 17.2321C6.24999 18.045 6.24999 18.7006 6.29336 19.2315C6.33803 19.7781 6.43239 20.2582 6.65873 20.7025C7.01825 21.4081 7.59193 21.9817 8.29754 22.3413C8.74176 22.5676 9.2219 22.662 9.76853 22.7066C10.2994 22.75 10.955 22.75 11.7679 22.75L11.8 22.75L16.2 22.75L16.2321 22.75C17.045 22.75 17.7006 22.75 18.2315 22.7066C18.7781 22.662 19.2582 22.5676 19.7025 22.3413C20.4081 21.9817 20.9817 21.4081 21.3413 20.7025C21.5676 20.2582 21.662 19.7781 21.7066 19.2315C21.75 18.7006 21.75 18.0449 21.75 17.2321L21.75 17.2L21.75 6.8L21.75 6.76788C21.75 5.95505 21.75 5.29944 21.7066 4.76853C21.662 4.22189 21.5676 3.74175 21.3413 3.29754C20.9817 2.59193 20.4081 2.01825 19.7025 1.65872C19.2582 1.43239 18.7781 1.33803 18.2315 1.29336C17.7006 1.24999 17.0449 1.24999 16.2321 1.25L16.2 1.25L11.8 1.25L11.7679 1.25C10.9551 1.24999 10.2994 1.24999 9.76853 1.29336C9.2219 1.33803 8.74175 1.43239 8.29754 1.65873C7.59193 2.01825 7.01825 2.59193 6.65873 3.29754C6.43239 3.74175 6.33803 4.2219 6.29336 4.76853C6.24999 5.29944 6.24999 5.95506 6.25 6.7679L6.25 6.8L6.25 8C6.25 8.41421 6.58579 8.75 7 8.75C7.41421 8.75 7.75 8.41421 7.75 8L7.75 6.8C7.75 5.94755 7.75058 5.35331 7.78838 4.89068C7.82546 4.43681 7.8946 4.17604 7.99524 3.97852C8.21095 3.55516 8.55516 3.21095 8.97852 2.99524C9.17604 2.8946 9.4368 2.82547 9.89068 2.78838C10.3533 2.75058 10.9475 2.75 11.8 2.75L16.2 2.75Z"
											fill="var(--icon-border)"
										/>
									</svg>
								</div>
							</div>
						) : null}
					</section>
				)
			}
		</main >
	);
}
