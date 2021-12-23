import React from 'react';
import * as styles from '../../Admin.module.scss';
import { ReactComponent as Delete } from '../../../../../../assets/images/delete.svg';
import { deleteUserAction } from '../../../../../../reduxComponents/actions/Admin';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const UserCard = ({ profile, name, oneUser, _id }) => {
  const dispatch = useDispatch();

  const handleRemoveUser = (e) => {
    dispatch(deleteUserAction(e));
  };

  return (
    <div className={styles.rank}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className={styles.rank_avatar}>
          <Link to={`profile/${oneUser.username}`}>
            <img
              src={`https://swiftapi.vercel.app/${oneUser.avatar}`}
              className={styles.rank_avatar_image}
            />
          </Link>
        </div>
        <div className={styles.rank_name}>
          <Link to={`profile/${oneUser.username}`}>
            <h3 className={styles.hallusername}>{name}</h3>
          </Link>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Delete
          style={{ cursor: 'pointer' }}
          onClick={() => handleRemoveUser(_id)}
        />
      </div>
    </div>
  );
};

export default UserCard;
