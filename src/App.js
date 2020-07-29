import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './store';

import MainView from './components/MainView';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <MainView />
    </Provider>
  );
};

export default App;
