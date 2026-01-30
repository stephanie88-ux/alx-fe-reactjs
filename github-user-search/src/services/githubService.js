import {userState} from react;
import {fetchUserData} from '../services/githubService'; 
import {axios} from 'axios';

export default function Search({onUserDataFetched}) {
    const [username, setUsername] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    };
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
        //api.github.com/users/${username    
    };

