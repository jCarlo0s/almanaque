import fetchAllGames from '@/server/games'
import GameList from '@/components/GameList'

const Home = async () => {
  const games = await fetchAllGames({ pageNumber: 1 })
  return (
    <section>
      <h1 className='font-poppins font-bold text-xl'>Historial de Juegos</h1>
      <h2 className='text-md'>Juegos - Temporada 2019 - 2020</h2>
      <GameList initialData={games} />
    </section>
  )
}

export default Home
