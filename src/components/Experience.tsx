import React from 'react'
import { List } from './List';
import { Skill } from '../utils/data';


const Experience = () => {
  const {languages, technologies, databases} = Skill;
  return (
    <div className='exp w-full h-full overflow-x-hidden bg-black'>
      <div id="top" className='noto-serif-jp-regular w-full h-1/5 flex justify-start items-center lg:text-5xl text-white pl-10'>
        Things I have worked on
      </div>
      <div id="bottom" className='h-4/5 w-full flex flex-col'>
        <div id="lang" className='flex justify-between mt-12 pr-12 pl-12 w-full h-1/3 '>
          <div className="name noto-serif-jp-regular flex justify-start items-center text-3xl text-white w-1/5">Languages</div>
          <List arr={languages}/>
        </div><hr />
        <div id="tech" className='flex justify-between mt-12 pr-12 pl-12 w-full h-1/3 '>
          <div className="name noto-serif-jp-regular flex justify-start items-center text-3xl text-white w-1/5">Technologies</div>
          <List arr={technologies}/>
        </div><hr />
        <div id="db" className='flex justify-between mt-12 pr-12 pl-12 w-full h-1/3 '>
          <div className="name noto-serif-jp-regular flex justify-start items-center text-3xl text-white w-1/5">Databases</div>
          <List arr={databases}/>
        </div>
      </div>
    </div>
  )
}

export default Experience