const BASE_URL = 'http://localhost:3000/api/v1';

const getJwt = () => {
  const token = localStorage.getItem('token');
  if (!token) return '';
  return `Bearer ${token}`;
};

export const createUser = (userName) => {
  return fetch(`${BASE_URL}/users`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userName }),
  }).then(res => res.json().then(json => {
    if (!res.ok) {
      return Promise.reject(json);
    }
    return json;
  }
  ));
};

export const createBook = (book) => {
  return fetch(`${BASE_URL}/books`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: getJwt(),
    },
    body: JSON.stringify(book),
  }).then(res => res.json().then(json => {
    if (!res.ok) {
      return Promise.reject(json);
    }
    return json;
  }
  ));
};

export const fetchBooks = () => {
  return fetch(`${BASE_URL}/books`).then(res => res.json());
};
