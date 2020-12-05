import axios from 'axios';
import { API_URL } from './../Constants/constants'
export const callApi = (endpoint, method, data) => {
    return (axios({
        method: method,
        url: `${API_URL}/${endpoint}`,
        data: data
    }).catch((error) => {
        console.log("Error When Call API", error);
    }));
}