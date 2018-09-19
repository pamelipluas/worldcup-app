import { getEventsFromEachMatch } from '../controlers/Scorers';

const scorers = require("../controlers/Scorers");


describe('Scorers', () => {
  describe('GetEvents from each match', () => {



      it('should call the method getEventsFromEachMatch once', () => {
        const spyGetEventsFromEachMatch = jest.spyOn(scorers, 'getEventsFromEachMatch');
        // const mockMatches= [{home_team_events: {0: {type_of_event: 'goal', player: 'a_player'}, 1: {type_of_event: 'other_event', player: 'other_player'}, 2: {type_of_event: 'goal', player: 'a_player'}},
        //   away_team_events: {0: {type_of_event: 'goal', 'player': 'b_player'}, 1: {type_of_event: 'other_event', player: 'other_player'}, 2: {type_of_event: 'goal', player: 'b_player'}}}];
        // setar las cosas - arrange
        // scorers.getEventsFromEachMatch = jest.fn();
        //llamar el metodo - act
        // scorers.getEventsFromEachMatch();
        //llamar al asssert
          getEventsFromEachMatch();
          expect(spyGetEventsFromEachMatch).toHaveBeenCalledTimes(1);
      });

    it('should call the method getEventsFromEachMatch with an array of data', () => {
      const spyGetEventsFromEachMatch = jest.spyOn(scorers, 'getEventsFromEachMatch');
      const mockMatches= [{home_team_events: {0: {type_of_event: 'goal', player: 'a_player'}, 1: {type_of_event: 'other_event', player: 'other_player'}, 2: {type_of_event: 'goal', player: 'a_player'}},
        away_team_events: {0: {type_of_event: 'goal', 'player': 'b_player'}, 1: {type_of_event: 'other_event', player: 'other_player'}, 2: {type_of_event: 'goal', player: 'b_player'}}}];
      // setar las cosas - arrange
      // scorers.getEventsFromEachMatch = jest.fn();
      //llamar el metodo - act
      // scorers.getEventsFromEachMatch();
      //llamar al asssert
      getEventsFromEachMatch();
      expect(spyGetEventsFromEachMatch).toHaveBeenCalledWith(mockMatches);
    });
    }
  );
});
