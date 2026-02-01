import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

export const fetchUserData = async ({username, location, minRepos}) => {  
try {
    let query = `https://api.github.com/search/users?q=${username}`;
    if (location) {
        query += `+location:${location}`;
    }
    if (minRepos) {
        query += `+repos:>=${minRepos}`;
    }
    const response = await axios.get(query);
    return response.data.items; 
} catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
}};

function Search() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const mapUserData = (userData) => {
    return {
      ...userData,
      followers: userData.followers || 0,
      following: userData.following || 0,
      public_repos: userData.public_repos || 0
    };
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

    return (
    <div>   
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={username} 
                onChange={handleInputChange} 
                placeholder="Enter GitHub username" 
            />
            <button type="submit">Search</button>
        </form>
        
        {loading && <p>Loading...</p>}
        {error && <p> Looks like we cant find the user.</p>}
        {userData && (

            
             <div>
    <img 
      src={userData.avatar_url} 
      alt={userData.login}
    />
    <h2>{userData.name || userData.login}</h2>
    <p>Username: {userData.login}</p>
    
     
    <a 
      href={userData.html_url} 
      target="_blank" 
      rel="noopener noreferrer"
    >
      View GitHub Profile
    </a>
  </div>

        )}
    </div>
  );
}}
   
       
           
    
       
           