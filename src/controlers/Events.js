export const getNumberOfHomeEvents = (data) => {
    return data.map(match => match.away_team_events)
        .reduce((acc, events) => acc + events.length, 0);
}