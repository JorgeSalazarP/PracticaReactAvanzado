import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import { AdvertDetailPage, AdvertsPage, NewAdvertPage } from '../components/adverts';

const DashboardRoutes = () => {
    return (
        
        <div>
            <Navbar/>
            <div className = "container mt-5">
                <Switch>
                    <Route exact path='/adverts' component={AdvertsPage}/>
                    <Route exact path='/adverts/:id' component={AdvertDetailPage}/>
                    <Route exact path='/advert/new' component={NewAdvertPage}/>
                    <Redirect to= '/adverts'/>
                    
                </Switch>
            </div>

            
        </div>

    )
}

export default DashboardRoutes;