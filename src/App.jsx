import './App.css'
import AvailablePlayers from './components/available-players/availablePlayers'
import NavBar from './components/Nav-Bar/NavBar'
import SelectedPlayers from './components/selectedPlayers/selectedPlayers'
import { Suspense, useState } from 'react'


const playersPromise = async() => { 
    const res = await fetch('../public/players.json')    
        return  res.json()
   }
   const PlayersPromiseData = playersPromise()

function App() {
    const [toggle, settoggle] = useState(true)
    const [balance, setBalance] = useState(600000000)

  return (
    <>
      <NavBar balance={balance}></NavBar>
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
        <AvailablePlayers PlayersPromiseData={PlayersPromiseData} balance={balance} setBalance={setBalance}></AvailablePlayers>
      </Suspense>  : <SelectedPlayers></SelectedPlayers>
      }
      
      
    </>
  )
}

export default App
