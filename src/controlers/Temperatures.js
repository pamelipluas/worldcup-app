export const getHighestTemperature = (data) => {
    return data
        .map(match => parseInt(match.weather.temp_celsius))
        .reduce((previousTemperature, currentTemperature) => Math.max(previousTemperature, currentTemperature), 0);
}
