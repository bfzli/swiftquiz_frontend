import React from 'react';
import * as styles from '../Styles/UserCard.module.scss';
import { ReactComponent as Eye } from '../../../../../../assets/images/delete.svg';
import { ReactComponent as Edit } from '../../../../../../assets/images/edit.svg';
import { ReactComponent as Delete } from '../../../../../../assets/images/delete.svg';
import { deleteUserAction } from '../../../../../../reduxComponents/actions/Admin';
import { useDispatch } from 'react-redux';

const UserCard = ({ profile, name, activity, _id }) => {
	const dispatch = useDispatch();

	const handleRemoveUser = (e) => {
		dispatch(deleteUserAction(e));
	};

	return (
		<div className={styles.admin_member}>
			<div className={styles.admin_info}>
				<img src={profile} />
				<div className={styles.member_dscp}>
					<h2 className={styles.member_name}>{name}</h2>
					<p className={styles.member_activity}>{activity}</p>
				</div>
			</div>
			<div className={styles.member_config}>
				<Eye />
				<Edit />
				<Delete onClick={() => handleRemoveUser(_id)} />
			</div>
		</div>
	);
};

export default UserCard;
