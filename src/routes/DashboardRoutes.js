import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/layout/Header';
import { AdvertDetailPage, AdvertsPage, NewAdvertPage } from '../components/adverts';
import FiltersAdverts from '../filters/FiltersAdverts';

const DashboardRoutes = () => {
    return (
        
        <div>
            <Header />
            <div className = "container mt-5">
                <Switch>
                    <Route exact path='/adverts' component={AdvertsPage}/>
                    <Route exact path='/adverts/:id' component={AdvertDetailPage}/>
                    <Route exact path='/advert/new' component={NewAdvertPage}/>
                    <Route exact path='/search' component={FiltersAdverts}/>
                    <Redirect to= '/adverts'/>
                    
                </Switch>
            </div>

            
        </div>

    )
}

export default DashboardRoutes;