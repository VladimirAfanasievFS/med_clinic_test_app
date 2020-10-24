/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialUser = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : null;

export const login = createAsyncThunk(
  'login',
  async ({ username, password }) => {
    try {
      // const res = await api.post('/api/auth/login/', { username, password })
      const res = { username, password };
      await setTimeout(() => {}, 500);
      return res;
    } catch (e) {
      return console.error(e.message);
    }
  },
);

export const logout = createAsyncThunk(
  'logout',
  async () => {
    try {
      // const res = await api.post('/api/auth/logout/')
      const res = await setTimeout(() => {}, 500);
      return res;
    } catch (e) {
      return console.error(e.message);
    }
  },
);

const slice = createSlice({
  name: 'user',
  initialState: {
    user: initialUser,
  },
  reducers: {
  },
  extraReducers: {
    [login.fulfilled]: (state, { payload }) => {
      state.user = payload;
      localStorage.setItem('user', JSON.stringify(payload));
    },
    [logout.fulfilled]: (state) => {
      state.user = null;
      localStorage.removeItem('user');
    },
  },
});

export const asyncActions = { login, logout };
export const { actions } = slice;
export default slice.reducer;
