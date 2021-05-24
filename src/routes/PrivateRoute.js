import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLogged } from '../store/selectors';

const PrivateRoute = ({
  component: Component,
  ...rest
}) => {
  
  const isLogged = useSelector(getIsLogged);
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


