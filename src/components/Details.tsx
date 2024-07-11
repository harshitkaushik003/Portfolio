import React from 'react'
import { aboutMe, skills } from '../utils/data'
import education from "../assets/education.gif"
import SkillBar from './SkillBar'

function Details() {
  return (
    <div id='details' className='w-full h-full bg-black absolute -bottom-full flex'>
      <div id="left" className='w-1/2 h-full bg-blue-500 flex flex-col justify-center gap-8'>
        <div id="about" className='w-full h-1/2 pl-10 pr-10'>
          <p className='lxgw-wenkai-tc-bold text-white text-lg leading-relaxed text-justify'>
            {aboutMe}
          </p>
        </div>
        <div id="info" className='pl-10 pr-10'>
          <ul>
            <li className='flex gap-8 items-center'>
              <img src={education} alt="" className='w-12 h-12 inline-block'/>
              <span className='lxgw-wenkai-tc-bold text-white text-lg leading-relaxed text-justify'>Guru Gobind Singh Indraprastha University<br/>B.Tech CSE</span>
              <span className='lxgw-wenkai-tc-bold text-white text-sm leading-relaxed text-justify'>2021-2025</span>
            </li>
            <li className='flex gap-8 items-center'>
              <img src="https://cdn-icons-png.flaticon.com/128/484/484167.png" alt="" className='w-12 h-12'/>
              <span className='lxgw-wenkai-tc-bold text-white text-lg leading-relaxed text-justify'>New Delhi, India</span>
            </li>
          </ul>
        </div>
      </div>
      <div id="right" className='w-1/2 h-full bg-yellow-500 flex items-center flex-wrap'>
        {skills.map((item)=>(
          <SkillBar backgroundColor="blue" name={item.name} percentage={item.percentage}/>
        ))}
      </div> 
    </div>
  )
}

export default Details
