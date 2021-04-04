import React from 'react';
import AuthContextProvider from './context/AuthContext';
import LoadingContextProvider from './context/LoadingContext';
import RememberPasswordProvider from './context/RememberPassword';
import AppRouter from './routes/AppRouter';



const App = ({isInitiallyLogged})=> {

  return (
    <AuthContextProvider isInitiallyLogged={isInitiallyLogged}>
      <RememberPasswordProvider>
        <LoadingContextProvider>
          <AppRouter/>
        </LoadingContextProvider>
      </RememberPasswordProvider>
    </AuthContextProvider>   

  );
}

export default App;
