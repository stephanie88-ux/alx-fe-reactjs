import React from 'react';
import UserContext  from './UserContext';
import UserInfo from './UserInfo';

function UserProfile() {
  const user = React.useContext(UserContext);

  return <UserInfo user={user} />;
}

export default UserProfile;

 
 