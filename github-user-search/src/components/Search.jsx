import {useState} from 'react';
import {fetchUserData} from '../api/githubApi';

export default function Search({onUserDataFetched}) {
    const [username, setUsername] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        setUsername(e.target.value);
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!username) return;

        setLoading(true);
        setError(null);
        try {
            const userData = await fetchUserData(username);
            onUserDataFetched(userData);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={username}
                onChange={handleInputChange}
                placeholder="Enter GitHub username"
            />
            <button disabled={loading}>Search</button>
        </form>
    );

};
 
  {/* Loading State */}
      {loading && <p>Loading...</p>}
      
      {/* Error State */}
      {error && <p>Looks like we cant find the user</p>}
      
      {/* Success State - Display User Data */}
      {userData && !loading && !error && (
<div> 
    <img src={userData.avatar_url} alt="User Avatar" width="100" />
    <h2>{userData.name || userData.login}</h2>
    <p>{userData.bio}</p>
    <p>Followers: {userData.followers} | Following: {userData.following}</p>
    <a href={userData.html_url} target="_blank" rel="noopener noreferrer">View Profile on GitHub</a>
</div>
      )};