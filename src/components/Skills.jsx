import React from 'react'
import technologies from '../technologies.json'

const Skills = () => {
  return (
    <div className='flex flex-wrap gap-4 justify-center items-center'>
      {technologies.map((tech, index) => (
        <div key={index} className='flex flex-col justify-center items-center w-full sm:w-1/2 md:w-[250px]'>
          <img src={tech.imgSrc} alt={tech.altText} className='w-40 h-40' />
          <p className='text-[#BDEBEA] text-base font-medium'>{tech.name}</p>
        </div>
      ))}
    </div>
  )
}

export default Skills