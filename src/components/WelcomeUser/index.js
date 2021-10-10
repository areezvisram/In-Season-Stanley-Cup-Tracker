import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    white: {
        color: theme.palette.primary.light,
        fontWeight: 'bold',
        fontSize: theme.spacing(10)         
    },
    box: {
        background: 'transparent',
        boxShadow: 'none',
        marginTop: '10%',
        marginLeft: '20%'      
    }
}));

const WelcomeUser = ({ displayName }) => {
    const classes = useStyles();
    return (
        <Box className={classes.box}>
            <Typography className={classes.white} variant="h3" align="left">
                Welcome, {displayName}
            </Typography>
        </Box>
    )
}

export default WelcomeUser;