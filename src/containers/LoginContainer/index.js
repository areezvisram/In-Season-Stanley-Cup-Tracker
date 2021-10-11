import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { signInWithGoogle, auth } from "../../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../../components/Loading";
import { Grid } from "@material-ui/core";
import SignInButton from "../../components/SignInButton";

const Login = () => {
    const [isLoading, setLoading] = useState(false);
    const [user, loading, error] = useAuthState(auth);
    const history = useHistory();
    useEffect(() => {
    if (loading) {
        setLoading(true);
    }
    if (user) {          
        setTimeout(() => {            
            history.replace("/view-pick")
            }, 500); 
    } 
    }, [user, loading]);

    if(isLoading) {
        <Loading />
    }
    return (
        <Grid container justifyContent="center" spacing={0} alignItems="center" style={{ height: "100vh", backgroundColor: 'black'}}>
            <SignInButton text="Login With Google" onClick={signInWithGoogle} />
        </Grid>    
    );
}
export default Login;