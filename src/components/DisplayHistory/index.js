import React, { useEffect, useState } from "react";
import { getHistory } from "../../firebase/firebase";
import Game from "../Game";
import { Box, Typography, makeStyles, Grid } from "@material-ui/core";
import Loading from "../Loading";

const useStyles = makeStyles((theme) => ({
    typography: {
        fontSize: theme.spacing(8),
        color: theme.palette.primary.light,
        marginTop: theme.spacing(8),
        fontWeight: "bold",   
        [theme.breakpoints.down('475')]: {
            fontSize: theme.spacing(5),
        },     
    },
}));

const DisplayHistory = () => {
    const classes = useStyles();
    const [gameHistory, setGameHistory] = useState([]);
    useEffect(() => {
        getHistory().then((res) =>  setGameHistory(res));  
    }, []);    

    return (
        <Box display="flex" flexDirection="column">
            <Grid container justifyContent="center">
                <Typography className={classes.typography}>Season History</Typography>      
            </Grid>        
        {                 
              
            gameHistory.length != 0 ? (
                gameHistory.map(game => 
                <Game 
                    key={game._delegate._document.data.value.mapValue.fields.index.integerValue}
                    awayId={game._delegate._document.data.value.mapValue.fields.awayTeamId.integerValue} 
                    homeId={game._delegate._document.data.value.mapValue.fields.homeTeamId.integerValue} 
                    awayScore={game._delegate._document.data.value.mapValue.fields.awayTeamScore.integerValue} 
                    homeScore={game._delegate._document.data.value.mapValue.fields.homeTeamScore.integerValue} 
                    date={game._delegate._document.data.value.mapValue.fields.gameDate.stringValue} 
                    currentChampion={game._delegate._document.data.value.mapValue.fields.championId.integerValue} 
                /> )
            ) : (
                <Loading />
            )
        }        
        </Box>
    )
}

export default DisplayHistory;