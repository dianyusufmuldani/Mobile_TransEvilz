import globalSlice from './reducer/globalSlice';
import otpSlice from './reducer/otpSlice';
import usersSlice from './reducer/usersSlice';
export const rootReducer = {
  users: usersSlice,
  global: globalSlice,
  otp: otpSlice,
};
