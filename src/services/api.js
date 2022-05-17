import axios from 'axios';

const api = axios.create({
    baseURL: 'https://627a87eb4a5ef80e2c1c4062.mockapi.io/'
})

export default api;