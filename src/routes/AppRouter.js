import React from 'react';
import { BrowserRouter as Router, Switch} from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import LoginPage  from '../components/auth/LoginPage/LoginPage';
import DashboardRoutes from './DashboardRoutes';



const AppRouter = () => {
  
    const { isLogged } = React.useContext(AuthContext);
    return (
        <Router>
            <div>
               <Switch>
                      <PublicRoute 
                          exact path='/login' 
                          component={ LoginPage }
                          isLogged={ isLogged }
                      />
                   
                    <PrivateRoute 
                        path='/'
                        component={ DashboardRoutes }
                        isLogged={ isLogged }
                    />
                    
               </Switch>
            </div>
        </Router>

    );
}

export default AppRouter;