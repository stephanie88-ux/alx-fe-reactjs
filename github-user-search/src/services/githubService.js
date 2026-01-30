export const searchUsers = async (query) => {   
const {username, location, minRepos} = query;

let queryParts = [];

if (username) {
    queryParts.push(`${username} in:login`);

}
if (location) { 
    queryParts.push(`location:${location}`);
}
if (miniRepos) {
    queryParts.push(`repos:>=${miniRepos}`);
}

const queryString = queryParts.join('+');
const response = await fetch(`https://api.github.com/search/users?q=${queryString}`);
const data = await response.json();
return data.items;
};


 