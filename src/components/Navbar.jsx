import React, { useState } from 'react'
import { FaBell } from 'react-icons/fa';
import { MdHome, MdSearch, MdClose } from 'react-icons/md';
import Userlogo from './Userlogo';

const Navbar = () => {
  const [search, setSearch] = useState('');
  const user={
    name:"jigyash",
    age:22,
  }

return (
    <div className='h-[64px] flex justify-between items-center md:gap-0 gap-5'>
        <div className='flex ml-4 md:ml-10 items-center '>
            <div className="relative group inline-block">
                    <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg"
                alt="Spotify"
                width="32"
                height="32"
                className='flex justify-items-start '
            />
             
            </div>
            
            
        </div>
        {/* Vertical divider */}

        <div className='flex justify-center gap-5 flex-1 md:px-20 items-center '>
            {/* Home Icon with label */}
            <div className="relative group flex flex-col items-center">
    <button
        className="hidden md:flex text-white bg-[#1F1F1F] rounded-full p-3 hover:scale-105 cursor-pointer transform focus:scale-95 active:scale-90 transition"
        tabIndex={0}
        aria-label="Home"
        type="button"
    >
        <MdHome size={30} />
    </button>
    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2
                    bg-[#1F1F1F] text-white px-2 py-1 rounded
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-200 ease-in-out z-10 text-xl">
        Home
    </div>
</div>

{/* Search Box */}
<div className="relative w-full max-w-[474px] min-w-[180px]">
    {/* Search Icon with label */}
    <div className="absolute left-0 top-0 h-full flex flex-col items-center group">
        <button
            className="flex items-center h-full pl-4 focus:scale-95 active:scale-90 transition"
            tabIndex={0}
            aria-label="Search"
            type="button"
        >
            <MdSearch className="text-white hover:scale-110 cursor-pointer" size={30} />
        </button>
        <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2
                        bg-[#1F1F1F] text-white text-base px-3 py-1 rounded
                        opacity-0 group-hover:opacity-100
                        transition-opacity duration-200 ease-in-out z-10">
            Search
        </div>
    </div>
    <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="hover:bg-[#1F1F1F] w-full h-[48px] focus:border-2 bg-[#1a1a1a] focus:border-white border border-transparent rounded-4xl pl-14 pr-28 md:pr-36 placeholder:text-gray-400 text-white transition-all duration-200"
        placeholder="What do you want to play ?"
    />
    {/* Clear Search Button with label */}
    {search && (
        <div className="absolute right-24 md:right-32 top-0 h-full flex flex-col items-center group">
            <button
                className="flex items-center h-full px-2 text-gray-400 focus:scale-95 active:scale-90 transition"
                onClick={() => setSearch('')}
                tabIndex={-1}
                aria-label="Clear"
                type="button"
            >
                <MdClose size={28} className='hover:scale-110 hover:text-white cursor-pointer' />
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2
                            bg-[#1F1F1F] text-white  px-3 py-1 rounded
                            opacity-0 group-hover:opacity-100
                            transition-opacity duration-200 ease-in-out z-10 text-xl">
                Clear
            </div>
        </div>
    )}
    {/* Vertical divider before Browse */}
    <div className="absolute right-14 md:right-20 top-3 h-8 border-l border-white z-10"></div>
    {/* Browse Button with label */}
    <div className="absolute right-2 md:right-4 top-0 h-full flex flex-col items-center group">
        <button
            className="flex items-center h-full gap-2 bg-transparent text-white rounded-3xl px-3 md:px-5 py-1 text-sm cursor-pointer font-medium transition-colors focus:scale-95 active:scale-90 transition"
            tabIndex={0}
            aria-label="Browse"
            type="button"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block hover:scale-110 "
            >
                <path fill="currentColor" d="M4 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4H4zM1.513 9.37A1 1 0 0 1 2.291 9H21.71a1 1 0 0 1 .978 1.208l-2.17 10.208A2 2 0 0 1 18.562 22H5.438a2 2 0 0 1-1.956-1.584l-2.17-10.208a1 1 0 0 1 .201-.837zM12 17.834c1.933 0 3.5-1.044 3.5-2.333s-1.567-2.333-3.5-2.333S8.5 14.21 8.5 15.5s1.567 2.333 3.5 2.333z"/>
            </svg>
        </button>
        <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2
                        bg-[#1F1F1F] text-white px-3 py-1 rounded
                        opacity-0 group-hover:opacity-100
                        transition-opacity duration-200 ease-in-out z-10 text-xl">
            Browse
        </div>
    </div>
</div>
        </div>
    
        <div className='text-white flex items-center gap-15 mr-4 md:mr-10'>
            <div className="hidden md:block">
                <button className="flex items-center gap-2 px-3 py-2 rounded active:bg-green-400 hover:bg-[#212121] active:scale-110 transition cursor-pointer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="inline-block"
                    >
                        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13" />
                       <path d="M4.995 8.745a.75.75 0 0 1 1.06 0L7.25 9.939V4a.75.75 0 0 1 1.5 0v5.94l1.195-1.195a.75.75 0 1 1 1.06 1.06L8 12.811l-.528-.528-.005-.005-2.472-2.473a.75.75 0 0 1 0-1.06"/>
                    </svg>
                    <span className="hidden lg:inline ">Install App</span>
                </button>
            </div>
            <div>
                <FaBell size={24} className='text-white bg-transparent hover:scale-110 cursor-pointer rounded-full w-11 h-11 p-2 hover:bg-[#232323]' />
            </div>
            <div>
                <Userlogo user={user}/>
            </div>
        </div>
    </div>
)
}

export default Navbar