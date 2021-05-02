import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';



const PrivateRoute = ({
  component: Component,
  ...rest
}) => {
  
  const { isLogged } = React.useContext(AuthContext);
  
  return (
    <Route { ...rest }

      component={ (props) => (
        ( isLogged )
          ? ( <Component { ...props } /> )
          : ( <Redirect to='/login' /> )
      )}

    />);
};

export default PrivateRoute;


