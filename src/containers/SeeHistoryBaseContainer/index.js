import React from "react";
import { CssBaseline, Box } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "../../themes/theme";
import Header from "../../containers/HeaderNotSignedIn";
import DisplayHistory from "../../components/DisplayHistory";
import { enableBodyScroll } from "body-scroll-lock";

const SeeHistoryBaseContainer = () => {   
    enableBodyScroll(document);
    return (
        <ThemeProvider theme={theme}>
            <Box display='flex' flexDirection='column'> 
                <Header position="relative"/>                   
                <DisplayHistory />
                <CssBaseline />
            </Box>
        </ThemeProvider>        
    )

}

export default SeeHistoryBaseContainer;