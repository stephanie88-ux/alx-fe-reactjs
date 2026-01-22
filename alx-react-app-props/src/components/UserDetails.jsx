import React from 'react';  
import userContext from '../contexts/UserContext';

 function UserDetails() { 
 const userData = useContext(UserContext);
  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
