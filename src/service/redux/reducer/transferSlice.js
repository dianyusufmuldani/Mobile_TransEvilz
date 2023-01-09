import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: '',
  adminLocal: 5000,
  nominalLocal: null,
  totalTransactionLocal: 0,
  nameReceiver: null,
  accountNumber: null,
  bankReceiver: null,
  adminInternational:100000,
  nominalIndonesia:null,
  nominalDestination:'',
  countryDestination:'USD',
  totalTransactionInternational:null,
  bankReceiverInternational:null,
  nameReceiverInternational:null,
  accountNumberInternational:null,
  kursInternational:15677,
  swiftCode:null
};
export const TransferSlice = createSlice({
  name: 'transfer',
  initialState,
  reducers: {
    setNominalTransferLocal: (state, action) => {
      state.nominalLocal = action.payload;
    },
    setTotalTransactionLocal: (state, action) => {
      state.totalTransactionLocal = action.payload;
    },
    setNameReceiver: (state, action) => {
      state.nameReceiver = action.payload;
    },
    setAccountNumber: (state, action) => {
      state.accountNumber = action.payload;
    },
    setBankReceiver: (state, action) => {
      state.bankReceiver = action.payload;
    },
    setKursInternational: (state, action) => {
      state.kursInternational = action.payload;
    },
    setCountryDestination: (state, action) => {
      state.countryDestination = action.payload;
    },
    setNominalDestination: (state, action) => {
      state.nominalDestination = action.payload;
    },
    setNominalIndonesia: (state, action) => {
      state.nominalIndonesia = action.payload;
    },
    setTotalTransactionInternational: (state, action) => {
      state.totalTransactionInternational = action.payload;
    },
    setSwiftCode: (state, action) => {
      state.swiftCode = action.payload;
    },
    setNameReceiverInternational: (state, action) => {
      state.nameReceiverInternational = action.payload;
    },
    setAccountNumberInternational: (state, action) => {
      state.accountNumberInternational = action.payload;
    },
    setBankReceiverInternational: (state, action) => {
      state.bankReceiverInternational = action.payload;
    },
  },
});

export const {
  setNominalTransferLocal,
  setBankReceiver,
  setTotalTransactionLocal,
  setAccountNumber,
  setNameReceiver,
  setKursInternational,
  setCountryDestination,
  setNominalDestination,
  setNominalIndonesia,
  setTotalTransactionInternational,
  setSwiftCode,
  setAccountNumberInternational,
  setNameReceiverInternational,
  setBankReceiverInternational
} = TransferSlice.actions;
export default TransferSlice.reducer;
