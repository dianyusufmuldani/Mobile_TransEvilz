import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';
import {hitLogin, hitNewPassword, hitRegister} from '../../api';
const initialState = {
  data: null,
  login: null,
  noHp: null,
  registerStatus:null,
  newPassword:null
};
export const UsersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.data = action.payload;
    },
    setLogin: (state, action) => {
      state.login = action.payload;
    },
    setNoHpRedux: (state, action) => {
      state.noHp = action.payload;
    },
    setRegisterStatus: (state, action) => {
      state.registerStatus = action.payload;
    },
    setNewPassword: (state, action) => {
      state.newPassword = action.payload;
    },
  },
});

export const getUsers = request => async dispatch => {
  try {
    const response = await hitRegister(request);
    dispatch(setRegisterStatus(response.status));
    console.log(response)
  } catch (err) {
    dispatch(setRegisterStatus(err.response.status))
  }
};

export const getLogin = request => async dispatch => {
  try {
    const response = await hitLogin(request);
    
    dispatch(setLogin(response.status));
    dispatch(setUsers(response.data))
    if (response.data.accessToken) {
    AsyncStorage.setItem('token', response.data.accessToken);
    }
    console.log(response.data)
  } catch (err) {
    console.log(err.response);
    dispatch(setLogin(err.response.status))
    console.log('isi Error',err.response.status)
  }
};

export const getNewPassword = request => async dispatch => {
  try {
    const response = await hitNewPassword(request);
    dispatch(setNewPassword(response.status));
    console.log(response)
  } catch (err) {
    dispatch(setNewPassword(err.response.status))
  }
};

export const {setUsers, setLogin, setNoHpRedux, setRegisterStatus, setNewPassword} = UsersSlice.actions;
export default UsersSlice.reducer;
