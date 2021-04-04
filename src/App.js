import React from 'react';
import AuthContextProvider from './context/AuthContext';
import LoadingContextProvider from './context/LoadingContext';
import AppRouter from './routes/AppRouter';


const App = ()=> {



  return (
    
    <AuthContextProvider>
      <LoadingContextProvider>
        <AppRouter/>
      </LoadingContextProvider>
    </AuthContextProvider>
   

  );
}

export default App;
