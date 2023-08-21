import React, { useContext } from 'react';
import { RefContext } from "./RoutesManager";
import logo  from '../assets/logo.png'
import Carousel from '../components/Carousel'
import Skills from '../components/Skills'
import Socials from '../components/Socials';
// import { NavLink } from "react-router-dom";

export const Home = () => {
  const { myRef1, myRef2, myRef3 } = useContext(RefContext);

  return (
    <>
    <div ref={myRef1} className=' w-full h-auto flex justify-start sm:justify-between flex-col-reverse sm:flex-row sm:mt-10 mt-10'>
      <div className='flex flex-col justify-center items-center sm:items-start w-full sm:w-1/2 mt-8 sm:mt-0'>
        <p className='text-[#D7E5EC] sm:text-xl text-l font-medium font-sora'>FRONT WEB DEVELOPER</p>
        <h1 className='text-2xl sm:text-5xl font-montserrat bg-clip-text text-transparent bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] font-semibold '>Bouklab Abderaouf</h1>
      {/* <p className='text-[#BDEBEA] text-base font-medium	w-full'>Hello, I'm Abderaouf Bouklab, a Front-End Developer and a Master's student at EPITECH Paris, specializing in software architecture and development. I'm currently seeking a one-year internship in the field of computer science.
      </p> */}
        <a  
          className='inline-block py-3 px-5 mt-4 text-[#252728] rounded-md bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] '
          href="/Cv.pdf"
          download
        >Download CV</a>
        <div className='mt-4'>
        <Socials />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center sm:items-end w-full sm:w-1/2 '>
        <img src={logo} alt='logo' className='w-[300px] h-[200px] sm:w-[400px] sm:h-[300px]' />
      </div>
    </div>
    <div ref={myRef3} className='mb-5'>
      <h1 className="text-left text-3xl font-bold text-[#BDEBEA] mt-10 mb-5 ">About Me</h1>
      <div className='flex flex-col sm:flex-row justify-between items-center'>
        <div className='flex flex-col justify-center items-center w-full '>
        <p className='text-[#BDEBEA] text-base font-medium	w-full'>
          Hello! My name is Abderaouf Bouklab and I am passionate about creating innovative solutions on the web. I am currently pursuing my M2 at EPITECH Paris, focusing on software architecture and development. I have had the privilege of working as a full stack bubble.io developer at Netdevices Paris, where I honed my skills in front-end development and gained a comprehensive understanding of full-stack development.
          I am currently seeking a one-year internship in the field of computer science, where I can leverage my skills and experience to create innovative solutions.
        </p>
        </div>
      </div>
          
    </div>
    <div>
      <div>
        <h1 className="text-left text-3xl font-bold text-[#BDEBEA] my-10 ">Skills</h1>
        <Skills />
      </div>
      <div ref={myRef2}>
      <h1 className="text-left text-3xl font-bold text-[#BDEBEA] mb-10">Projects</h1>
      <Carousel />
      </div>
    </div>
    </>
  )
}
