import React from 'react';
import { BrowserRouter as Router, Switch} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import LoginPage  from '../components/auth/LoginPage/LoginPage';
import DashboardRoutes from './DashboardRoutes';



const AppRouter = () => {
  
    return (
        <Router>
            <div>
               <Switch>
                        <PublicRoute 
                            exact path='/login' 
                            component={ LoginPage }
                        />
                   
                        <PrivateRoute 
                            path='/'
                            component={ DashboardRoutes }
                        />
                    
               </Switch>
            </div>
        </Router>

    );
}

export default AppRouter;