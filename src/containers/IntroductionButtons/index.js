import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import IntroductionButton from "../../components/IntroductionButton";

const useStyles = makeStyles((theme) => ({
    box: {
        position: 'absolute',        
        left: '7%',
        bottom: '25%',
        right: '35%',
        [theme.breakpoints.down('750')]: {
            right: '0%',            
        },    
    }
}));

const IntroductionButtons = () => {
    const classes = useStyles();
    return (
        <Box className={classes.box}>
            <IntroductionButton text={'Create League'}/>
            <IntroductionButton text={'View History'}/>
            <IntroductionButton text={'Learn More'}/>
        </Box>
    )
}

export default IntroductionButtons;