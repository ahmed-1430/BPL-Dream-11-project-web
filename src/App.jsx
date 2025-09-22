import './App.css'
import logoimg from './assets/logo.png'
import dollaricon from './assets/Currency.png'
import AvailablePlayers from './components/available-players/availablePlayers'
import SelectedPlayers from './components/selectedPlayers/selectedPlayers'
import { Suspense, useState } from 'react'


const playersPromise = async() => { 
    const res = await fetch('../public/players.json')    
        return  res.json()
   }

function App() {
    const PlayersPromiseData = playersPromise()
    const [toggle, settoggle] = useState(true)

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
      <div className='max-w-[1200px] mx-auto my-3 flex justify-between items-center'>
        <div className=''>
          <h2 className={`font-bold text-[1.75rem] ${toggle === false ? "hidden" : ""}`}>Available Players</h2>
          <h2 className={`font-bold text-[1.75rem] ${toggle === true ? "hidden" : ""}`}>Selected Players</h2>
        </div>
        <div className='flex gap-0'>
          <button onClick={() => settoggle(true)} className={`border-1 border-[#31313120] rounded-l-[12px] px-[20px] py-[14px] border-r-0 cursor-pointer ${toggle === true ? "bg-[#E7FE29] font-bold" : "bg-white font-medium"}`}>Available</button>
          <button onClick={()=> settoggle(false)} className={`border-1 border-[#31313120] rounded-r-[12px] px-[20px] py-[14px] border-l-0 cursor-pointer ${toggle === false ? "bg-[#E7FE29] font-bold" : "bg-white font-mediumf"}`}>Selected <span>(0)</span> </button>
        </div>
      </div>
      {
        toggle === true ? <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <AvailablePlayers PlayersPromiseData={PlayersPromiseData}></AvailablePlayers>
      </Suspense>  : <SelectedPlayers></SelectedPlayers>
      }
      
      
    </>
  )
}

export default App
