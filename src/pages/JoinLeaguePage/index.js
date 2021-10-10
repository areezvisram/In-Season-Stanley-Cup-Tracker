import React from "react";
import JoinLeagueBaseContainer from "../../containers/JoinLeagueBaseContainer";
import { signInWithGoogle } from "../../firebase/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";


const JoinLeaguePage = () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        return <JoinLeagueBaseContainer />
      } else {
        signInWithGoogle();        
      }
    });
    
    return <JoinLeagueBaseContainer/>;
}

export default JoinLeaguePage;