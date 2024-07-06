import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://am111.05.testing.place/api/v1/",
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }
});

export default axiosInstance;