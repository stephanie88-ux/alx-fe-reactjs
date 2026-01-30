import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

   
  const handleSubmit = async (e) => {
    e.preventDefault();
    
     
    if (!username.trim()) return;
    
    
    setLoading(true);
    setError(false);
    setUserData(null);
    
    try {
       
      const data = await fetchUserData(username);
      setUserData(data);
      
    } catch (err) {
      
      setError(true);
      
    } finally {
       
      setLoading(false);
    }
}};

   
       
           