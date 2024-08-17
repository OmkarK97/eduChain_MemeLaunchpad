import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';

function Navbar() {
    return (
      <nav className=''>
        <div className='flex flex-row mx-auto px-[40px] py-[25px] justify-between items-center mt-[0px] bg-black'>
          <div className='font-bold text-2xl text-blue-400'>
            <a href='/'>KnowledgePad</a>
          </div>
          <div className='flex justify-center flex-1 space-x-8 text-center'>
            <h1 className='font-normal text-xl text-white'>
              <a href='/dashboard'>Dashboard</a>
            </h1>
            <h1 className='font-normal text-xl border-blue-500 text-white border px-[3px] rounded-lg bg-gradient-to-r from-blue-700 via-black to-black'>
              <a href='/create'>Create meme token</a>
            </h1>
          </div>
          <div className='text-white'>
           <ConnectButton/>
          </div>
        </div>
        <hr className='border-t-2 border-blue-500' />
      </nav>
    );
  }
  

export default Navbar