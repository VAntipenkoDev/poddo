import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  gender: '',
  birthday: '',
  favoriteGames: [],
  day: '',
  month: '',
  year: '',
};

const signUpReducer = createSlice({
  name: 'sign-up',
  initialState,
  reducers: {
    signUp: (state, { payload: { name, gender, day, month, year } }) => {
      state.name = name;
      state.gender = gender;
      state.birthday = `${month}/${day}/${year}`;
      state.day = day;
      state.month = month;
      state.year = year;
    },
  },
});

export const { signUp } = signUpReducer.actions;

export default signUpReducer.reducer;
