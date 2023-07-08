'use server'
import fetchPlayers from "../players"
import getJordanOnGame from "@/utils/getJordanOnGame"

export interface TeamInfo {
  id: Number,
  abbreviation: string,
  city: string,
  conference: string,
  division: string,
  full_name: string,
  name: string
}

export interface GameObject {
  id: number,
  date: string,
  home_team: TeamInfo,
  home_team_score: number,
  visitor_team: TeamInfo,
  visitor_team_score: number,
  jordan: string,
}

export interface MetaInfo {
  total_pages: number,
  current_page: number,
  next_page: number,
  per_page: number,
  total_count: number
}

export interface DataResponse {
  success: boolean,
  data: Array<GameObject>,
  meta: MetaInfo,
  error: string | null
}

interface params {
  pageNumber?: number
}

const fetchAllGames = async (
  params: params
  ): Promise<DataResponse> => {
  try {
    const url = (params.pageNumber) ? `${process.env.GAME_API_URL}?seasons[]=2019&page=${params.pageNumber}` : `${process.env.GAME_API_URL}?seasons[]=2019`;
    const response = await fetch(url);
    const gamesList = await response.json();

    // Get players info to detect if jordan was on the game
    const playersResponse =  await fetchPlayers();

    gamesList.data.forEach((game: GameObject) => {
      const winnerTeam = (game.home_team_score > game.visitor_team_score) ? game.home_team : game.visitor_team;
      const wasJordanOnGame = getJordanOnGame(winnerTeam, playersResponse.data);
      if (wasJordanOnGame.isPresent) {
        game['jordan'] = wasJordanOnGame.playerName;
      } else {
        game['jordan'] = '';
      }
    });

    return {
      success: true,
      data: gamesList.data,
      meta: gamesList.meta,
      error: null
    }
  } catch (error) {
    return {
      success: false,
      data: [],
      meta: {} as MetaInfo,
      error: (error instanceof Error) ? error.message : 'Unknown error'
    };
  }
};

export default fetchAllGames;