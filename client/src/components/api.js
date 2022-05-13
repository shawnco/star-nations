import axios from 'axios';
const api_url = 'http://localhost:5000/api/';

class Api {
    static get(route, data) {
        return axios.get(api_url + route, data);
    }

    static post(route, data) {
        return axios.post(api_url + route, data);
    }

    static put(route, data) {
        return axios.put(api_url + route, data);
    }

    static del(route, data) {
        return axios.delete(api_url + route, data);
    }
};
export default Api;