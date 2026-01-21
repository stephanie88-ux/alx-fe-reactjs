import { BrowserRoute, Routes, Route } from "react-router-dom";  
import Home from "./my-company/Home";
import About from "./my-company/About";
import services from "./my-company/Services";
import Contact from "./my-company/Contact";

function App() {
  return (
    <BrowserRoute>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRoute>
  )
}

export default App;