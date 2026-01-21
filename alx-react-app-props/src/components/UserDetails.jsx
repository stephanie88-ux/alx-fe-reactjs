import { useContext } from 'react';
import UserContext from '../UserContext';

function UserDetails() {
  // Consume UserContext using useContext hook
  const userData = useContext(UserContext);

  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '20px',
      margin: '10px',
      borderRadius: '8px'
    }}>
      <h3>User Details</h3>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Email:</strong> {userData.email}</p>
      <p><strong>Age:</strong> {userData.age}</p>
      <p><strong>Bio:</strong> {userData.bio}</p>
    </div>
  );
}

export default UserDetails;
