import React, { useEffect, useState } from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import PickTeam from "../PickTeam";
import teams from "../../constants/teams";
import Loading from "../Loading";
import { getCurrentChampion } from "../../firebase/firebase";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const useStyles = makeStyles((theme) => ({
    white: {
        color: theme.palette.primary.light,
        fontWeight: 'bold',
        fontSize: theme.spacing(6.5),
        marginLeft: theme.spacing(-18),
        marginTop: theme.spacing(3),
        [theme.breakpoints.up('1545')]: {
            marginLeft: theme.spacing(-5),
            fontSize: theme.spacing(7),
        },
        [theme.breakpoints.between('1155', '1433')]: {
            marginLeft: theme.spacing(-5),
            fontSize: theme.spacing(5),
        },
        [theme.breakpoints.between('1155', '1433')]: {
            marginLeft: theme.spacing(-5),
            fontSize: theme.spacing(5),
        },
        [theme.breakpoints.between('5', '1154')]: {
            marginLeft: theme.spacing(-10),
            fontSize: theme.spacing(5),
            marginTop: theme.spacing(25)
        },
    },
    current: {
        color: theme.palette.primary.light,
        fontWeight: 'bold',
        fontSize: theme.spacing(6.5),
        marginLeft: theme.spacing(10),
        marginTop: theme.spacing(3),
        [theme.breakpoints.up('1545')]: {
            marginLeft: theme.spacing(25),
            fontSize: theme.spacing(7),
        },
        [theme.breakpoints.between('1125', '1433')]: {
            marginLeft: theme.spacing(20),
            fontSize: theme.spacing(5),
        },
        [theme.breakpoints.between('975', '1124')]: {
            marginLeft: theme.spacing(10),
            fontSize: theme.spacing(5),     
        },
        [theme.breakpoints.between('780', '974')]: {
            marginLeft: theme.spacing(3),
            fontSize: theme.spacing(5),     
        },
        [theme.breakpoints.between('720', '779')]: {
            marginLeft: theme.spacing(0),
            fontSize: theme.spacing(5),     
        },

        [theme.breakpoints.between('5', '719')]: {
            marginLeft: theme.spacing(-11),
            fontSize: theme.spacing(5),     
        },
    },
    box: {
        background: 'transparent',
        boxShadow: 'none',
        marginTop: '13%',
        marginLeft: '20%', 
        height: '200px'        
    },

    logo: {
        marginLeft: theme.spacing(40),
        height: theme.spacing(25),
        width: theme.spacing(38),        
        [theme.breakpoints.between('1100', '1433')]: {
            marginLeft: theme.spacing(35),
        },
        [theme.breakpoints.between('975', '1099')]: {
            marginLeft: theme.spacing(25),
        },
        [theme.breakpoints.between('750', '974')]: {
            marginLeft: theme.spacing(15),
        },
        [theme.breakpoints.between('625', '749')]: {
            marginLeft: theme.spacing(5),
        },
        [theme.breakpoints.down('749')]: {
            marginLeft: theme.spacing(0),
        },
    },

    selection: {
        color: theme.palette.primary.light,
        fontWeight: 'bold',
        fontSize: theme.spacing(8),
        marginLeft: theme.spacing(15),
        marginTop: theme.spacing(0),

        [theme.breakpoints.between('1400', '1800')]: {
            marginLeft: theme.spacing(0),
        },

        [theme.breakpoints.between('1230', '1399')]: {
            marginLeft: theme.spacing(5),
            fontSize: theme.spacing(7)
        },
        [theme.breakpoints.between('1140', '1229')]: {
            marginLeft: theme.spacing(0),
            fontSize: theme.spacing(7)
        },
        [theme.breakpoints.between('1030', '1139')]: {    
            paddingTop: theme.spacing(5),
            marginLeft: theme.spacing(-5),
            fontSize: theme.spacing(6.5)
        },
        [theme.breakpoints.between('900', '1029')]: {    
            paddingTop: theme.spacing(10),
            marginLeft: theme.spacing(-10),
            fontSize: theme.spacing(6.5)
        },
        [theme.breakpoints.between('5', '899')]: {    
            paddingTop: theme.spacing(15),
            marginLeft: theme.spacing(-10),
            fontSize: theme.spacing(5.5)
        },
    }
}));

const ShowTeam = ({ team, documentId }) => {
    const [currentChampion, setCurrentChampion] = useState(0);
    const classes = useStyles();        

    useEffect(() => {
        getCurrentChampion().then((res) =>  setCurrentChampion(res));        
        disableBodyScroll(document);
        if(team == 0) {            
            enableBodyScroll(document);            
        }
    })

    if(team === -1) {
        return <Loading />
    }    

    return (
        <Box className={classes.box}>
            {team != 0 ?                
                <Box>
                    <Typography className={classes.white} variant="h3" align="left">
                        Your pick for In Season Stanley Cup Champion:
                    </Typography>
                    <img src={teams.find(x => x.id == team).src} alt="" className={classes.logo}></img>
                    <Typography className={classes.current} variant="h3" align="left">
                        The current champion is:
                    </Typography>
                    {
                        currentChampion != 0 ? <img src={teams.find(x => x.id == currentChampion).src} alt="" className={classes.logo}></img> : null                        

                    }                    
                </Box>            
            : 
            <Box>
                <Typography className={classes.selection} variant="h3" align="left">
                    You have not made a selection. <br></br>         
                    Make a selection below.
                </Typography>                
                <PickTeam documentId={documentId} />
            </Box>
            }
        </Box>
    )
}

export default ShowTeam;