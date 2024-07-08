import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full h-24 flex justify-end pr-24 fixed z-20'>
        <div className='w-1/2 h-full flex justify-end items-center gap-10'>
            <span className='league-spartan-one text-lg cursor-pointer'>about</span>
            <span className='league-spartan-one text-lg cursor-pointer'>projects</span>
            <span className='league-spartan-one text-lg cursor-pointer'>contact</span>
        </div>
    </nav>
  )
}

export default Navbar