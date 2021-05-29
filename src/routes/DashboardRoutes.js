import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/layout/Header';
import { AdvertDetailPage, AdvertsPage, NewAdvertPage } from '../components/adverts';
import { Footer } from '../components/layout/Footer';


const DashboardRoutes = () => {
    return (
        <div>
            <Header/>
                <div className = "container mt-5">
                    <Switch>
                        <Route exact path='/advert/new' component={NewAdvertPage}/>
                        <Route path='/advert/:id' component={AdvertDetailPage}/>
                        <Route exact path='/'> 
                            <Redirect to="/adverts"/>
                        </Route>
                        <Route exact path='/adverts' component={AdvertsPage}/>
                        <Route path="/404">
                            <div
                                style={{
                                    textAlign: 'center',
                                    fontSize: 48,
                                    fontWeight: 'bold',
                                }}
                            >
                            404 | Not found page
                            </div>
                        </Route>
                        <Route>
                            <Redirect to="/404" />
                        </Route>
                    </Switch>
                </div>
            <Footer/>
        </div>
    );
}

export default DashboardRoutes;