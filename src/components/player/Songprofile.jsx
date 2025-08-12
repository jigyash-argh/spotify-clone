import React from 'react'
import { FiPlus } from 'react-icons/fi' // Feather Icons
// or
import { HiPlus } from 'react-icons/hi' // Hero Icons
// or
import { IoMdAdd } from 'react-icons/io' // Ionicons


const Songprofile = ({song}) => {
  return (
    <div className='h-[56px] w-1/7 flex items-center m-5'>
      <img src={song.image} alt="" className='h-[56px] rounded-xl' />
      <div className='flex flex-col justify-center items-start px-6 py-4 space-y-2 hidden md:block'>
        <a href=""><h1 className='font-semibold hover:underline'>{song.name}</h1></a>
        <a href=""><h3 className='text-sm hover:underline'>{song.singer}</h3></a>
      </div>
      <div className='flex items-center ml-4'>
        <button className="w-10 h-10 flex items-center hover:scale-110 justify-center rounded-full border-2 border-white hover:bg-[#232323] transition">
          <FiPlus className="text-xl " /> {/* or HiPlus/IoMdAdd */}
        </button>
      </div>
    </div>
  )
}

export default Songprofile