import React, { useEffect } from "react";
import { updateCurrentChampion } from "../../firebase/nhl";

const UpdateChampionPage = () => {
    useEffect(() => {
        updateCurrentChampion();
    }, [])
    return (
        null
    )
}
export default UpdateChampionPage;