import React from "react";
import { Tabs, makeStyles, useTheme, useMediaQuery, Box, Grid } from "@material-ui/core";
import TabItem from './TabItem';
import { Link } from "react-router-dom";
import HamburgerMenu from '../HamburgerMenu';
const useStyles = makeStyles((theme) => ({
    navBar: {        
        marginRight: theme.spacing(3),
        width: "max-content"     
    },
}));

const NavigationItem = ({ tabInfo, authState }) => {
    const classes = useStyles();
    const theme = useTheme();        
    const isSmallDisplay = useMediaQuery(theme.breakpoints.between('xs', '1070'));
    return (
        <Grid>
            {isSmallDisplay ? (
                <HamburgerMenu tabInfo={tabInfo} tabComponent={Link} />
            ): (
                <div>
                    <Tabs className={classes.navBar} value={false}>            
                        {tabInfo.map(tab => <TabItem label={tab.label} route={tab.route} component={Link} key={tab.value} />)}                        
                    </Tabs>                    
                </div>
            )}
        </Grid>           
    )
};

export default NavigationItem;