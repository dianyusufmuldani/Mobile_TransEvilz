import globalSlice from './reducer/globalSlice';
import otpSlice from './reducer/otpSlice';
import pinSlice from './reducer/pinSlice';
import transferSlice from './reducer/transferSlice';
import usersSlice from './reducer/usersSlice';
export const rootReducer = {
  users: usersSlice,
  global: globalSlice,
  otp: otpSlice,
  transfer: transferSlice,
  pin:pinSlice
};
