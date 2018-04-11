import { authHeader } from '../_helpers';
import axios from 'axios';

export const userService = {
    login,
    logout,
    getAll
};

function login(username, password) {
    return new Promise((resolve, reject)=>{
        axios({
            method: 'POST',
            url: 'http://localhost:5000/api/v1/login',
            headers: { 'Content-Type': 'application/json' },
            data: {
                username: username,
                password: password
            }
        }).then(res => {
            let user = res.data.data;
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                resolve(user);
                // return user;
            }
          })
          .catch(error=>{
              console.log(error);
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