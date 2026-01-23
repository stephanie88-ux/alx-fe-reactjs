import { BrowserRoute, Routes, Route } from "react-router-dom";  

import Home from "./my-company/Home";
import About from "./my-company/About";
import services from "./my-company/Services";
import Contact from "./my-company/Contact";


function App() {
  return (
    <BrowserRouter>

    <nav style ={{ padding: '10px', backgroundColor: '#f0f0f0',  marginBottom: '20px' }}>
    <Link to="/" style ={{ color: 'white', padding: '5px' }}>Home</Link>
    <Link to="/about" style ={{ backgroundColor: '#ccc', padding: '5px' }}>About</Link>
    <Link to="/services" style ={{ color: 'white', padding: '5px' }}>Services</Link>
    <Link to="/contact" style ={{ color: 'white', padding: '5px' }}>Contact</Link>
    </nav>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App;