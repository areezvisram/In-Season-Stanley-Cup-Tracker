import React from "react";
import { CssBaseline, Box } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "../../themes/theme";
import Header from "../../containers/HeaderNotSignedIn";
import ComingSoon from "../../components/ComingSoon";

const ComingSoonBaseContainer = () => {   
    return (
        <ThemeProvider theme={theme}>
            <Box display='flex' flexDirection='column'> 
                <Header position="static" />  
                <ComingSoon />                                 
                <CssBaseline />
            </Box>
        </ThemeProvider>        
    )

}

export default ComingSoonBaseContainer;