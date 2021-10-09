import React from "react";
import { Tabs, makeStyles, useTheme, useMediaQuery } from "@material-ui/core";
import TabItem from './TabItem';
import { BrowserRouter, Link } from "react-router-dom";
import MainRouter from '../../routing/MainRouter';
import HamburgerMenu from '../HamburgerMenu';

const useStyles = makeStyles((theme) => ({
    navBar: {        
        marginRight: theme.spacing(-2),        
    },
}));

const NavigationItem = ({ tabInfo }) => {
    const classes = useStyles();
    const theme = useTheme();        
    const isSmallDisplay = useMediaQuery(theme.breakpoints.between('xs', '1070'));
    return (
        <BrowserRouter>
            {isSmallDisplay ? (
                <HamburgerMenu tabInfo={tabInfo} tabComponent={Link} />
            ): (
                <div>
                    <Tabs className={classes.navBar} value={false}>            
                        {tabInfo.map(tab => <TabItem label={tab.label} route={tab.route} component={Link} key={tab.value} />)}
                    </Tabs>
                    <MainRouter />
                </div>
            )}
        </BrowserRouter>           
    )
};

export default NavigationItem;