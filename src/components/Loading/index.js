import React from 'react';
import loading from './loading.gif';
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

const Loading = () => {
    const classes = useStyles();
    return (
        <Typography className={classes.container}>            
                <img src={loading} alt="loading" ></img>            
        </Typography>
    )
}

export default Loading;