import axios from 'axios';


const baseURL = 'https://red-gifted-squid.cyclic.app/api/v1';
const hitApi = axios.create({
  baseURL: baseURL,
});
hitApi.interceptors.request.use(request => {
  return request;
});
export const hitUsers = requestParam => {
  return hitApi.get('/transferlocal', requestParam);
};
export const hitOtp = requestParam => {
  return hitApi.post('/otp_verification', requestParam);
};
