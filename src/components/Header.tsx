import React from 'react'
import styles from "../styles/Header.module.css"
import cloud from "../assets/clouds2.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { drag, fly, headerAnimation, rise } from '../utils/gsapFn'
import plane from "../assets/paper-plane.png"
import Details from './Details'


const Header = () => {
  
  useGSAP(()=>{
    gsap.to(".cloud", {
      x: window.innerWidth,
      duration: 25,
      stagger: 0.5,
      repeat: -1,
    })

    // headerAnimation(".plane", ".header", "#details", ".header");
    drag("#details", ".header")

    // const tl = gsap.timeline();

    // tl.to({}, { duration: 0, onComplete: () => fly(".plane", ".header") })
    // .to({}, { duration: 0, onComplete: () => drag("#details", ".header") });

    rise(".text-div h1")
   

  })
  return (
    <section id={styles.header} className="header w-full h-full relative">
      <img id='cloud1' src={cloud} alt="" className='cloud w-52 h-52 absolute top-40 -left-52 opacity-50' />
      <img src={plane} alt="" className='plane w-28 h-28 absolute top-0 -left-32 rotate-90'/>
      <div id={styles.details} className='text-div poppins-medium absolute w-full h-full flex flex-col justify-center items-start pl-14 pt-16'>
        <h1>Hi, my</h1>
        <h1>name is Harshit.</h1>
      </div>
      <Details/>
    </section>
  )
}

export default Header