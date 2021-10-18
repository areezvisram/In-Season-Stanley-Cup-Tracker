import { Typography, makeStyles, Grid, Box , useMediaQuery, useTheme } from "@material-ui/core";
import React from "react";
import teams from "../../constants/teams";

const useStyles = makeStyles((theme) => ({
    typography: {
        fontSize: theme.spacing(6),
        color: theme.palette.primary.light,
        marginTop: theme.spacing(5),        
    },
    date: {
        fontSize: theme.spacing(6),
        color: theme.palette.primary.light,
        marginTop: theme.spacing(5),
        marginLeft: theme.spacing(5)
    },
    logo: {
        marginLeft: theme.spacing(-5),
        [theme.breakpoints.down('460')]: {
            width: '150px',
            height: '112px',
            marginTop: theme.spacing(2)
        },
    },   
    awayLogo: {
        [theme.breakpoints.down('460')]: {
            width: '150px',
            height: '112px',
            marginTop: theme.spacing(2)
        },
    },
    champion: {
        fontSize: theme.spacing(6),
        color: theme.palette.primary.light,
        marginTop: theme.spacing(5),
        marginLeft: theme.spacing(5),
    },
}));

const Game = ({ homeId, awayId, homeScore, awayScore, date, currentChampion }) => {
    const classes = useStyles();
    const theme = useTheme();
    const isSmallDisplay = useMediaQuery(theme.breakpoints.between('0', '800'));    

    return (
        <Box>
            {!isSmallDisplay ?                
                <Box>
                    <Grid container justifyContent="center">
                        <Typography className={classes.date}>{date}</Typography>
                        <img src={teams.find(x => x.id == homeId).src} alt=""></img>
                        <Typography className={classes.typography}>{homeScore} - {awayScore}</Typography>
                        <img src={teams.find(x => x.id == awayId).src} alt=""></img>
                    </Grid>        
                    <Grid container justifyContent="center" direction="row">
                        <Typography className={classes.champion}>Champion: </Typography>
                        <img src={teams.find(x => x.id == currentChampion).src} alt=""></img>
                    </Grid>              
                </Box>            
            : 
            <Box>
                <Grid container justifyContent="center">
                    <Typography className={classes.date}>{date}</Typography>
                 </Grid>
                <Grid container justifyContent="center">
                    <img src={teams.find(x => x.id == homeId).src} className={classes.logo}></img>
                    <Typography className={classes.typography}>{homeScore} - {awayScore}</Typography>
                    <img src={teams.find(x => x.id == awayId).src} className={classes.awayLogo}></img>
                    </Grid>
                <Grid container justifyContent="center" direction="row">
                    <Typography className={classes.champion}>Champion: </Typography>
                    <img src={teams.find(x => x.id == currentChampion).src}></img>
                </Grid>
            </Box>
            }
        </Box>
    )
}

export default Game;