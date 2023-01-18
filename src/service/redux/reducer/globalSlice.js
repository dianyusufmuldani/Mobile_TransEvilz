import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: '',
  isLoading: false,
  isPopupIncorectOtp: false,
  isPopupSuccessFormRegistration: false,
  isPopupError3xTest: false,
  isPopupInternetNotStable: false,
  isPopupRequestTimedOut: false,
  isButton: false,
  isPopupCreatePinSuccess: false,
  isButtonRegistration: false,
  isButtonFormRegistration: false,
  isButtonTransferLocal: false,
  isButtonTransactionLocal: false,
  isButtonMethodLocal: false,
  isButtonTransferInternational: false,
  isPopupAccountNumberNotFound: false,
  isPopupPinInvalid: false,
  isPopupErrorDate: false,
};
export const GlobalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
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
    setIsPopupErrorDate: (state, action) => {
      state.isPopupErrorDate = action.payload;
    },
    setIsButtonRegistration: (state, action) => {
      console.log('tes redicer button');
      state.isButtonRegistration = action.payload;
    },
    setIsButtonFormRegistration: (state, action) => {
      console.log('tes redicer button');
      state.isButtonFormRegistration = action.payload;
    },
    setIsButtonTransferLocal: (state, action) => {
      state.isButtonTransferLocal = action.payload;
    },
    setIsButtonTransactionLocal: (state, action) => {
      state.isButtonTransactionLocal = action.payload;
    },
    setIsButtonMethodLocal: (state, action) => {
      state.isButtonMethodLocal = action.payload;
    },
    setIsPopupAccountNumberNotFound: (state, action) => {
      state.isPopupAccountNumberNotFound = action.payload;
    },
    setIsPopupPinInvalid: (state, action) => {
      state.isPopupPinInvalid = action.payload;
    },
    setIsButtonTransferInternational: (state, action) => {
      state.isButtonTransferInternational = action.payload;
    },
  },
});

export const {
  setIsPopupErrorDate,
  setIsLoading,
  setIsPopupIncorectOtp,
  setIsButtonFormRegistration,
  setIsButtonRegistration,
  setIsPopupCreatePinSuccess,
  setIsPopupSuccessFormRegistration,
  setIsButton,
  setIsPopupError3xTest,
  setIsPopupInternetNotStable,
  setIsPopupRequestTimedOut,
  setIsButtonTransferLocal,
  setIsButtonTransactionLocal,
  setIsButtonMethodLocal,
  setIsPopupAccountNumberNotFound,
  setIsPopupPinInvalid,
  setIsButtonTransferInternational,
} = GlobalSlice.actions;
export default GlobalSlice.reducer;
