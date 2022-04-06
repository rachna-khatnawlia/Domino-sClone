import React from 'react';
import { Provider } from 'react-redux';
import Routes from './src/navigation/Routes.js';
import store from './src/redux/store.js';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
};

export default App;
