import React, { useState } from "react";
import Masonry from "react-masonry-css";
import ConfirmTeamButton from "../ConfirmTeamButton";
import teams from "../../constants/teams";
import { Box, makeStyles } from "@material-ui/core";
import { updateUserTeam } from "../../firebase/firebase";

const useStyles = makeStyles((theme) => ({
    masonryGrid: {
        display: "-webkit-box",
        display: "-ms-flexbox",
        display: "flex",
        marginLeft: "-32%",
        marginTop: "10%",
        width: "auto",
        [theme.breakpoints.down('780')]: {
            marginLeft: "-45%"
        },
    },

    masonryGridColumn: {
        paddingLeft: "30px",
        marginLeft: "90px",
        backgroundClip: "padding-box"
    },

    masonryImage: {
        marginBottom: "30px",
        paddingLeft: "10px",
        transition: "transform 0.2s",
        "&:hover": {
            transform: 'scale(1.4)',
            cursor: "pointer"
        },   
        "&:active": {
            border: "solid 1 px white",
            transform: "scale(1.2)"
        },
        [theme.breakpoints.down('780')]: {
            marginBottom: "30px",
            paddingLeft: "5px",
            transition: "transform 0.2s"
        },
    }

}));

const PickTeam = ({ documentId }) => {
    const classes = useStyles();
    const [selectedTeam, setSelectedTeam] = useState(0);
    const onClick = (id) => {
        setSelectedTeam(id);
    };

    const confirmOnClick = () => {
        updateUserTeam(selectedTeam, documentId).then(() => {
            window.location.reload(false);
        });
    }
    
    const items = teams.map((item) => {
        if(selectedTeam === item.id) {
            return <img key={item.id} src={item.src} alt="" onClick={() => { onClick(item.id)}} style={{ border: "solid 1px white", transform: "scale(1.3)"}} className={classes.masonryImage}></img>
        }
        else {
            return <img key={item.id} src={item.src} alt="" onClick={() => { onClick(item.id)}} className={classes.masonryImage}></img>
        }        
    });    

    const breakpointColumnsObj = {
        default: 4,
        1258: 3,
        925: 2,      
        600: 1  
    }

    return (
        <Box>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className={classes.masonryGrid}
                columnClassName={classes.masonryGridColumn}
                >
                {items}
            </Masonry>
            {selectedTeam > 0 ? <ConfirmTeamButton onClick={confirmOnClick} /> : null}
        </Box>
    )

}

export default PickTeam;