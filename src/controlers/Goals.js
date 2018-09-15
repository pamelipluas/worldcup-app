export const getNumberOfGoals = (data) => {
    return data
        .map(match => match.home_team.goals + match.away_team.goals)
        .reduce(((acc, goals) => acc + goals), 0);
};

export const getNumberOfGoalsAfter90Min = (data) => {
    return data
        .reduce((acc, match) => [...acc, ...match.home_team_events, ...match.away_team_events], [])
        .filter(event => event.type_of_event === 'goal')
        .filter(goal => goal.time.includes('90\'+'))
        .reduce((acc => ++acc), 0);
}

export const getEarliestGoal = (data) => {
    return data
        .reduce((acc, match) => [...acc, ...match.home_team_events, ...match.away_team_events], [])
        .filter(event => event.type_of_event === 'goal')
        .filter(goal => !goal.time.includes('90\'+'))
        .map(goal => goal.time.replace('\'', ''))
        .reduce((acc, time) => Math.min(acc, parseInt(time)), 100);
}
