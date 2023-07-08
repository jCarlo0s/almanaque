import { TeamInfo } from "../games";

export interface PlayerInfo {
  id: Number,
  first_name: string,
  last_name: string,
  team: TeamInfo,
}

export interface DataResponse {
  success: boolean,
  data: Array<PlayerInfo>,
  error: string | null
}

const fetchPlayers = async (): Promise<DataResponse> => {
  try {
    const response = await fetch(`${process.env.PLAYER_API_URL}?search=jordan&per_page=100`);
    const playerList = await response.json();
    return {
      success: true,
      data: playerList.data,
      error: null
    }
  } catch (error) {
    return {
      success: false,
      data: [],
      error: (error instanceof Error) ? error.message : 'Unknown error'
    };
  }
};

export default fetchPlayers;