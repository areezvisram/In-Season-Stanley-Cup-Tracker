import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    button: {
        marginRight: theme.spacing(5),
        marginTop: theme.spacing(2),
        backgroundColor: theme.palette.primary.light,
        fontSize: theme.spacing(3),
        [theme.breakpoints.between('md', '1320')]: {
            fontSize: theme.spacing(2.5),
        },
        [theme.breakpoints.between('sm', '1150')]: {
            fontSize: theme.spacing(2),
        },
        [theme.breakpoints.between('868', '1000')]: {
            fontSize: theme.spacing(1.8),
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            fontSize: theme.spacing(1.6),
        },
        [theme.breakpoints.between('815', '867')]: {
            fontSize: theme.spacing(1.7),
            marginRight: theme.spacing(3),            
        },
        [theme.breakpoints.between('776', '815')]: {
            fontSize: theme.spacing(1.7),
            marginRight: theme.spacing(2),            
        },
        [theme.breakpoints.between('750', '776')]: {
            fontSize: theme.spacing(1.6),
            marginRight: theme.spacing(2)
        },
        [theme.breakpoints.down('548')]: {
            fontSize: theme.spacing(1.5),
            marginRight: theme.spacing(1)
        },
        fontWeight: 'bold',
        transition: 'transform .2s',
        transitionTimingFunction: 'ease-out',
        "&:hover": {
            transform: 'scale(1.1)'
        },   
        borderRadius: '15px'
    },

    link: {
        textDecoration: 'none'
    }
}));

const IntroductionButton = ({ text, route }) => {
    const classes = useStyles();          
    return (
        <Link to={route} className={classes.link} >
            <Button variant="contained" className={classes.button}>{text}</Button>
        </Link>
    )
}

export default IntroductionButton;