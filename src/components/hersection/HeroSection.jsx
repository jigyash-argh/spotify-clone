import React from 'react'
import Liberary from '../liberary/Liberary'
import MiddlePart from './MiddlePart'
import Rightpart from '../rightside/Rightpart'

const HeroSection = () => {
  return (
    <div className='flex justify-around'>
        <Liberary/>
        <MiddlePart/>
        <Rightpart/>
    </div>
  )
}

export default HeroSection