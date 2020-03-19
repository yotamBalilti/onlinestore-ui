import cookie from 'react-cookies';

export default class Network {
    getHeaders(customHeaders) {
        let headers = customHeaders || {
            'Content-Type': 'application/json'
        };
        if(this.getToken()){
            headers.Authorization = this.getToken();
        }
        return headers;
    }

    getToken() {
        return cookie.load('user');
    }

    send(method, url, data, headers) {
        return fetch('http://localhost:4000/api' + url, {
            method: method,
            body: JSON.stringify(data),
            headers: this.getHeaders(headers)
        });
    }
}