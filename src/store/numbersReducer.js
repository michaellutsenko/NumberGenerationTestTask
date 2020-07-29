export default (state = [], action) => {
  switch (action.type) {
    case 'NUMBERS_GENERATE':
      return action.numbers;
    default:
      return state;
  }
};
