import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import UserInfo from './UserInfo';

function ProfilePage() {
  const user = useContext(UserContext);

  return <UserInfo user={user} />;
}

export default ProfilePage;
