const BASE_URL = 'http://localhost:3000/api/v1';

const getJwt = () => {
  const token = localStorage.getItem('token');
  if (!token) return '';
  return `Bearer ${token}`;
};

export const createUser = (userName) => {
  return fetch(`${BASE_URL}/users`, {
    method: 'post',
    body: JSON.stringify({ userName }),
  }).then(res => res.json());
};
