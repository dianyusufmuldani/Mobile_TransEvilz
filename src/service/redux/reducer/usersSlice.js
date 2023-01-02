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
      state.data = action.payload;
      // state.email = action.payload.email;
      // state.nationality = action.payload.nationality;
      // state.typeDocument = action.payload.typeDocument;
      // state.noDocument = action.payload.noDocument;
      // state.firstName = action.payload.firstName;
      // state.lastName = action.payload.lastName;
      // state.birthplace = action.payload.birthplace;
      // state.birthday = action.payload.birthday;
      // state.address = action.payload.address;
      // state.gender = action.payload.gender;
      // state.password = action.payload.password;
      // state.confirmPassword = action.payload.confirmPassword;
      // state.agreeTerms = action.payload.agreeTerms;
      console.log('halo guys', state.data);
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
