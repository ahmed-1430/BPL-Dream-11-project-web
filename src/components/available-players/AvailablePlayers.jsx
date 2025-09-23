import React, { use } from 'react';
import PlayerCard from '../playercard/PlayerCard';

const AvailablePlayers = ({ PlayersPromiseData, balance, setBalance }) => {
    const playersData = use(PlayersPromiseData)
    // console.log(playersData)
    return (
        <div className='max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto'>
            {
                playersData.map(player => <PlayerCard player={player} key={player.player_id} balance={balance} setBalance={setBalance}></PlayerCard>)
            }
            
        </div>
    );
};

export default AvailablePlayers;