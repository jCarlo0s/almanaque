import { TeamInfo } from "@/server/games"
import HeartIcon from "../Icons/Heart";
import moment from "moment"
import 'moment/locale/es';

moment.locale('es')

interface MatchCardProps {
  jordan: string,
  liked: boolean,
  gameId: number,
  homeTeam: TeamInfo,
  visitorTeam: TeamInfo,
  playDate: string,
  homeTeamScore: number,
  visitorTeamScore: number,
  likeItem: (gameId: number) => boolean,
}

const MatchCard = (matchInfo: MatchCardProps): JSX.Element => {

  const getHomeScoreResultClass = () => {
    return matchInfo.homeTeamScore > matchInfo.visitorTeamScore ? 'text-green-800' : 'text-red-800'
  }

  const getVisitorScoreResultClass = () => {
    return matchInfo.visitorTeamScore > matchInfo.homeTeamScore ? 'text-green-800' : 'text-red-800'
  }

  return (
    <div className="w-full lg:w-[32%] border rounded-md shadow-md">
      <div className="w-full relative text-sm bg-yellow-400 text-center border-b py-3 px-2 rounded-t-md shadow-sm">
        <p className="uppercase font-medium font-poppins text-left">Jugado</p>
        <p className="font-poppins font-light text-left capitalize">{moment(matchInfo.playDate).format('LLLL')}</p>
        <div onClick={() => matchInfo.likeItem(matchInfo.gameId)} className="absolute top-5 right-5 lg:top-2 lg:right-2">
          <HeartIcon
            width='25'
            height='25'
            className={`cursor-pointer ${matchInfo.liked ? 'text-red-800' : 'text-white'}`}/>
        </div>
      </div>
      <div className='flex py-3'>
        <div className="w-6/12 text-center border-r">
          <p className="text-gray-500 font-poppins text-xs">{matchInfo.homeTeam.city}</p>
          <p className="font-extrabold text-lg uppercase">{matchInfo.homeTeam.name}</p>
          <p className="text-gray-500">- Local -</p>
          <p
            data-testid="home-team-score"
            className={`font-bold text-4xl font-poppins ${getHomeScoreResultClass()}`}
          >{matchInfo.homeTeamScore}</p>
        </div>
        <div className="w-6/12 text-center">
          <p className="text-gray-500 font-poppins text-xs">{matchInfo.visitorTeam.city}</p>
          <p className="font-extrabold text-lg uppercase">{matchInfo.visitorTeam.name}</p>
          <p className="text-gray-500"> - Visitante -</p>
          <p
            data-testid="visitor-team-score"
            className={`font-bold text-4xl font-poppins ${getVisitorScoreResultClass()}`}
          >{matchInfo.visitorTeamScore}</p>
        </div>
      </div>
      <div className="border-t py-5">
        {(matchInfo.jordan !== '') ? (
          <>
          <p className="text-center text-gray-500 font-poppins text-xs">
            <strong>Jordan</strong> jugó en este encuentro
          </p>
          <p className='text-center font-poppins text-sm font-semibold mt-3'>
             {matchInfo.jordan}
          </p>
          </>
        ) : (
          <p className="text-center text-gray-500 font-poppins text-xs">
            <strong>Jordan</strong> no estuvo presente en el juego
          </p>
        )}
      </div>
    </div>
  );
}

export default MatchCard;