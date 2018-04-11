import axios from 'axios';
import * as API_CONFIG from '../_constants/api.config';

export default function callApi(endpoint, headers, method = 'GET', body) {
    if (!headers) 
        headers = {
            'Content-Type': 'application/json'
        }
    return axios({
        method: method,
        url: `${API_CONFIG.BASE_API_URL}/${endpoint}`,
        headers: headers,
        data: body
    }).catch(error => {
        console.log(error);
    })
}