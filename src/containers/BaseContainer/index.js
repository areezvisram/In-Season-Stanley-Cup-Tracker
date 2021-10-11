import React from "react";
import { CssBaseline, Box } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "../../themes/theme";
import IntroductionImage from "../IntroductionImage";
import { disableBodyScroll } from "body-scroll-lock";

const BaseContainer = () => {            
    disableBodyScroll(document);    
    return (
        <ThemeProvider theme={theme}>
            <Box display='flex' flexDirection='column' height='300vh'>                          
                <IntroductionImage />
                <CssBaseline />
            </Box>
        </ThemeProvider>        
    )

}

export default BaseContainer;