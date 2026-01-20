import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

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


function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <UserProfile name="Bob" age="30" bio="Enjoys cooking and traveling" />
      <Footer />
    </div>
  );
}

export default App;
