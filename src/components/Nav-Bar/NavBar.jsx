import React from 'react';
import logoimg from '../../assets/logo.png'
import dollaricon from '../../assets/Currency.png'

const NavBar = ({balance}) => {
    return (
        <div className="navbar max-w-[1200px] mx-auto">
        <div className="flex-1">
          <a className="text-xl"><img className='w-[60px] h-[60px]' src={logoimg} alt="" /></a>
        </div>
        <div className="btn btn-ghost flex items-center gap-1">
          <span>{balance}</span> <span>Coin</span><img className='h-[20px] w-[20px] items-center' src={dollaricon} alt="" />
        </div>
      </div>
    );
};

export default NavBar;