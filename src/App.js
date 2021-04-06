import React from 'react';
import AuthContextProvider from './context/AuthContext';
import LoadingContextProvider from './context/LoadingContext';
import AppRouter from './routes/AppRouter';

const App = ({isInitiallyLogged})=> {

  return (
    <AuthContextProvider isInitiallyLogged={isInitiallyLogged}>
      <LoadingContextProvider>
        <AppRouter/>
      </LoadingContextProvider>  
    </AuthContextProvider>   

  );
}

export default App;
