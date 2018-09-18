const goals = require("../controlers/Goals");
describe('Goals', () => {
    describe('GetNumberOfGoalsPerMatch', () => {
        const mockMatches = [{home_team : {goals: 2}, away_team: {goals : 6}}];
        goals.getNumberOfGoalsPerMatch = jest.fn(() => 8);
        const result = goals.getNumberOfGoalsPerMatch(mockMatches);

        it('should call getNumberOfGoalsPerMatch with array of parameters', () => {
            expect(goals.getNumberOfGoalsPerMatch).toHaveBeenCalledWith(mockMatches);
        });

        it('should call getNumberOfCountries once', () => {
            expect(goals.getNumberOfGoalsPerMatch).toHaveBeenCalledTimes(1);
        });

        it('should get 8 goals', () => {
            expect(result).toBe(8);
        })
    });


    describe('AddGoals', () => {
        goals.addGoals = jest.fn(() => 3);
        const result = goals.addGoals(1,2);

        it('should call addGoals with two parameters parameters', () => {
            expect(goals.addGoals).toHaveBeenCalledWith(1,2);
        });

        it('should call addGoals once', () => {
            expect(goals.addGoals).toHaveBeenCalledTimes(1);
        });

        it('should get 3 goals', () => {
            expect(result).toBe(3);
        })
    });

    describe('GetEvent', () => {
        const mockGetEvent = [{type_of_event : 'goal'}];
        goals.getEvent = jest.fn(() => 'goal');
        const result = goals.getEvent(mockGetEvent);

        it('should call getEvent with one parameter ', () => {
            expect(goals.getEvent).toHaveBeenCalledWith(mockGetEvent);
        });

        it('should call getEvent once', () => {
            expect(goals.getEvent).toHaveBeenCalledTimes(1);
        });

        it('should get the word goal', () => {
            expect(result).toBe('goal');
        })
    });

});

