import React from 'react';
import UserCard from './Cards/UserCard';
import { useSelector } from 'react-redux';

const UserMembers = () => {
  const users = useSelector((state) => state.admin.allUsers);
  return users.map((user, index) => {
    return <UserCard key={index} {...user} oneUser={user} />;
  });
};

export default UserMembers;
