import React from 'react';
import UserContext  from './UserContext';
import UserInfo from './UserInfo';

function ProfilePage() {
  const user = React.useContext(UserContext);

  return <UserInfo user={user} />;
}

export default ProfilePage;
