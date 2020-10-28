import { combineReducers } from '@reduxjs/toolkit';

import user, { actions as userActions, asyncActions as userAsyncActions } from './user';
import appointments, { actions as appointmentsActions } from './appointments';

export default combineReducers({
  user,
  appointments,
});

const actions = {
  ...userActions,
  ...appointmentsActions,
};

const asyncActions = {
  ...userAsyncActions,
};

export {
  actions,
  asyncActions,
};
