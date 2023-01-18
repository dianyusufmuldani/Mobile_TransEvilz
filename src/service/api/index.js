import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


// import cors from 'cors'

const baseURL = 'https://red-gifted-squid.cyclic.app/api/v1/';
const hitApi = axios.create({
  baseURL: baseURL,

});


hitApi.interceptors.request.use(request => {
  console.log('request', request);
  return request;
});

hitApi.interceptors.response.use(response => {
  console.log('response ', response);
  return response;
});

export const hitOtp = requestParam => {
  return hitApi.post('otp_verification', requestParam);
};
export const hitRegister = requestParam => {
  return hitApi.post('register', requestParam);
};
export const hitLogin = requestParam => {
  return hitApi.post('login', requestParam);
};
export const hitNewPassword = requestParam => {
  return hitApi.put('new_password', requestParam);
};

export const hitPin = async(requestParam) => {
  const token = await AsyncStorage.getItem('token')
  console.log('isi token', token)
  return hitApi.post('pin', requestParam,{headers:{Authorization: `Bearer ${token}`}});
};

export const hitCreatePin = async(requestParam) => {
  const token = await AsyncStorage.getItem('token')
  console.log('isi token', token)
  return hitApi.put('new_pin', requestParam,{headers:{Authorization: `Bearer ${token}`}});
};
