import React from 'react';
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import AdvertsPage from '../components/adverts/AdvertsPage/AdvertsPage';
import NewAdvertPage from '../components/adverts/NewAdvertPage/NewAdvertPage';
import LoginPage from '../components/auth/LoginPage/LoginPage';
import Navbar  from '../components/layout/Navbar';

const AppRouter = () => {
    return (
        <Router>
            <div>
               <Navbar/>

               <Switch>
                   <Route
                    exact path = '/login' 
                    component={LoginPage}
                   />

                   <Route
                    exact path = '/' 
                    component={AdvertsPage}
                   />
                   <Route
                    exact path = '/advert/new' 
                    component = {NewAdvertPage}
                   />
               </Switch>
            </div>
        </Router>
    )
}

export default AppRouter;