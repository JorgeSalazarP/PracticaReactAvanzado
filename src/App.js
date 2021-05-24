import React from 'react';
import T from 'prop-types';
import AppRouter from './routes/AppRouter';

//Redux
import { Provider } from 'react-redux';
import store from './store/store';

const App = ({ isInitiallyLogged })=> {

  return (
    <Provider store={store}>
        <AppRouter isInitiallyLogged={isInitiallyLogged}/>
    </Provider>   

  );
}

App.propTypes = {
  isInitiallyLogged: T.bool,
};

App.defaultProps = {
  isInitiallyLogged: false,
};


export default App;
