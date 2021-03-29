import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import { AdvertPage, AdvertsPage, NewAdvertPage } from '../components/adverts';

const DashboardRoutes = () => {
    return (
        
        <div>
            <Navbar/>
            <div>
                <Switch>
                    <Route exact path='/adverts'component={AdvertsPage}/>
                    <Route exact path='/advert/:id'component={AdvertPage}/>
                    <Route exact path='/advert/new'component={NewAdvertPage}/>
                    <Redirect to= '/adverts'/>
                    
                </Switch>
            </div>

            
        </div>

    )
}

export default DashboardRoutes;