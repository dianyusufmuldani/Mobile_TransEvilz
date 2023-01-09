import {createSlice} from '@reduxjs/toolkit';
import { hitOtp } from '../../api';

const initialState = {
  data: null,
  otp: null,
};
export const OtpSlice = createSlice({
  name: 'otp',
  initialState,
  reducers: {
    setOtp: (state, action) => {
      state.data = action.payload;
      console.log('sukses otp slice');
    },
  },
});

export const getOtp = request => async dispatch => {
  try {
    const response = await hitOtp(request);
    dispatch(setOtp(response.data));
  } catch (err) {
    throw new Error(err);
  }
};


export const {setOtp} = OtpSlice.actions;
export default OtpSlice.reducer;
