import axios from "axios";

const BASE_URL = "http://localhost:8080";
const SERVICE_URL = "/ecommorce/api/v1";

export const createUser = (data) => {
    return axios.post(`${BASE_URL}/user/create`, data)
        .then(response => response.data);
};

export const login = (data) => {
    return axios.post(`${BASE_URL}${SERVICE_URL}/login`, data)
        .then(response => response.data);
};

export const logout = () => {
    return axios.post(`${BASE_URL}${SERVICE_URL}/login/logout`)
        .then(response => response.data);
};
