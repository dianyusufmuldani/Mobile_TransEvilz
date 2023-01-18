import {createSlice} from '@reduxjs/toolkit';
import {hitCreatePin, hitPin} from '../../api';
const initialState = {
    pinRedux:null,
    newPinRedux:null
};
export const PinSlice = createSlice({
  name: 'pin',
  initialState,
  reducers: {
    setPinRedux: (state, action) => {
      state.pinRedux = action.payload;
    },
    setNewPinRedux: (state, action) => {
      state.newPinRedux = action.payload;
    },

  },
});



export const getPin = request => async dispatch => {
  try {
    const response = await hitPin(request);
    
    dispatch(setPinRedux(response.status));
    // try {
    //   const token = await AsyncStorage.getItem('token');
    //   if (token !== null){
    //     console.log('isi Token',token);
    //   }
    // } catch (error) {
    //   console.log('error log data')
    // }
    
  } catch (err) {
    console.log(err);
    dispatch(setPinRedux(err.response.status))
  }
};


export const getNewPin = request => async dispatch => {
  try {
    const response = await hitCreatePin(request);
    
    dispatch(setNewPinRedux(response.status)); 
  } catch (err) {
    console.log(err);
    // dispatch(setLogin(err.response.status))
  }
};

export const {setPinRedux,setNewPinRedux} = PinSlice.actions;
export default PinSlice.reducer;
