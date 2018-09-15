
export const getNumberOfCountries = (data) => {
    let countries = [];
    data.map(match => match.home_team_country)
        .filter(country => {
            if (countries.includes(country)) {
                return false;
            }
            countries.push(country);
            return true;
        })
        .reduce((acc => ++acc), 0);

    return countries.length;
};
