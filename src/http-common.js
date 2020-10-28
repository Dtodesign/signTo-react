import axios from 'axios';

export default axios.create({
    baseURL: "https://localhost:44321/api/",
    headers: {
        'Content-type': 'application/json'
    }
});