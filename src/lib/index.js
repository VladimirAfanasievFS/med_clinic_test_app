const { sort, ascend, prop } = require('ramda');

// eslint-disable-next-line import/prefer-default-export
export const getNewest = (appointments) => sort(ascend(prop('timestamp')), appointments);
