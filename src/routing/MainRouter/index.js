import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import BaseContainer from '../../containers/BaseContainer';
import JoinLeaguePage from '../../pages/JoinLeaguePage';

const MainRouter = () => {
    return (
        <BrowserRouter>
            <Switch>            
                <Route exact path='/' component={BaseContainer} />
                <Route path="/join-league" component={JoinLeaguePage}/>
                <Route path="/view-history" />
                <Route path="/learn-more" />        
            </Switch>
        </BrowserRouter>
    )
};

export default MainRouter;