import axios from 'axios';

const baseURL = 'https://63a56ed32a73744b008dcf7e.mockapi.io/api/v1/';
const hitApi = axios.create({
  baseURL: baseURL,
});
hitApi.interceptors.request.use(request => {
  return request;
});
export const hitUsers = requestParam => {
  return hitApi.get('users', requestParam);
};
