import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import BaseContainer from '../../containers/BaseContainer';
import JoinLeaguePage from '../../pages/JoinLeaguePage';
import UpdateChampionPage from '../../pages/UpdateChampionPage';
import SeeHistoryPage from '../../pages/SeeHistoryPage';
import LearnMorePage from '../../pages/LearnMorePage';
import ComingSoonPage from '../../pages/ComingSoonPage';

const MainRouter = () => {
    return (
        <BrowserRouter>
            <Switch>            
                <Route exact path='/' component={BaseContainer} />
                <Route path="/view-pick" component={JoinLeaguePage}/>
                <Route path="/see-history" component={SeeHistoryPage}/>
                <Route path="/learn-more" component={LearnMorePage}/>
                <Route path="/coming-soon" component={ComingSoonPage}/> 
                <Route path="/update-champion" component={UpdateChampionPage}/>    
            </Switch>
        </BrowserRouter>
    )
};

export default MainRouter;