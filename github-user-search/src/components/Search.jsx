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
        {error && <p>looks like we cant find the user</p>}
        {userData && (
            <div>
                <h2>{userData.login}</h2>
                <img src={userData.avatar_url} alt={userData.login} width="100" />
                <p>Followers: {userData.followers}</p>
                <p>Following: {userData.following}</p>
                <p>Public Repos: {userData.public_repos}</p>
            </div>
        )}
    </div>
    )
}};

   
       
           
    
       
           