import axios from 'axios';

export function requestGetDB() {
  return axios.request({
    method: 'GET',
    url: 'http://localhost:3000/user',
  });
}
