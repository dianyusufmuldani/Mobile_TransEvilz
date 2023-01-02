import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: '',
  isPopupIncorectOtp: false,
  isPopupSuccessFormRegistration: false,
  isButton: false,
  isPopupCreatePinSuccess: false,
  isButtonRegistration: false,
  isButtonFormRegistration: false,
};
export const GlobalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setIsPopupIncorectOtp: (state, action) => {
      console.log('tes reducer popup');
      state.isPopupIncorectOtp = action.payload;
    },
    setIsPopupSuccessFormRegistration: (state, action) => {
      console.log('tes reducer popup');
      state.isPopupSuccessFormRegistration = action.payload;
    },
    setIsPopupCreatePinSuccess: (state, action) => {
      console.log('tes reducer popup');
      state.isPopupCreatePinSuccess = action.payload;
    },
    setIsButtonRegistration: (state, action) => {
      console.log('tes redicer button');
      state.isButtonRegistration = action.payload;
    },
    setIsButtonFormRegistration: (state, action) => {
      console.log('tes redicer button');
      state.isButtonFormRegistration = action.payload;
    },
  },
});

export const {
  setIsPopupIncorectOtp,
  setIsButtonFormRegistration,
  setIsButtonRegistration,
  setIsPopupCreatePinSuccess,
  setIsPopupSuccessFormRegistration,
  setIsButton,
} = GlobalSlice.actions;
export default GlobalSlice.reducer;
