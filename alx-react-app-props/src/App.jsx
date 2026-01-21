import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContext from './UserContext';
import ProfilePage from './components/ProfilePage';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  // User data to share via Context
  const userData = {
    name: 'Alice Johnson',
    email: 'alice@example.com',
    age: 28,
    bio: 'Passionate developer and tech enthusiast'
  };

  return (
    <UserContext.Provider value={userData}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
