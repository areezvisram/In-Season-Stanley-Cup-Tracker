import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    white: {
        color: theme.palette.primary.light,
        fontWeight: 'bold',         
    },
    box: {
        background: 'transparent',
        boxShadow: 'none',        
    }
}));

const TitleText = () => {
    const classes = useStyles();
    return (
        <Box className={classes.box}>
            <Typography className={classes.white} variant="h3" align="left">
                IN SEASON STANLEY CUP TRACKER
            </Typography>
            <Typography className={classes.white} variant="h5" align="left">
                Login and join a league with friends, see the current in season champion and how they came to be,
                or learn more about the in season Stanley Cup competition
            </Typography>
        </Box>
    )
}

export default TitleText;