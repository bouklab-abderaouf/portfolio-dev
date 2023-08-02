import React, { useContext } from 'react'
import { NavLink } from "react-router-dom";
import { RefContext } from "../Pages/RoutesManager";  

export const Navbar = ({ scrollToRef }) => {
  const { myRef1, myRef2, myRef3 } = useContext(RefContext);

  return (
    <div className='flex justify-between flex-wrap py-4 text-[#BDEBEA] '>
      <div className='flex justify-center items-center'>
        <NavLink to="/" onClick={() => scrollToRef(myRef1)} className="">
          <h1 className='text-base	'>Home</h1>
        </NavLink> 
      </div>
      <div >
        <div className='flex flex-row justify-center items-center'>
          <NavLink  onClick={() => scrollToRef(myRef2)} className='mr-16'>Projects</NavLink>
          <NavLink className='inline-block py-2 px-5 text-[#252728] rounded-md bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] ' to='/About' onClick={() => scrollToRef(myRef3)}>Contact</NavLink>
        </div>
      </div>
    </div>
  )
}
