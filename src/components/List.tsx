import React from 'react'
import { Tech } from '../utils/data'

export const List = ({arr} : {arr:Tech[]}) => {

  return (
    <div className='list flex items-center lg:justify-end justify-center lg:gap-10 w-4/5'>
        {arr.map((item:Tech, index : React.Key)=>(
            <div key={index}>
                <img src={item.image} alt={item.name} className='lg:w-20 lg:h-20 w-10 h-10 m-6 object-cover'/>
            </div>
        ))}
    </div>
  )
}
