import { getCurrentChampionNHLId, updateChampion, addToHistory } from "./firebase"
const updateCurrentChampion = async () => {    
    let currentChampion = 0;

    getCurrentChampionNHLId().then((res) => { currentChampion= res }).then(async() => {
        const response = await fetch(`https://statsapi.web.nhl.com/api/v1/teams/${currentChampion}/?expand=team.schedule.previous`);

        const data = await response.json();        
        const isChampionHome = data.teams[0].previousGameSchedule.dates[0].games[0].teams.home.team.id == currentChampion;        
    
        const homeTeamScore = data.teams[0].previousGameSchedule.dates[0].games[0].teams.home.score;        
        const awayTeamScore = data.teams[0].previousGameSchedule.dates[0].games[0].teams.away.score;        

        if(isChampionHome) {            
            if(awayTeamScore > homeTeamScore) {
                const newChampionId = data.teams[0].previousGameSchedule.dates[0].games[0].teams.away.team.id;                
                updateChampion(newChampionId, process.env.REACT_APP_CURRENT_CHAMPION);
                addToHistory(
                    data.teams[0].previousGameSchedule.dates[0].games[0].teams.away.team.id, 
                    data.teams[0].previousGameSchedule.dates[0].games[0].teams.home.team.id, 
                    data.teams[0].previousGameSchedule.dates[0].games[0].teams.away.score,
                    data.teams[0].previousGameSchedule.dates[0].games[0].teams.home.score,
                    newChampionId,
                    data.teams[0].previousGameSchedule.dates[0].date
                )
            }
        } else {
            if(homeTeamScore > awayTeamScore) {
                const newChampionId = data.teams[0].previousGameSchedule.dates[0].games[0].teams.home.team.id;
                updateChampion(newChampionId, process.env.REACT_APP_CURRENT_CHAMPION);
                addToHistory(
                    data.teams[0].previousGameSchedule.dates[0].games[0].teams.away.team.id, 
                    data.teams[0].previousGameSchedule.dates[0].games[0].teams.home.team.id, 
                    data.teams[0].previousGameSchedule.dates[0].games[0].teams.away.score,
                    data.teams[0].previousGameSchedule.dates[0].games[0].teams.home.score,                    
                    newChampionId,
                    data.teams[0].previousGameSchedule.dates[0].date
                )
            }
        }
    });
}

export {
    updateCurrentChampion
}