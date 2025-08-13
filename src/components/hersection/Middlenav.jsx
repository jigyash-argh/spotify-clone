import React, { useEffect, useState } from 'react'

const value = ["All", "Music", "Podcasts"]

const Middlenav = () => {
  const [scroll, setscroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setscroll(true)
      } else {
        setscroll(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`flex gap-2 items-center h-[64px] transition-colors duration-300 ${
        scroll ? 'bg-red-500' : 'bg-transparent'
      }`}
    >
      {value.map((item, index) => (
        <button
          key={index}
          className='px-5 py-3 ml-8 bg-white/10 text-lg shadow-lg text-white rounded-full hover:bg-white/30'
        >
          {item}
        </button>
      ))}
    </div>
  )
}

export default Middlenav
