import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: '',
  adminLocal:5000,
  nominalLocal:null,
  totalTransactionLocal:0,
  nameReceiver:null,
  accountNumber:null,
  bankReceiver:null

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
  },
});

export const {setNominalTransferLocal, setBankReceiver, setTotalTransactionLocal, setAccountNumber, setNameReceiver} = TransferSlice.actions;
export default TransferSlice.reducer;
