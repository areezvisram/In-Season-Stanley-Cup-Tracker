import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import BaseContainer from '../../containers/BaseContainer';
import JoinLeaguePage from '../../pages/JoinLeaguePage';
import UpdateChampionPage from '../../pages/UpdateChampionPage';

const MainRouter = () => {
    return (
        <BrowserRouter>
            <Switch>            
                <Route exact path='/' component={BaseContainer} />
                <Route path="/join-league" component={JoinLeaguePage}/>
                <Route path="/view-history" />
                <Route path="/learn-more" />    
                <Route path="/update-champion" component={UpdateChampionPage}/>    
            </Switch>
        </BrowserRouter>
    )
};

export default MainRouter;