import React from 'react'
import Experience from './Experience'
import { useGSAP } from '@gsap/react'
import { drag_up } from '../utils/gsapFn'
import {Contact} from './Contact'


export const Bottom = () => {
  useGSAP(()=>{
    drag_up("#experience", "#bottom")
  })
  return (
    <>
      <div id='bottom' className='w-full h-full relative'>
        <Experience/>
        <Contact/>
      </div>
    </>
  )
}
