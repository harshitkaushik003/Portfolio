import React from 'react'

type skillType = {
    backgroundColor: string,
    name: string,
    percentage: number
}

const SkillBar = ({backgroundColor, name, percentage} : skillType) => {
  return (
    <div className='w-52 h-10 rounded-full m-5 border-2'>
        <div className='h-full pl-10 rounded-full flex items-center' style={{backgroundColor: backgroundColor, width: `${percentage}%`}}>
            <span className='text-white'>{name}</span>
        </div>
    </div>
  )
}

export default SkillBar