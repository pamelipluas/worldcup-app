export function getNumberOfGoalsPerMatch(data) {
  return data.map(match => match.home_team.goals + match.away_team.goals);
}

export function addGoals(previousGoal, currentGoal) {
  return previousGoal + currentGoal;
}

export function getMatches(previousMatch, currentMatch) {
  return [...previousMatch, ...currentMatch.home_team_events, ...currentMatch.away_team_events];
}

export function getEvent(currentEvent) {
  return currentEvent.type_of_event === 'goal';
}

export function getGoalAfterMin90(goal) {
  return goal.time.includes('90\'+');
}

export function reduceGetMatches(data) {
  return data.reduce(getMatches, []);
}

export function getFilteredEvents(data) {
  return data.filter(getEvent);
}

export function getFilteredAfterMin90(data) {
  return data.filter(getGoalAfterMin90);
}

export function geTimeReplaced(data) {
  return data.map(goal => goal.time.replace('\'', ''));
}

export function getTimeOfEarliestGoal(data) {
  return data.reduce((previousTime, currentTime) => Math.min(previousTime, parseInt(currentTime)),
    100);
}

export function getGoalsAfterMin90(data){
  return data.reduce((goalAmount => ++goalAmount), 0);
}

export const getNumberOfGoals = (data) => {
    return getNumberOfGoalsPerMatch(data).reduce(addGoals, 0);
};

export const getNumberOfGoalsAfter90Min = (data) => {
  const matches = reduceGetMatches(data);
  const filterEvents = getFilteredEvents(matches);
  const filterGoalsAfter90 = getFilteredAfterMin90(filterEvents);
  return getGoalsAfterMin90(filterGoalsAfter90);
};

export const getEarliestGoal = (data) => {
  const matches = reduceGetMatches(data);
  const filterEvents = getFilteredEvents(matches);
  const filterGoalsAfter90 = getFilteredAfterMin90(filterEvents);
  const timeReplaced = geTimeReplaced(filterGoalsAfter90);
  return getTimeOfEarliestGoal(timeReplaced);
};
