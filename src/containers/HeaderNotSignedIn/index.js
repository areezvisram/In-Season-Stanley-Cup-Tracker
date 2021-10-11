import React from "react";
import { AppBar, Toolbar, makeStyles, Grid } from "@material-ui/core";
import NavigationItem from '../../components/NavigationItem';
import { tabInfo } from '../../constants/routes';
import Logo from "../../components/Logo";

const useStyles = makeStyles((theme) => ({
    appBar: {
        background: 'transparent',
        boxShadow: 'none',
        height: theme.spacing(15),               
    },
}));

const Header = ({ position }) => {
    const classes = useStyles();
    return (
        <Grid container>
            <AppBar className={classes.appBar} position={position}>
                <Toolbar>
                    <Grid container item xs={4} justifyContent="flex-start">
                        <Logo />
                    </Grid>
                    <Grid item xs={4}>                        
                    </Grid>
                    <Grid container item xs={4} justifyContent="flex-end">
                        <NavigationItem tabInfo={tabInfo} />
                    </Grid>
                </Toolbar>
            </AppBar>
        </Grid>
    );
};

export default Header;