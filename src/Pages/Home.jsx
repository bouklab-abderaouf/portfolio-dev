import React from 'react'
import logo  from '../assets/logo.png'

export const Home = () => {
  return (
    <div className=' w-full h-screen flex flex-row justify-between'>
      <div className='flex flex-col justify-center w-1/2'>
      <p className='text-[#D7E5EC] text-xl font-medium font-sora'>FRONT WEB DEVELOPER</p>
      <h1 className='text-6xl font-montserrat bg-clip-text text-transparent bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] font-semibold '>Bouklab Abderaouf</h1>
      <p className='text-[#BDEBEA] text-base font-medium	w-full'>Hello, I'm Abderaouf Bouklab, a Front-End Developer and a Master's student at EPITECH Paris, specializing in software architecture and development. I'm currently seeking a one-year internship in the field of computer science.
</p>
      </div>
      <div className='flex flex-col justify-center '>
        <img src={logo} className='w-[400px] h-[300px]' />
      

      </div>
    </div>
  )
}
