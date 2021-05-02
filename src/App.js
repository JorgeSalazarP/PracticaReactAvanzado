import React from 'react';
import AuthContextProvider from './context/AuthContext';

import AppRouter from './routes/AppRouter';

const App = ({isInitiallyLogged})=> {

  return (

    
    <AuthContextProvider isInitiallyLogged={isInitiallyLogged}>
        <AppRouter/>
    </AuthContextProvider>   

  );
}

export default App;
