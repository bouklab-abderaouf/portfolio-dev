import React from 'react'
import logo  from '../assets/logo.png'
import Carousel from '../components/Carousel'
import Skills from '../components/Skills'

export const Home = () => {
  return (
    <>
    <div className=' w-full h-auto flex justify-start sm:justify-between flex-col-reverse sm:flex-row sm:mt-10 mt-10'>
      <div className='flex flex-col justify-center items-center sm:items-start w-full sm:w-1/2 mt-8 sm:mt-0'>
      <p className='text-[#D7E5EC] sm:text-xl text-l font-medium font-sora'>FRONT WEB DEVELOPER</p>
      <h1 className='text-2xl sm:text-5xl font-montserrat bg-clip-text text-transparent bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] font-semibold '>Bouklab Abderaouf</h1>
      <p className='text-[#BDEBEA] text-base font-medium	w-full'>Hello, I'm Abderaouf Bouklab, a Front-End Developer and a Master's student at EPITECH Paris, specializing in software architecture and development. I'm currently seeking a one-year internship in the field of computer science.
      </p>
      <a className='inline-block py-3 px-5 mt-4 text-[#252728] rounded-md bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] ' href='/About'>Contact Me</a>
      </div>
      <div className='flex flex-col justify-center items-end w-full sm:w-1/2 '>
        <img src={logo} alt='logo' className='w-[300px] h-[200px] sm:w-[400px] sm:h-[300px]' />
      </div>
    </div>
    <div>
      <h1 className="text-left text-3xl font-bold text-[#BDEBEA] mb-10">Projects</h1>
      <Carousel />
      <div>
        <h1 className="text-left text-3xl font-bold text-[#BDEBEA] my-10 ">Skills</h1>
        <Skills />
      </div>
    </div>
    </>
  )
}
