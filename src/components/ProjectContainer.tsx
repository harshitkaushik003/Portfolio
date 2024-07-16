import React from 'react'
import { project } from '../utils/data'
import styles from "../styles/Projects.module.css"


export const ProjectContainer = ({name, details, image}:project) => {
  return (
    <div id={styles.projects} className='min-h-full min-w-full flex'>
        <div id="left" className='w-1/2 h-full flex flex-col items-start justify-center josefin-sans-regular pl-32'>
          <span id="heading" className='text-9xl mb-16 text-white'>{name}</span>
          <p id="details" className='text-gray-400 ml-2 text-2xl'>{details}</p>
        </div>
        <div id="right" className='w-1/2 h-full flex justify-center items-center'>
          <img src={image} alt="" />
        </div>
      </div>
  )
}
