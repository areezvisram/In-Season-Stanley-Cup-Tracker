import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import PickTeam from "../PickTeam";
import teams from "../../constants/teams";
import Loading from "../Loading";

const useStyles = makeStyles((theme) => ({
    white: {
        color: theme.palette.primary.light,
        fontWeight: 'bold',
        fontSize: theme.spacing(8)         
    },
    box: {
        background: 'transparent',
        boxShadow: 'none',
        marginTop: '12%',
        marginLeft: '20%'      
    }
}));

const ShowTeam = ({ team, documentId }) => {
    const classes = useStyles();        

    if(team === -1) {
        return <Loading />
    }


    return (
        <Box className={classes.box}>
            {team != 0 ?                                     
                <Box>
                    <Typography className={classes.white} variant="h3" align="left">
                        Your pick for In Season Stanley Cup Champion: {team}
                    </Typography>
                    <img src={teams.find(x => x.id == team).src} alt=""></img>
                </Box>            
            : 
            <Box>
                <Typography className={classes.white} variant="h3" align="left">
                    You have not made a selection.
                </Typography>
                <Typography className={classes.white} variant="h3" align="left">
                    Make a selection below.
                </Typography>
                <PickTeam documentId={documentId} />
            </Box>
            }
        </Box>
    )
}

export default ShowTeam;