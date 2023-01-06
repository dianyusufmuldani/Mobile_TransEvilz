import axios from 'axios';

const baseURL = 'https://transevilz-default-rtdb.firebaseio.com';
const hitApi = axios.create({
  baseURL: baseURL,
});
hitApi.interceptors.request.use(request => {
  return request;
});
export const hitUsers = requestParam => {
  return hitApi.get('/users.json', requestParam);
};
