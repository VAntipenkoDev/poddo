import { configureStore } from '@reduxjs/toolkit';

import signUpReducer from './reducers/signUpReducer';

export const store = configureStore({
  reducer: {
    signUp: signUpReducer,
  },
});
