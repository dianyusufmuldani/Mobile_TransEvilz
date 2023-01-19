import {createSlice} from '@reduxjs/toolkit';
import {hitBank, hitHistory, hitReceiverLocal, hitTransaction, hitTransactionByID} from '../../api';

const initialState = {
  data: null,
  adminLocal: 5000,
  nominalLocal: null,
  totalTransactionLocal: 0,
  nameReceiver: null,
  accountNumber: null,
  bankReceiver: null,
  adminInternational: 100000,
  nominalIndonesia: null,
  nominalDestination: '',
  countryDestination: 'USD',
  totalTransactionInternational: null,
  bankReceiverInternational: null,
  nameReceiverInternational: null,
  accountNumberInternational: null,
  kursInternational: 15677,
  swiftCode: null,
  transactionLocal: null,
  transactionInternational: null,
  history: null,
  idTransactionLocal:null
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
    setTransfer: (state, action) => {
      console.log('Masuk Transfer');
      state.data = action.payload;
    },
    setTransactionLocal: (state, action) => {
      state.transactionLocal = action.payload;
    },
    setTransactionInternational: (state, action) => {
      state.transactionInternational = action.payload;
    },
    setHistory: (state, action) => {
      state.history = action.payload;
    },
    setIdTransactionLocal:(state, action) => {
      state.idTransactionLocal = action.payload;
    },
  },
});

export const getReceiverLocal = request => async dispatch => {
  try {
    const response = await hitReceiverLocal(request);
    dispatch(setNameReceiver(response.data.name));
    console.log('ini sukses', response);
  } catch (err) {
    dispatch(setNameReceiver(err.response.status));
    console.log('ini gagal', err.response);
  }
};

export const getBank = request => async dispatch => {
  try {
    const response = await hitBank(request);
    dispatch(setBankReceiver(response.data));
    console.log('ini sukses', response);
  } catch (err) {
    dispatch(setBankReceiver(err.response.status));
    console.log('ini gagal', err.response);
  }
};

export const getCreateTransactions = request => async dispatch => {
  try {
    const response = await hitTransaction(request);
    dispatch(setTransactionLocal(response.data));
    console.log('ini sukses', response);
  } catch (err) {
    dispatch(setTransactionLocal(err.response.status));
    console.log('ini gagal', err.response);
  }
};

export const getHistory = request => async dispatch => {
  try {
    const response = await hitHistory(request);
    dispatch(setHistory(response.data));
    console.log('ini sukses', response);
  } catch (err) {
    dispatch(setHistory(err.response.status));
    console.log('ini gagal', err.response);
  }
};

export const getTransasctionByID = request => async dispatch => {
  try {
    const response = await hitTransactionByID(request);
    dispatch(setIdTransactionLocal(response.data));
    console.log('ini sukses', response);
  } catch (err) {
    dispatch(setIdTransactionLocal(err.response.status));
    console.log('ini gagal', err.response);
  }
};

export const {
  setIdTransactionLocal,
  setHistory,
  setTransactionInternational,
  setTransactionLocal,
  setTransfer,
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
  setBankReceiverInternational,
} = TransferSlice.actions;
export default TransferSlice.reducer;
