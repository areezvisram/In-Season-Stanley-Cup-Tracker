import React from "react";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    button: {
        marginTop: theme.spacing(5),
        marginLeft: theme.spacing(30),
        marginBottom: theme.spacing(5),
        backgroundColor: theme.palette.primary.light,
        fontSize: theme.spacing(4),
        [theme.breakpoints.between('1050', '1170')]: {
            marginLeft: theme.spacing(25),
        },
        [theme.breakpoints.between('980', '1049')]: {
            marginLeft: theme.spacing(20),
        },
        [theme.breakpoints.between('895', '965')]: {
            marginLeft: theme.spacing(15),
        },
        [theme.breakpoints.between('770', '894')]: {
            marginLeft: theme.spacing(5),
        },
        [theme.breakpoints.between('500', '769')]: {
            marginLeft: theme.spacing(-5),
        },
        fontWeight: 'bold',
        transition: 'transform .2s',
        transitionTimingFunction: 'ease-out',
        "&:hover": {
            transform: 'scale(1.1)'
        },   
        borderRadius: '15px'
    },
}));

const ConfirmTeamButton = ({ onClick }) => {
    const classes = useStyles();          
    return (
        <Button variant="contained" className={classes.button} onClick={() => { onClick() }}>Confirm Selection</Button>
    )
}

export default ConfirmTeamButton;