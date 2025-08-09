import React from 'react'
import Liberary from '../liberary/Liberary'
import MiddlePart from './MiddlePart'
import Rightpart from '../rightside/Rightpart'

const HeroSection = () => {
  return (
    <div className='flex m-3 gap-3 justify-around h-[calc(100vh-171px)]'>
        <Liberary/>
        <MiddlePart/>
        <Rightpart/>
    </div>
  )
}

export default HeroSection