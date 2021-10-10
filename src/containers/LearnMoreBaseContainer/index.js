import React from "react";
import { CssBaseline, Box } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "../../themes/theme";
import Header from "../../containers/HeaderNotSignedIn";
import LearnMore from "../../components/LearnMore";

const LearnMoreBaseContainer = () => {   
    return (
        <ThemeProvider theme={theme}>
            <Box display='flex' flexDirection='column'> 
                <Header position="static" />                   
                <LearnMore />
                <CssBaseline />
            </Box>
        </ThemeProvider>        
    )

}

export default LearnMoreBaseContainer;