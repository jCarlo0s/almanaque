import getJordanOnGame from "./getJordanOnGame";

describe('JordanUtil', () => {

  let winnerTeam;
  let playersList;

  beforeEach(() => {
    winnerTeam = {
      id: 1,
      abbreviation: 'CHI',
      city: 'Chicago',
      conference: 'East',
      division: 'Central',
      full_name: 'Chicago Bulls',
      name: 'Bulls'
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
    const result = getJordanOnGame(winnerTeam, playersList);
    expect(result.isPresent).toBe(true);
  });

  it('should return false if jordan was not on the game', () => {
    winnerTeam.id = 2;
    const result = getJordanOnGame(winnerTeam, playersList);
    expect(result.isPresent).toBe(false);
  });
});