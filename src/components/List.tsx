import React from 'react'
import { Tech } from '../utils/data'

export const List = ({arr} : {arr:Tech[]}) => {
  return (
    <div className='list flex items-center justify-end gap-10 w-4/5'>
        {arr.map((item:Tech, index : React.Key)=>(
            <div key={index}>
                <img src={item.image} alt={item.name} className='w-20 h-20'/>
            </div>
        ))}
    </div>
  )
}
