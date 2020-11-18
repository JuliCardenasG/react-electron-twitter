import axios from 'axios';

// We need a Bearer token to connect with Twitter API.
// Here we leverage on Electron Node process to get the token using dotenv
const bearerToken = process.env.REACT_APP_BEARER_TOKEN


// Wrapper for Axios API call
export const api = axios.create({
    baseURL: 'https://api.twitter.com/1.1',
    headers: {

        'Authorization': 'Bearer ' + bearerToken,
        'Content-Type': 'application/json'
    },
})
