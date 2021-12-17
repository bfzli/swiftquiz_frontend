import React, { useEffect } from 'react';
import UserMembers from '../../components/pages/AdminPanel/Users/UserMembers';
import { useDispatch } from 'react-redux';
import { fetchAllUsersAction } from '../../reduxComponents/actions/Admin';
import * as styles from '../../components/pages/AdminPanel/AdminPanel.module.scss';
import Dashlayout from '../Dashboard/Dashlayout'

const AdminPanel = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAllUsersAction());
	});

	return (
		<Dashlayout>
			<div className={styles.admin_panel}>
				<h2 className={styles.panel_title}>Welcome back, admin</h2>

				<div className={styles.admin_content}>
					<div className={styles.left_content}>
						<UserMembers />
					</div>
				</div>
			</div>
		</Dashlayout>
	);
};

export default AdminPanel;
