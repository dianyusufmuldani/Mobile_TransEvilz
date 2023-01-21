import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';
import {hitLanguage, hitLogin, hitNewPassword, hitRegister} from '../../api';
const initialState = {
  data: null,
  login: null,
  noHp: null,
  registerStatus: null,
  newPassword: null,
  language:'id',
  photo:null
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
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setPhoto: (state, action) => {
      state.photo = action.payload;
    },
  },
});

export const getUsers = request => async dispatch => {
  try {
    const response = await hitRegister(request);
    dispatch(setRegisterStatus(response.status));
    console.log(response);
  } catch (err) {
    dispatch(setRegisterStatus(err.response.status));
  }
};

export const getLogin = request => async dispatch => {
  try {
    const response = await hitLogin(request);

    dispatch(setLogin(response.status));
    dispatch(setUsers(response.data));
    if (response.data.accessToken) {
      AsyncStorage.setItem('token', response.data.accessToken);
    }
    console.log(response.data);
  } catch (err) {
    console.log(err.response);
    dispatch(setLogin(err.response.status));
    console.log('isi Error', err.response.status);
  }
};

export const getNewPassword = request => async dispatch => {
  try {
    const response = await hitNewPassword(request);
    dispatch(setNewPassword(response.status));
    console.log(response);
  } catch (err) {
    dispatch(setNewPassword(err.response.status));
  }
};

export const getLanguage = request => async dispatch => {
  try {
    const response = await hitLanguage(request);
    if (response.data.accessToken) {
      AsyncStorage.setItem('languageStorage', response);
    }
    console.log('isi Respon berhasil language',response);
  } catch (err) {
    console.log(err.response);
   
  }
};

export const {
  setPhoto,
  setLanguage,
  setUsers,
  setLogin,
  setNoHpRedux,
  setRegisterStatus,
  setNewPassword,
} = UsersSlice.actions;
export default UsersSlice.reducer;
