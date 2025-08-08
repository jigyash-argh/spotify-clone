import React from 'react'
import { FaHome } from 'react-icons/fa';
import { MdHome } from 'react-icons/md';
import { FaSpotify } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';
const Navbar = () => {
  return (
    <div className='h-[64px]  flex justify-between  items-center'>
        <div className='flex ml-10 items-center'>
            <img
      src="https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg"
      alt="Spotify"
      width="32"
      height="32"
      className='flex justify-items-start'
    />
        </div>
        <div className='flex justify-center gap-5'>
            <MdHome size={48} className='text-white bg-[#1F1F1F] rounded-full p-3' />
            <div>
                    <input type="text" className='bg-[#1F1F1F] w-[474px] h-[48px] rounded-4xl placeholder:text-gray-400 text-white'
            placeholder='What do you want to play'
            />
            </div>
            
        </div>
        <div className='text-white flex'>
            <div>
                Install App
            </div>
            <div>
                <FaBell size={24} color="#333" />
            </div>
            <div>
                J
            </div>
        </div>
    </div>
  )
}

export default Navbar