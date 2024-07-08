import React from 'react'
import styles from "../styles/Header.module.css"
import cloud from "../assets/clouds2.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


const Header = () => {
  useGSAP(()=>{
    gsap.to(".cloud", {
      x: window.innerWidth,
      duration: 25,
      stagger: 0.5,
      repeat: -1,
      
      
    })
  })
  return (
    <section id={styles.header} className="w-full h-full relative">
      <img id='cloud1' src={cloud} alt="" className='cloud w-52 h-52 absolute top-40 -left-52' />
    </section>
  )
}

export default Header