import { useEffect, useState } from 'react'

import logo from './assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'

import api from './api/api';

import { GameBanner } from './components/GameBanner'
import { CreateAdModal } from './components/CreateAdModal'
import { CreateAdBanner } from './components/CreateAdBanner'

import { GameProps } from './types/Game'

function App() {

  const [games, setGames] = useState<GameProps[]>([])

  useEffect(() => {
    api(`/games`)
      .then(res => {
        setGames(res.data)
      })
  }, [])

  return (
    <div className="max-w-[1440px] my-20 mx-auto flex flex-col items-center">
      <img src={logo} alt="logo" />
      <h1 className="text-6xl text-white text-center font-black mt-20 mx-8">
        Seu <span className="text-transparent bg-textGradient bg-clip-text"> duo </span> está aqui
      </h1>

      <main className="flex flex-wrap gap-4 justify-center mx-8 mt-20">
          {games
            .sort((a, b) => (a.title > b.title) ? 1 : -1)
            .map(game => {
              return (
                <GameBanner
                  key={game.id}
                  titulo={game.title}
                  bannerUrl={game.bannerUrl}
                  adsCount={game._count.ads}
                />
              )
            })}
      </main>

      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>
    </div>
  )

}
export default App