import { createContext, useContext } from 'react';  

export const UserContext = createContext();
function ProfilePage() {
const User=useContext(UserContext);
  return (
    <div>
      <h1>{User.name} Profile Page</h1>
      <p>Age: {User.age}</p>
    </div>
  )
}
export default ProfilePage;


 