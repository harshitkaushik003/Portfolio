import React, { useRef } from 'react'
import styles from "../styles/Header.module.css"
import cloud from "../assets/clouds2.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { rise } from '../utils/gsapFn'


const Header = () => {
  
  useGSAP(()=>{
    gsap.to(".cloud", {
      x: window.innerWidth,
      duration: 25,
      stagger: 0.5,
      repeat: -1,
    })

    rise(".text-div h1")

    

  })
  return (
    <section id={styles.header} className="w-full h-full relative">
      <img id='cloud1' src={cloud} alt="" className='cloud w-52 h-52 absolute top-40 -left-52' />
      <div id={styles.details} className='text-div poppins-medium absolute w-full h-full flex flex-col justify-center items-start pl-14 pt-16'>
        <h1>Hi, my</h1>
        <h1>name is Harshit.</h1>
        <span>I love creating cool websites</span>
      </div>
    </section>
  )
}

export default Header