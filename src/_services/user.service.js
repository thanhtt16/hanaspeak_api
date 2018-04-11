import { authHeader } from '../_helpers';
import apiCaller from '../_helpers/call-api';

export const userService = {
    login,
    logout,
    getAll
};

function login(username, password) {
    return new Promise((resolve, reject)=>{
        let body = {
            username: username,
            password: password
        }
        apiCaller('login', null, 'POST', body)
        .then(res => {
            let user = res.data.data;
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                resolve(user);
                // return user;
            }
        })
        .catch(error=>{
            reject(false);
        })
    })
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch('/users', requestOptions).then(handleResponse);
}

function handleResponse(response) {
    if (!response.ok) { 
        return Promise.reject(response.statusText);
    }

    return response.json();
}