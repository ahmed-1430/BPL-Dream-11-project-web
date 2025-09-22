import './App.css'
import logoimg from './assets/logo.png'
import dollaricon from './assets/Currency.png'
import AvailablePlayers from './components/available-players/availablePlayers'
import SelectedPlayers from './components/selectedPlayers/selectedPlayers'
import { Suspense } from 'react'


const playersPromise = async() => { 
    const res = await fetch('../public/players.json')    
        return  res.json()
   }

function App() {
    const PlayersPromiseData = playersPromise()
  return (
    <>
      <div className="navbar max-w-[1200px] mx-auto">
        <div className="flex-1">
          <a className="text-xl"><img className='w-[60px] h-[60px]' src={logoimg} alt="" /></a>
        </div>
        <div className="btn btn-ghost flex items-center gap-1">
          <span>0</span> <span>Coin</span><img className='h-[20px] w-[20px] items-center' src={dollaricon} alt="" />
        </div>
      </div>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <AvailablePlayers PlayersPromiseData={PlayersPromiseData}></AvailablePlayers>
      </Suspense>
      <SelectedPlayers></SelectedPlayers>
    </>
  )
}

export default App
