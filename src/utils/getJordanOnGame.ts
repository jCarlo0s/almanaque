import { GameObject } from "@/server/games";
import { PlayerInfo } from "@/server/players";

export interface JordanOnGameResponse {
  isPresent: boolean,
  playerName: string,
}

const getJordanOnGame = (
    game: GameObject,
    playersList: Array<PlayerInfo>): JordanOnGameResponse => {
      
      let isPresent = false;
      let playerName = '';
      
      const player = playersList.find((player) => {
        if (player.team.id === game.home_team.id || player.team.id === game.visitor_team.id) {
          return true;
        }
      });

      if (player) {
        isPresent = true;
        playerName = `${player.first_name} ${player.last_name}`;
      }

    return {
      isPresent,
      playerName,
    }
};

export default getJordanOnGame;