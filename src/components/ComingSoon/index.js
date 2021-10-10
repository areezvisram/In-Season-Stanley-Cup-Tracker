import { Typography, makeStyles, Grid, Box } from "@material-ui/core";
import React, { useEffect } from "react";
import ContactForm from "../ContactForm";
import { enableBodyScroll } from "body-scroll-lock";

const useStyles = makeStyles((theme) => ({
    typography: {
        fontSize: theme.spacing(6),
        color: theme.palette.primary.light,
        marginTop: theme.spacing(5),        
        marginLeft: theme.spacing(5),
        fontWeight: 'bold'
    },
    paragraph: {
        fontSize: theme.spacing(4),
        color: theme.palette.primary.light,        
        marginLeft: theme.spacing(5),        
    },
}));

const ComingSoon = () => {
    useEffect(() => {
        enableBodyScroll(document);
    })    
    const classes = useStyles();
    return (
        <Box>                         
            <Grid container justifyContent="flex-start">
                <Typography className={classes.typography}>Features Coming Soon</Typography>
                <Typography className={classes.paragraph}>
                    - Champions for number of days tracker <br></br> 
                    Track the number of days your pick was champion throughout the season. Another way to compete with friends <br></br>
                    - Live draft with friends <br></br>
                    Start leagues with your friends and have a live draft where you all choose teams to see who wins
                </Typography>

                <Typography className={classes.typography}>Request a Feature</Typography>
                <Typography className={classes.paragraph}>
                    If you have any feature requests, or any general feedback, feel free to leave it here!
                </Typography>
                <ContactForm />
            </Grid>
        </Box>
    )
}

export default ComingSoon;