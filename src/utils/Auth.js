import axios from 'axios';
let jwt = localStorage.getItem('jwt');
export default class Auth {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  _check(response) {
    if (response.status === 201) {
      return response.data;
    } else {
      return Promise.reject("Произошла ошибка");
    }
  }

  authorize(password, login) {
    return axios.post(`${this._url}/signin`, {
      login: login,
      password: password
    }, {
      headers: this._headers,
      withCredentials: true
    })
    .then(response => response.data)
    .catch(error => {
      console.error('Ошибка авторизации:', error);
      throw error;
    });
  }

  register(password, login) {
    return axios.post(`${this._url}/signup`, {
      login: login,
      password: password
    }, {
      headers: this._headers,
      withCredentials: true
    })
    .then(response => response.data)
    .catch(error => {
      console.error('Ошибка авторизации:', error);
      throw error;
    });
  }

  getContent() {
    return axios.get(`${this._url}/users/me`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`,
      },
      withCredentials: true
    })
    .then(response => response.data)
    .catch(error => {
      console.error('Ошибка получения контента:', error);
      throw error;
    });
  }


  getUsers() {
    return axios.get(`${this._url}/users`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`,
      },
      withCredentials: true
    })
    .then(response => response.data)
    .catch(error => {
      console.error('Ошибка получения контента:', error);
      throw error;
    });
  }

  patchUsers(id, password) {
    return axios.patch(`${this._url}/users/${id}`, {password}, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`,
      },
      withCredentials: true
    })
    .then(response => response.data)
    .catch(error => {
      console.error('Ошибка получения контента:', error);
      throw error;
    });
  }

  delUsers(id) {
    return axios.delete(`${this._url}/users/${id}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`,
      },
      withCredentials: true
    })
    .then(response => response.data)
    .catch(error => {
      console.error('Ошибка получения контента:', error);
      throw error;
    });
  }

  backUser() {
    const jwt = localStorage.getItem('jwt');
    if (!jwt) {
      console.error('Токен отсутствует');
      return;
    }
  
    console.log('Bearer token:', `Bearer ${jwt}`);
    return axios.post(`https://serverowwidea.netlify.app/.netlify/functions/api/users/backuser`, {}, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`,
      }
    })
    .then(response => {
      console.log('Ответ от сервера:', response);
      return this._check(response);
    })
    .catch(error => {
      console.error('Ошибка запроса к backUser:', error);
      throw error;
    });
  }
  
}

export const vandalAuth = new Auth({
  url: 'http://localhost:3001',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    
},
});
