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
            <IntroductionButton text={'MAKE PICK'} route="/view-pick"/>
            <IntroductionButton text={'See History'} route="/see-history"/>
            <IntroductionButton text={'Learn More'} route="/learn-more"/>
        </Box>
    )
}

export default IntroductionButtons;