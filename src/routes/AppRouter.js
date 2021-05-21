import React from 'react';
import { BrowserRouter as Router, Switch} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import LoginPage  from '../components/auth/LoginPage/LoginPage';
import DashboardRoutes from './DashboardRoutes';

//Redux
import { Provider } from 'react-redux';
import store from '../store';



const AppRouter = () => {
  
    return (
        <Router>
            <div>
            <Provider store={ store }>
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
            </Provider>
            </div>
        </Router>

    );
}

export default AppRouter;