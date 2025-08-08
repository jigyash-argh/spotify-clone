import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/hersection/HeroSection'
import Rightpart from './components/rightside/Rightpart'

const App = () => {
  return (
    <div className='min-h-screen w-full bg-black'>
      <Navbar/>
      <HeroSection/>
      <Rightpart/>
    </div>
  )
}

export default App