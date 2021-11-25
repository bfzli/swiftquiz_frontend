import React from 'react';
import { admins } from './testarrays/admins';
import UserCard from './Cards/UserCard';
import * as styles from './Styles/UserMembers.module.scss';
import { useSelector } from 'react-redux';

const UserMembers = () => {
	const users = useSelector((state) => state.admin.allUsers);

	return (
		<div className={styles.admin_members}>
			<h2 className={styles.title_admin}>USERS</h2>
			{users.map((user, index) => {
				return <UserCard key={index} {...user} />;
			})}
		</div>
	);
};
//profile={user.profile} name={user.name} activity={user.activity} userId={user._id}

export default UserMembers;
