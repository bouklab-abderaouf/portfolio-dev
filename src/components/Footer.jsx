import React, { useContext } from 'react'
import Socials from './Socials'
import { NavLink } from "react-router-dom";
import { RefContext } from "../Pages/RoutesManager";
  



export const Footer = ({ scrollToRef }) => {
  const {  myRef2 } = useContext(RefContext);
  return (
    <div className='h-[300px] justify-center items-center flex flex-col'>
    <div className='w-full  flex justify-center items-center'>
    <Socials />
    
    </div>
    {/* <div className=' flex-row justify-between '>
    <NavLink  onClick={() => scrollToRef(myRef2)} className='text-left text-3xl font-bold text-[#BDEBEA] mt-10 mb-5 '>Projects</NavLink>
    <NavLink  onClick={() => scrollToRef(myRef2)} className='text-left text-3xl font-bold text-[#BDEBEA] mt-10 mb-5'>Projects</NavLink>
    </div> */}
    </div>
  )
}
export default Footer
