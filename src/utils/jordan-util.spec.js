import getJordanOnGame from "./getJordanOnGame";

describe('JordanUtil', () => {

  let game;
  let playersList;

  beforeEach(() => {
    game = {
      id: 1,
      date: '2020-01-01',
      home_team: {
        id: 1,
        abbreviation: 'CHI',
        city: 'Chicago',
        conference: 'East',
        division: 'Central',
        full_name: 'Chicago Bulls',
        name: 'Bulls'
      },
      home_team_score: 100,
      visitor_team: {
        id: 2,
        abbreviation: 'NYK',
        city: 'New York',
        conference: 'East',
        division: 'Atlantic',
        full_name: 'New York Knicks',
        name: 'Knicks'
      },
      visitor_team_score: 90,
      jordan: '',
    }

    playersList = [
      {
        id: 1,
        first_name: 'Michael',
        last_name: 'Jordan',
        team: {
          id: 1,
          abbreviation: 'CHI',
          city: 'Chicago',
          conference: 'East',
          division: 'Central',
          full_name: 'Chicago Bulls',
          name: 'Bulls'
        }
      }
    ];
  });

  it('should return true if jordan was on the game', () => {
    const result = getJordanOnGame(game, playersList);
    expect(result.isPresent).toBe(true);
  });

  it('should return false if jordan was not on the game', () => {
    game.home_team.id = 3;
    game.visitor_team.id = 4;
    const result = getJordanOnGame(game, playersList);
    expect(result.isPresent).toBe(false);
  });
});