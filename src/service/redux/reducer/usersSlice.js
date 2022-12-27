import {createSlice} from '@reduxjs/toolkit';
import {hitUsers} from '../../api';
const initialState = {
  data: '',
};
export const UsersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.data = action.payload;
      console.log('halo guys');
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
