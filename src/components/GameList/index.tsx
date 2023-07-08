'use client'
import { DataResponse } from "@/server/games"
import { useEffect, useState } from "react"
import fetchAllGames from "@/server/games"
import MatchCard from "@/components/MatchCard"

interface GameListProps {
  initialData: DataResponse,
}

const GameList = (props: GameListProps): JSX.Element => {
  const [gameCards, setGameCards] = useState<any | null>(props.initialData)
  const [currentPageNumber, setCurrentPageNumber] = useState<number>(1)
  const [likedGames, setLikedGames] = useState<any | null>([])

  const changePage = async (pageNumber: number) => {
    if (pageNumber < 1) {
      return null;
    }
    if (pageNumber > props.initialData.meta.total_pages) {
      return null;
    }
    const games = await fetchAllGames({ pageNumber })
    if (games.success) {
      setCurrentPageNumber(pageNumber)
      setGameCards({...games})
    }
  }

  const likeItem = (gameId: number): boolean => {
    if (likedGames.length < 2 && !likedGames.includes(gameId)) {
      let liked = [...likedGames]
      liked.push(gameId)
      console.log(liked)
      setLikedGames(liked)
      return true
    }
    return false
  }

  return (
    <div>
      <div className="font-poppins text-right pr-5 hidden lg:block">Pagina: {currentPageNumber} de {props.initialData.meta.total_pages}</div>
      <div className='mt-5 flex gap-3 flex-col lg:flex-row lg:flex-wrap'>
        {gameCards.data.map((game: any) => {
          if (game.home_team_score <= 109 || game.visitor_team_score <= 109) {
            return null
          }
          return (
            <MatchCard
              jordan={game.jordan}
              liked={likedGames.includes(game.id)}
              likeItem={likeItem}
              gameId={game.id}
              key={game.id}
              homeTeam={game.home_team}
              visitorTeam={game.visitor_team}
              playDate={game.date}
              homeTeamScore={game.home_team_score}
              visitorTeamScore={game.visitor_team_score}
            />
          ) 
        })}
      </div>
      <div className='fixed left-0 shadow-md bottom-0 bg-white w-full border-t py-4 flex flex-col px-2 justify-center items-center'>
        <div className='font-poppins text-center w-full text-sm pb-2 lg:hidden'>
          Pagina: {currentPageNumber} de {props.initialData.meta.total_pages}
        </div>
        <div className='w-full lg:w-6/12 lg:gap-2 flex'>
          <div
            onClick={() =>changePage(currentPageNumber - 1)}
            className={`${(currentPageNumber === 1) ? 'bg-gray-100 text-gray-400' : ''} text-center border p-2 cursor-pointer w-6/12`}>
              Anterior
          </div>
          <div
            data-testid='next-page'
            onClick={() => changePage(currentPageNumber + 1)}
            className='text-center border p-2 bg-orange-500 text-white cursor-pointer w-6/12'>
              Siguiente
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameList