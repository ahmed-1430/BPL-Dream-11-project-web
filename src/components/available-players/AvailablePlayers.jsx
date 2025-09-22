import React, { use } from 'react';
import PlayerCard from '../playercard/PlayerCard';

const AvailablePlayers = ({ PlayersPromiseData }) => {
    const playersData = use(PlayersPromiseData)
    console.log(playersData)
    return (
        <div className='max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto'>
            {
                playersData.map(player => <PlayerCard player={player}></PlayerCard>)
            }
            
        </div>
    );
};

export default AvailablePlayers;