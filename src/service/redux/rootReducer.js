import globalSlice from './reducer/globalSlice';
import usersSlice from './reducer/usersSlice';
export const rootReducer = {
  users: usersSlice,
  global: globalSlice,
};
