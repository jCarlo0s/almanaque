import './globals.css'
import { Roboto, Poppins } from 'next/font/google'
import Header from '@/components/Header'

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin']
})

const poppins = Poppins({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-poppins'
})

export const metadata = {
  title: 'Almanaque - Lo mejor de la NBA en un mismo lugar',
  description: 'Los resultados, estadísticas, noticias y más de la NBA en un solo lugar.',
  keywords: 'nba, almanaque, resultados, estadísticas, noticias, jugadores, equipos, partidos, temporada, 2019, 2020, 2021, 2022, 2023, 2024, 2025',
  authors: [{ name: 'Almanaque'}],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={`${poppins.variable} ${roboto.className}`}>
        <Header />
        <main className='p-2 container mx-auto pb-32 lg:pb-20'>
          {children}
        </main>
      </body>
    </html>
  )
}
