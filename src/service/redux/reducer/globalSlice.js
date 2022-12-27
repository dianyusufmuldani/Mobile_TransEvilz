import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: '',
  isPopup: false,
};
export const GlobalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setIsPopup: (state, action) => {
      console.log('tes global');
      state.isPopup = action.payload;
    },
  },
});

export const {setIsPopup} = GlobalSlice.actions;
export default GlobalSlice.reducer;
