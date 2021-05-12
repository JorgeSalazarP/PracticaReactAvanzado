import React from 'react';
import T from 'prop-types';
import AuthContextProvider from './context/AuthContext';
import AppRouter from './routes/AppRouter';

const App = ({ isInitiallyLogged })=> {

  return (

    <AuthContextProvider isInitiallyLogged={isInitiallyLogged}>
        <AppRouter/>
    </AuthContextProvider>   

  );
}

App.propTypes = {
  isInitiallyLogged: T.bool,
};

App.defaultProps = {
  isInitiallyLogged: false,
};


export default App;
