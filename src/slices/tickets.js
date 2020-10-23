/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Axios from 'axios';
import * as R from 'ramda';
import routes from '../routes';

export const getTickets = createAsyncThunk(
  'getTickets',
  async () => {
    const { data: { searchId } } = await Axios.get(routes.searchIdPath());
    console.log(searchId);
    const getPartTickets = () => Axios.get(routes.ticketsPath(searchId));

    const iter = async (end, acc) => {
      if (end) {
        return acc;
      }
      try {
        const { data: { tickets, stop } } = await getPartTickets();
        console.log('iter -> tickets', tickets);
        // return iter(stop, [...acc, ...tickets]);
        return tickets;
      } catch (error) {
        console.log('iter -> error', error);
        return iter(false, acc);
      }
    };

    try {
      const tickets = iter(false, []);
      return tickets;
    } catch (error) {
      return error;
    }
  },
);
const slice = createSlice({
  name: 'tickets',
  initialState: {
    tickets: [],
    loading: false,
  },
  reducers: {
  },
  extraReducers: {
    [getTickets.pending]: (state) => (R.assoc('loading', true, state)),
    [getTickets.fulfilled]: (state, { payload }) => R.pipe(
      R.assoc('tickets', payload),
      R.assoc('loading', false),
    )(state),
  },
});

export const asyncActions = { getTickets };
export const { actions } = slice;
export default slice.reducer;
