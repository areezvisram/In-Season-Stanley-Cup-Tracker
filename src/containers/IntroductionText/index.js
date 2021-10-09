import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import TitleText from "../../components/TitleText";

const useStyles = makeStyles((theme) => ({
    box: {
        position: 'absolute',        
        left: '5%',
        bottom: '45%',
        [theme.breakpoints.down('750')]: {
            right: '0%',            
        },   
        right: '35%'

    }
}));

const IntroductionText = () => {
    const classes = useStyles();
    return (
        <Box className={classes.box}>
            <TitleText />
        </Box>
    )
}

export default IntroductionText;