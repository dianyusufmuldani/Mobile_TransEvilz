import {createSlice} from '@reduxjs/toolkit';
import {hitUsers} from '../../api';
const initialState = {
  data: null,
  // email:'',
  // nationality:'',
  // typeDocument:'',
  // noDocument:'',
  // firstName:'',
  // lastName:'',
  // birthplace:'',
  // birthday:'',
  // address:'',
  // gender:'',
  // password:'',
  // confirmPassword:'',
  // agreeTerms:''
};
export const UsersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      console.log('Hit API ');
      state.data = action.payload;
      console.log('OKE guys', state.data);
    },
  },
});

export const getUsers = request => async dispatch => {
  try {
    const response = await hitUsers(request);
    dispatch(setUsers(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

export const {setUsers} = UsersSlice.actions;
export default UsersSlice.reducer;
