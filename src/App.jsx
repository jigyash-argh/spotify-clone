import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/hersection/HeroSection'
import Rightpart from './components/rightside/Rightpart'
import Musicplayer from './components/player/Musicplayer'

const App = () => {
  return (
    <div className='w-full bg-black   min-h-screen'>
      <Navbar/>
      <HeroSection/>
      <Musicplayer/> 
    </div>
  )
}

export default App