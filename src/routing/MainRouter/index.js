import React from 'react';
import { Route, Switch } from 'react-router-dom';
const MainRouter = () => {
    return (
        <Switch>
            <Route path="/about" />
            <Route path="/experience" />
            <Route path="/projects" />
            <Route path="/contact" />
            <Route path="/resume" />
        </Switch>
    )
};

export default MainRouter;