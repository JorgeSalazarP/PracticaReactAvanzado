import React from 'react';
import T from 'prop-types';
import { BrowserRouter as Router, Switch} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import LoginPage  from '../components/auth/LoginPage/LoginPage';
import DashboardRoutes from './DashboardRoutes';

import { useDispatch } from 'react-redux';
import { loggedAction } from '../store/actions';


const AppRouter = ({isInitiallyLogged}) => {

    const dispatch = useDispatch();
    React.useEffect(()=>{
        dispatch(loggedAction(isInitiallyLogged));
    },[dispatch,isInitiallyLogged]);    

    return (
      <Router>
        <Switch>
          <PublicRoute exact path="/login" component={LoginPage} />
          <PrivateRoute path="/" component={DashboardRoutes} />
        </Switch>
      </Router>
    );
}


AppRouter.propTypes = {
    isInitiallyLogged: T.bool,
};
  
AppRouter.defaultProps = {
    isInitiallyLogged: false,
};

export default AppRouter;