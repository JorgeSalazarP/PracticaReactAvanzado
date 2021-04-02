import React from 'react';
import { AuthContext } from './components/auth/LoginPage/AuthContext';
import { authReducer } from './components/auth/authReducer';
import AppRouter from './routes/AppRouter';


const init = () =>{

  return JSON.parse(localStorage.getItem('user')) || {logged:false}

}

const App = ()=> {

  const [user, dispatch] = React.useReducer(authReducer, {}, init);

  // React.useEffect(()=>{

  //   localStorage.setItem('user',JSON.stringify(user));
  // },[user]);

  return (
   
    <AuthContext.Provider value = {{ user,dispatch }} >
      <AppRouter/>
    </AuthContext.Provider>

  );
}

export default App;
