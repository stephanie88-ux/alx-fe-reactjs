import {axios} from 'axios';
import {fetchUserDtata} from './githubService';


export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};

export const userFetchData = async ({username, location, minRepos}) => {
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
 