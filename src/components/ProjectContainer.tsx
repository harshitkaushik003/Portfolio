import React from 'react'
import { project } from '../utils/data'
import styles from "../styles/Projects.module.css"


export const ProjectContainer = ({name, details, image}:project) => {
  return (
    <div id={styles.projects} className='min-h-full min-w-full flex'>
        <div id="left" className='w-1/2 h-full flex flex-col items-start justify-center josefin-sans-regular lg:pl-32 pl-10'>
          <span id="heading" className='lg:text-9xl text-3xl lg:mb-16 mb-10 text-white'>{name}</span>
          <p id="details" className='text-gray-400 ml-2 lg:text-2xl text-xs'>{details}</p>
        </div>
        <div id="right" className='w-1/2 h-full flex justify-center items-center'>
          <img src={image} alt="" />
        </div>
      </div>
  )
}
