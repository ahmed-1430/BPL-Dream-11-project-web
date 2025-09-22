import React, { use } from 'react';
import usericon from '../../assets/user 1.png'
import flagicon from '../../assets/flagicon.png'

const AvailablePlayers = ({ PlayersPromiseData }) => {
    const playersData = use(PlayersPromiseData)
    console.log(playersData)
    return (
        <div className='max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto'>
            {
                playersData.map(player => <div class="card bg-base-100 shadow-sm p-[20px] border-1 border-zinc-100">
                <figure>
                    <img className='h-[300px] w-full object-fill'
                        src={player.player_image}
                        alt="" />
                </figure>
                <div class="">
                    <div className='flex gap-3 mt-2 items-center'>
                        <img src={usericon} alt="user icon" />
                        <h2 class="card-title">{player.player_name}</h2>                        
                    </div>
                    <div class="flex justify-between items-center border-b-2 border-gray-300 pb-3">
                        <div className='flex items-center gap-3 mt-2'>
                            <img src={flagicon} alt="flag icon" />
                            <p className='text-[#13131390] font-semibold'>{player.player_country}</p>
                        </div>
                        <div>
                            <p className="py-[9px] px-[16px] bg-[#13131305] rounded-[8px]">{player.playing_role}</p> 
                        </div>                                              
                    </div>
                    <div className='flex justify-between items-center font-bold pt-2'>
                        <span>Rating:</span> 
                        <span>{player.rating}</span>
                    </div>                    
                    <div className='flex justify-between items-center pt-2'>
                        <span className='font-bold'>{player.batting_style}</span> 
                        <span>{player.bowling_style}</span>
                    </div>
                    <div className='flex justify-between items-center pt-2'>
                        <span className='font-bold'>{`Price: ${player.price}`}</span>
                        <button className='btn'>Choose Player</button>
                    </div>                    
                </div>
            </div>)
            }
            
        </div>
    );
};

export default AvailablePlayers;