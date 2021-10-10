import { Typography, makeStyles, Grid, Box } from "@material-ui/core";
import React from "react";

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

const LearnMore = () => {
    const classes = useStyles();
    return (
        <Box>                         
            <Grid container justifyContent="flex-start">
                <Typography className={classes.typography}>What is the In Season Stanley Cup?</Typography>
                <Typography className={classes.paragraph}>
                    The In Season Stanley Cup was an idea discussed in an episode of the 32 Thoughts Podcast, hosted by Elliotte Friedman and Jeff Marek.
                    In the episode, they explained the idea behind the In Season Stanley Cup and performed a 4-person draft to decide a winner.
                    <br></br>The link to the podcast episode is: <a href="https://podcast.sportsnet.ca/31-thoughts/the-in-season-stanley-cup/" target="_blank">32 Thoughts: The Podcast</a> <br></br>
                    All credit for the idea goes to Elliotte and Jeff, in no way is this website claiming to have created or conceived this idea.
                    This website is simply a tool to be used to make it a little easier to track the winner of this competition :) 
                </Typography>

                <Typography className={classes.typography}>How does it work?</Typography>
                <Typography className={classes.paragraph}>
                    As explained in the podcast episode, the winner of this competition is the team that has the cup at the end of the regular season. To be the current champion, a team
                    must defeat the previous champion. The starting champion is the Tampa Bay Lightning, then whoever beats them first becomes the current champion. Then whoever beats that
                    team next, is the current champion. And so on, throughout the season, and the winner is the team that is the current champion at the end of the season.
                </Typography>

                <Typography className={classes.typography}>How does this website work?</Typography>
                <Typography className={classes.paragraph}>
                    This website tracks the winner of this competition throughout the season. To see the current holder at any point of the season, and see how they came to be the holder
                    at that point, navigate to the "See History" tab. To make a pick, navigate to the "View Pick" tab, where you can sign in via Google and make a pick for who you think the winner
                    will be. Come back at any time to see the current holder and the team you chose to win. Set up a competition with your friends where everyone chooses a team, and use this tool
                    to keep track of the winner!
                    More features are coming soon, to make the tool even better. Head over to the "Coming Soon" tab to check out upcoming features, or request one yourself.
                </Typography>
            </Grid>
        </Box>
    )
}

export default LearnMore;