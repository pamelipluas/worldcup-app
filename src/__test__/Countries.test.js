import * as countries from "../models/Countries";

describe('Countries', () => {
    const spyGetNumberOfCountries = jest.spyOn(countries, 'getNumberOfCountries');
    const mockArray = (elements = 32) => { return Array.from({length: elements})};

    beforeEach(() => {

        const mockGetNumberOfCountries = jest.spyOn(countries, 'getNumberOfCountries');
        mockGetNumberOfCountries();
    });

    afterEach(() => {
        spyGetNumberOfCountries.mockRestore();
    });

    it('should call getNumberOfCountries with array of parameters', () => {
        expect(spyGetNumberOfCountries).toHaveBeenCalledWith(new Array(32));
    });

    it('should call getNumberOfCountries once', () => {
        expect(spyGetNumberOfCountries).toHaveBeenCalledTimes(1);
    });

    it('should get the list of 32 countries', () => {
        const listOfCountries = spyGetNumberOfCountries().then(response => {return response});
        console.log(listOfCountries);
        expect(listOfCountries).toBe(32);
    })
});

