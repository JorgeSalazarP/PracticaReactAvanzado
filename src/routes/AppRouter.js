import React from 'react';
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import LoginPage  from '../components/auth/LoginPage/LoginPage';
import DashboardRoutes from './DashboardRoutes';
import PrivateRoute from './PrivateRoute';


const AppRouter = () => {
    return (
        <Router>
            <div>
               <Switch>
                   <Route exact path = '/login' component={ LoginPage }/>
                   {/* <PrivateRoute path = '/' component={ DashboardRoutes }/>  */}
                   <Route path = '/' component={ DashboardRoutes }/>
               </Switch>
            </div>
        </Router>
    )
}

export default AppRouter;