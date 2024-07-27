import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects } from '../utils/data'
import { ProjectContainer } from './ProjectContainer'

gsap.registerPlugin(ScrollTrigger)
const Projects = () => {
  const scrollLen = (projects.length-1) * 100;
  
  useGSAP(() => {
    // Desktop animation
    gsap.to("#projects", {
      overflow: "visible",
      translateX: `-${scrollLen}%`,
      scrollTrigger: {
        trigger: "#projects",
        scroller: "body",
        start: "top 0%",
        end: "top -500%",
        // markers: true,
        scrub: 2,
        pin: true,
        
      }
    });
  });
  return (
    <div id='projects' className='w-full h-full flex relative overflow-hidden lg:overflow-visible'>
      {projects.map((item, index)=>(
        <ProjectContainer key={index} name={item.name} image={item.image} details={item.details} />
      ))}
    </div>
  )
}

export default Projects