
export const getNumberOfCountries = (data) => {
    return data
        .map(match => match.home_team_country)
        .reduce((countries, country) => countries.includes(country) ? countries : [...countries, country], [])
        .length;
};

