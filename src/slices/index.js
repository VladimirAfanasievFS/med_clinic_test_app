import { combineReducers } from '@reduxjs/toolkit';

import tickets, { actions as ticketsActions, asyncActions as ticketsAsyncActions } from './tickets';
import displayConditions, { actions as displayConditionsActions } from './displayConditions';

export default combineReducers({
  tickets,
  displayConditions,
});

const actions = {
  ...ticketsActions,
  ...displayConditionsActions,
};

const asyncActions = {
  ...ticketsAsyncActions,
};

export {
  actions,
  asyncActions,
};
