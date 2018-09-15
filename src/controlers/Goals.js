export const getNumberOfGoals = (data) => {
    return data
        .map(match => match.home_team.goals + match.away_team.goals)
        .reduce(((previousGoal, currentGoal) => previousGoal + currentGoal), 0);
};

export const getNumberOfGoalsAfter90Min = (data) => {
    return data
        .reduce((previousMatch, currentMatch) => [...previousMatch, ...currentMatch.home_team_events, ...currentMatch.away_team_events], [])
        .filter(event => event.type_of_event === 'goal')
        .filter(goal => goal.time.includes('90\'+'))
        .reduce((goalAmount => ++goalAmount), 0);
}

export const getEarliestGoal = (data) => {
    return data
        .reduce((previousMatch, currentMatch) => [...previousMatch, ...currentMatch.home_team_events, ...currentMatch.away_team_events], [])
        .filter(event => event.type_of_event === 'goal')
        .filter(goal => !goal.time.includes('90\'+'))
        .map(goal => goal.time.replace('\'', ''))
        .reduce((previousTime, currentTime) => Math.min(previousTime, parseInt(currentTime)), 100);
}
