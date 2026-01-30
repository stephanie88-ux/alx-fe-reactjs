import {axios} from 'axios';
import {fetchUserDtata} from './githubService';


export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};


 