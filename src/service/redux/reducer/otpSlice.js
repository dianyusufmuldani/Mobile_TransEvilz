import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {hitOtp} from '../../api';
import axios from 'axios';

const initialState = {
  data: '',
  // otp: null,
};
export const OtpSlice = createSlice({
  name: 'otp',
  initialState,
  reducers: {
    setOtpSlice: (state, action) => {
      state.data = action.payload;
      console.log('sukses otp slice');
    },
  },
});

export const getOtp = request => async dispatch => {
  try {
    const response = await hitOtp(request);
    dispatch(setOtpSlice(response.status));
  } catch (err) {
    // throw new Error(err);
    dispatch(setOtpSlice(err.response.status));
  }
};

export const {setOtpSlice} = OtpSlice.actions;
export default OtpSlice.reducer;
