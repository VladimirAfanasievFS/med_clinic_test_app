import { combineReducers } from '@reduxjs/toolkit';

import user, { actions as userActions, asyncActions as userAsyncActions } from './user';

export default combineReducers({

  user,
});

const actions = {
  ...userActions,
};

const asyncActions = {
  ...userAsyncActions,
};

export {
  actions,
  asyncActions,
};
