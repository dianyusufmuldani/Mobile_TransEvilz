import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: '',
  isPopupIncorectOtp: false,
  isPopupSuccessFormRegistration: false,
  isPopupError3xTest:false,
  isPopupInternetNotStable:false,
  isPopupRequestTimedOut:false,
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
    
      state.isPopupIncorectOtp = action.payload;
    },
    setIsPopupSuccessFormRegistration: (state, action) => {
    
      state.isPopupSuccessFormRegistration = action.payload;
    },
    setIsPopupCreatePinSuccess: (state, action) => {
    
      state.isPopupCreatePinSuccess = action.payload;
    },
    setIsPopupError3xTest: (state, action) => {
    
      state.isPopupError3xTest = action.payload;
    },
    setIsPopupInternetNotStable: (state, action) => {
    
      state.isPopupInternetNotStable = action.payload;
    },
    setIsPopupRequestTimedOut: (state, action) => {
    
      state.isPopupRequestTimedOut = action.payload;
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
  setIsPopupError3xTest,
  setIsPopupInternetNotStable,
  setIsPopupRequestTimedOut
} = GlobalSlice.actions;
export default GlobalSlice.reducer;
