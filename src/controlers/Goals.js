

function getNumberOfGoalsPerMatch(data)
{
    return data.map(match => match.home_team.goals + match.away_team.goals);
}

function addGoals(previousGoal, currentGoal)
{
    return previousGoal + currentGoal;
}

export const getNumberOfGoals = (data) => {
    return getNumberOfGoalsPerMatch(data).reduce(addGoals, 0);
};

function getMatches(previousMatch, currentMatch){
     return [...previousMatch, ...currentMatch.home_team_events, ...currentMatch.away_team_events]
}

function getEvent(currentEvent){
    return currentEvent.type_of_event === 'goal';
}

function getGoalAfterMin90(goal){
    return !goal.time.includes('90\'+')
}


export const getNumberOfGoalsAfter90Min = (data) => {
    return data
        .reduce(getMatches, [])
        .filter(getEvent)
        .filter(getGoalAfterMin90)
        .reduce((goalAmount => ++goalAmount), 0);
};

export const getEarliestGoal = (data) => {
    return data
        .reduce(getMatches, [])
        .filter(getEvent)
        .filter(getGoalAfterMin90)
        .map(goal => goal.time.replace('\'', ''))
        .reduce((previousTime, currentTime) => Math.min(previousTime, parseInt(currentTime)), 100);
};
