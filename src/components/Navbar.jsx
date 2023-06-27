import React from 'react'
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className='flex justify-between flex-wrap py-4 text-[#BDEBEA] '>
      <div className='flex justify-center items-center'>
        <NavLink to="/" className="">
          <h1 className='text-base	'>Home</h1>
        </NavLink> 
      </div>
      <div >
        <div className='flex flex-row justify-center items-center'>
          <a href='/Projects' className='mr-16'>Projects</a>
          <a className='inline-block py-2 px-5 text-[#252728] rounded-md bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] ' href='/About'>Contact</a>
        </div>
      </div>
    </div>
  )
}
