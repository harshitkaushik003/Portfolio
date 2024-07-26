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
      translateX: `-${scrollLen}%`,
      delay: 1,
      scrollTrigger: {
        trigger: "#projects",
        scroller: "body",
        start: "top 0%",
        end: "top -500%",
        markers: true,
        scrub: 2,
        pin: true,
        
      }
    });
  
    // Mobile animation
    const mobileQuery = window.matchMedia("(max-width: 768px)");
    if (mobileQuery.matches) {
      gsap.to("#projects", {
        translateX: `-${scrollLen}%`,
        delay: 1,
        scrollTrigger: {
          trigger: "#projects",
          scroller: "body",
          start: "top 0%",
          end: "top -500%", // Adjusted end value for mobile screens
          markers: true,
          scrub: 2,
          pin: true,
          pinSpacing: false
        }
      });
    }
  });
  return (
    <div id='projects' className='w-full h-full flex sm:relative'>
      {projects.map((item, index)=>(
        <ProjectContainer key={index} name={item.name} image={item.image} details={item.details} />
      ))}
    </div>
  )
}

export default Projects