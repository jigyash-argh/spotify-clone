import React from 'react'
import Songprofile from './Songprofile'
const song = {
  name: "Donali",
  image: "https://i.scdn.co/image/ab67616d00004851a972f021145a2298c67efdd0",
  singer: "Harkirat"
}
const Musicplayer = () => {
  return (
    <div className='h-[88px] w-full fixed flex items-center bottom-0 m-3'>
      <Songprofile song={song}/>
    </div>
  )
}

export default Musicplayer