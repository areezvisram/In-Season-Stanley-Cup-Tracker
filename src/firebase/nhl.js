import { getCurrentChampionNHLId, updateChampion } from "./firebase"
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
                updateChampion(newChampionId, "mAwAeBWxUk4eolCWIjSG");
            } else if(homeTeamScore > awayTeamScore) {                
            }
        } else {
            if(homeTeamScore > awayTeamScore) {
                const newChampionId = data.teams[0].previousGameSchedule.dates[0].games[0].teams.home.team.id;
                updateChampion(newChampionId, "mAwAeBWxUk4eolCWIjSG");
            } else if(awayTeamScore > homeTeamScore) {                
            }
        }
    });
}

export {
    updateCurrentChampion
}