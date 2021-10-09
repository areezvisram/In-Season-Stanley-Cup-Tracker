import React from 'react';
import logo from './logo.png';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    logo: {
        height: theme.spacing(20),
        width: theme.spacing(20),
        marginTop: theme.spacing(8)
    },
    container: {
        flexGrow: 1
    }
}));

const Logo = () => {
    const classes = useStyles();
    return (
        <Typography className={classes.container}>            
                <img src={logo} alt="" className={classes.logo}></img>            
        </Typography>
    )
}

export default Logo;