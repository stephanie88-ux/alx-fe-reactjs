import { Link } from 'react-router-dom';

function Navbar() {
  return (

    <nav style={{
      backgroundColor: '#333',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'center',
    }}>
      <Link to="/" style={{
        color: 'white',
        padding: '0.5rem 1rem',
        display: 'flex',
        justifyContent: 'center',
      }}>
        Home
      </Link>
      <Link to="/about" style={{
        color: 'white',
        padding: '0.5rem 1rem',
        display: 'flex',
        justifyContent: 'center',

      }}>
        About
      </Link>
      <Link to="/services" style={{
        color: 'white',
        padding: '0.5rem 1rem',
        display: 'flex',
        justifyContent: 'center',   

      }}>
        Services
      </Link>
      <Link to="/contact" style={{
        color: 'white',
        padding: '0.5rem 1rem',
        display: 'flex',
        justifyContent: 'center',

      }}>
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;