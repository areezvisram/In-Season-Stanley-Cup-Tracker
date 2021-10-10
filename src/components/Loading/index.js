import React from 'react';
import loading from './loading.gif';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    logo: {
        height: theme.spacing(20),
        width: theme.spacing(20),           
        justifyContent: 'center'
    },
    container: {
        flexGrow: 1,
        marginLeft: theme.spacing(35),
        [theme.breakpoints.up('1500')]: {
            marginLeft: theme.spacing(60),
        },
        [theme.breakpoints.between('1000', '1200')]: {
            marginLeft: theme.spacing(20),
        },
        [theme.breakpoints.between('800', '999')]: {
            marginLeft: theme.spacing(10),
        },
        [theme.breakpoints.between('600', '799')]: {
            marginLeft: theme.spacing(-15),
        },
        [theme.breakpoints.between('0', '599')]: {
            marginLeft: theme.spacing(-25),
        },
    }
}));

const Loading = () => {
    const classes = useStyles();
    return (
        <Typography className={classes.container}>            
                <img src={loading} alt="loading" ></img>            
        </Typography>
    )
}

export default Loading;