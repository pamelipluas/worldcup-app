export const getHighestTemperature = (data) => {
    return data
        .map(match => parseInt(match.weather.temp_celsius))
        .reduce((acc, celsius) => Math.max(acc, celsius), 0);
}
