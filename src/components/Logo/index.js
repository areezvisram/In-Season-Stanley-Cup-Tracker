import React from 'react';
import logo from './logo.png';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    logo: {
        height: theme.spacing(20),
        width: theme.spacing(20),
        marginTop: theme.spacing(8),
        zIndex: 10
    },
    container: {
        // flexGrow: 1,
        flex: 1,
        width: 'max-content'
    }
}));

const Logo = () => {
    const classes = useStyles();
    return (       
        <Link to='/'>
            <img src={logo} alt="" className={classes.logo}></img>            
        </Link>
    )
}

export default Logo;