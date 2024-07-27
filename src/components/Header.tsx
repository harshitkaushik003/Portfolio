import React from 'react'
import styles from "../styles/Header.module.css"
import cloud from "../assets/clouds2.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { drag, rise } from '../utils/gsapFn'
import Details from './Details'


const Header = () => {
  
  useGSAP(()=>{
    gsap.to(".cloud", {
      x: window.innerWidth,
      duration: 25,
      stagger: 0.5,
      repeat: -1,
    })

    drag("#details", ".header")

    rise(".text-div h1")
   

  })
  return (
    <section id={styles.header} className="header w-full h-full relative">
      <img id='cloud1' src={cloud} alt="" className='cloud w-52 h-52 absolute top-40 -left-52 opacity-50' />
      <div id={styles.details} className='text-div poppins-medium absolute w-full h-full flex flex-col justify-center items-start lg:pl-14 pl-10 pt-16 lg:text-9xl text-white text-6xl'>
        <h1 className=''>Hi, my</h1>
        <h1>name is Harshit.</h1>
      </div>
      <Details/>
    </section>
  )
} 

export default Header