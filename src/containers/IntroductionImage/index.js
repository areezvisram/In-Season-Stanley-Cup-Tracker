import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import background from './cup2.jpeg';
import Header from "../HeaderNotSignedIn";
import IntroductionText from "../IntroductionText";
import IntroductionButtons from "../IntroductionButtons";

const useStyles = makeStyles((theme) => ({
    box: {        
        height: theme.spacing(50),
        flexGrow: 1,
    },

    image: {        
        minHeight: '100%',
        minWidth: '1024px',
        backgroundPosition: 'center center',
        width: '100%',
        height: '100%',        
        position: 'fixed',
        top: 0,
        left: 0,
    },

    blur: {
        backdropFilter: "blur(30px)",
        backgroundColor:'rgba(0,0,30,0.4)'
    }
}));

const IntroductionImage = () => {    
    const classes = useStyles();
    return (
        <Box className={classes.box}>
            <Header position="relative" />       
            <div style= {{ height: '35%' }}>
                <img src={background} alt="" className={classes.image}></img>
                <IntroductionText />
                <IntroductionButtons />
            </div>
        </Box>
    );
};

export default IntroductionImage;