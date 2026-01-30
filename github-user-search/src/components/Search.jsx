import {useState} from 'react';
import {fetchUserData} from './githubService';

const search = {
    username: '',
    location: '',
    minRepos: 0,
};
 
const [results, setResults] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

const handlesubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    fetchUserData(search)
        .then((data) => {
            setResults(data);
            setLoading(false);
        })
        .catch((err) => {
            setError('Error fetching data');
            setLoading(false);
        });
        
     
}



   