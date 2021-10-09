import React from "react";
import { AppBar, Toolbar, makeStyles, Box } from "@material-ui/core";
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

const Header = () => {
    const classes = useStyles();
    return (
        <Box>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <Logo />
                    <NavigationItem tabInfo={tabInfo} />
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;