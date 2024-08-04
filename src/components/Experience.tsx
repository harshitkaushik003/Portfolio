import React from 'react'
import { List } from './List';
import { Skill } from '../utils/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger)

const Experience = () => {
  useGSAP(()=>{
    gsap.from("#top, #bottom div .name, .list div img", {
      y:30,
      opacity: 0,
      stagger: 0.08,
      scrollTrigger:{
        trigger: "#experience",
        scroller: "body",
        start: "top 10%",
        markers: false
        
      }
    })
  })
  const {languages, technologies, databases} = Skill;
  return (
    <div id="experience" className='exp w-full h-full overflow-hidden absolute top-0 left-0'>
      <div className='container w-full h-full bg-blue-600 lg:bg-opacity-30 bg-opacity-50 pt-10 pb-40'>
      <div id="top" className='arsenal-sc-regular w-full h-1/5 flex justify-start items-center lg:text-5xl text-xl text-white pl-10'>
        Things I have worked on
      </div>
      <div id="bottom" className='h-4/5 w-full flex flex-col'>
        <div id="lang" className='flex lg:justify-between lg:flex-row flex-col lg:mt-12 pr-12 pl-12 w-full h-1/3 lg:gap-10'>
          <div className="name arsenal-sc-regular flex justify-start items-center lg:text-3xl text-md text-white w-1/5">Languages</div>
          <List arr={languages}/>
        </div>
        <div id="tech" className='flex lg:flex-row flex-col justify-between lg:mt-12 pr-12 pl-12 w-full h-1/3 '>
          <div className="name arsenal-sc-regular flex justify-start items-center lg:text-3xl mt-10 text-white w-1/5">Technologies</div>
          <List arr={technologies}/>
        </div>
        <div id="db" className='flex lg:flex-row flex-col justify-between lg:mt-12 pr-12 pl-12 w-full h-1/3 '>
          <div className="name arsenal-sc-regular flex justify-start items-center lg:text-3xl mt-10 text-white w-1/5">Databases</div>
          <List arr={databases}/>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Experience