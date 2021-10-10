import React, { useState } from "react";
import Masonry from "react-masonry-css";
import ConfirmTeamButton from "../ConfirmTeamButton";
import teams from "../../constants/teams";
import './Masonry.css';
import { Box } from "@material-ui/core";
import { updateUserTeam } from "../../firebase/firebase";

const PickTeam = ({ documentId }) => {
    const [selectedTeam, setSelectedTeam] = useState(0);
    const onClick = (id) => {
        setSelectedTeam(id);
    };

    const confirmOnClick = () => {
        updateUserTeam(selectedTeam, documentId);
    }
    
    const items = teams.map((item) => {
        if(selectedTeam === item.id) {
            return <img key={item.id} src={item.src} alt="" onClick={() => { onClick(item.id)}} style={{ border: "solid 1px white", transform: "scale(1.3)"}}></img>
        }
        else {
            return <img key={item.id} src={item.src} alt="" onClick={() => { onClick(item.id)}}></img>
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
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
                >
                {items}
            </Masonry>
            {selectedTeam > 0 ? <ConfirmTeamButton onClick={confirmOnClick} /> : null}
        </Box>
    )

}

export default PickTeam;