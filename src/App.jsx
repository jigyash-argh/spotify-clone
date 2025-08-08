import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/hersection/HeroSection'
import Rightpart from './components/rightside/Rightpart'
import Musicplayer from './components/hersection/Musicplayer'

const App = () => {
  return (
    <div className='min-h-screen w-full bg-black'>
      <Navbar/>
      <HeroSection/>
      <Musicplayer/>
    </div>
  )
}

export default App