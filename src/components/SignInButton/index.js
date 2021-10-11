import React from "react";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    button: {
        marginRight: theme.spacing(5),
        marginTop: theme.spacing(30),
        backgroundColor: theme.palette.primary.light,
        fontSize: theme.spacing(3),
        marginBottom: theme.spacing(2),
        fontWeight: 'bold',
        transition: 'transform .2s',
        transitionTimingFunction: 'ease-out',
        "&:hover": {
            transform: 'scale(1.1)'
        },   
        borderRadius: '15px'
    },
}));

const SignInButton = ({ text, onClick }) => {
    const classes = useStyles();          
    return (
        <Button variant="contained" className={classes.button} onClick={onClick}>{text}</Button>
    )
}

export default SignInButton;