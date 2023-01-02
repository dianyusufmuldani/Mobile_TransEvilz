import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: '',
  otp: '',
};
export const OtpSlice = createSlice({
  name: 'otp',
  initialState,
  reducers: {
    setOtpku: (state, action) => {
      state.otp = action.payload.otp;
      console.log('sukses otp slice');
    },
  },
});

export const {setOtp} = OtpSlice.actions;
export default OtpSlice.reducer;
