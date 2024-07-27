import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import { rise } from '../utils/gsapFn'


const Navbar = () => {
  const navRef = useRef(null);
  useGSAP(()=>{
    rise('#navRight span')
  })
  return (
    <nav className='w-full h-24 flex justify-end lg:pr-24 pr-10 fixed z-20'>
        <div id='navRight' className='w-1/2 h-full flex justify-end items-center gap-10 text-white lg:overflow-hidden overflow-visible'>
            <span ref={navRef} className='league-spartan-one text-lg cursor-pointer'>about</span>
            <span ref={navRef} className='league-spartan-one text-lg cursor-pointer'>projects</span>
            <span ref={navRef} className='league-spartan-one text-lg cursor-pointer'>contact</span>
        </div>
    </nav>
  )
}

export default Navbar