import numbersReducer from './numbersReducer';
import { createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({
  numbers: numbersReducer,
});

export const configureStore = () => {
  const store = createStore(rootReducer);
  return store;
};
