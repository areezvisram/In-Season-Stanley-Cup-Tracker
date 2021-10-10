import React, { useEffect, useState } from "react";
import { CssBaseline, Box } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "../../themes/theme";
import Header from "../../containers/HeaderNotSignedIn";
import { signInWithGoogle, getUserTeam } from "../../firebase/firebase";
import firebase from "@firebase/app-compat";
import Loading from "../../components/Loading";
import ShowTeam from "../../components/ShowTeam";

const JoinLeagueBaseContainer = () => {   
    const [isLoading, setLoading ] = useState(true);    
    const [userPick, setUserPick] = useState(-1);
    const [userId, setUserId] = useState(null);
    const [documentId, setDocumentId] = useState(null);

    useEffect(() => {      
      firebase.auth().onAuthStateChanged(user => {
        if (user) {                       
          setUserId(user.uid);          
          setLoading(false);
        }
        else {
          setLoading(false);
          signInWithGoogle();
        }
      })
    }, []);

    if(!isLoading) {
      getUserTeam(userId).then((res) => { setUserPick(res[0], setDocumentId(res[1]))});
    }
    
    return (
        <ThemeProvider theme={theme}>
            <Box display='flex' flexDirection='column'>
                {isLoading ? <Loading /> : 
                <Box>
                    <Header position="static" />                    
                    <ShowTeam team={userPick} uid={userId} documentId={documentId}/>                  
                </Box>
                }    
                <CssBaseline />
            </Box>
        </ThemeProvider>        
    )

}

export default JoinLeagueBaseContainer;