import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {

  const [visible,setVisible] = useState(false);
  return (
    <div className=' flex items-center justify-between py-5 font-medium'>

      <img src={assets.logo} className='w-[36vh]'  alt="" />

      <ul className=' hidden sm:flex gap-5 text-sm text-gray-600'>
        
      <NavLink to='/home' className=' flex flex-col items-center gap-1 '>
            <p className='green hover:text-gray-950 duration-200'>HOME</p>
            <hr className='green w-2/4 border-none h-[1.5px] bg-pink-500 hidden'/> 
        </NavLink>
          
        <NavLink to='/collection' className=' flex flex-col items-center gap-1 '>
            <p className='yellow hover:text-gray-950 duration-200'>COLLECTION</p>
            <hr className='yellow w-2/4 border-none h-[1.5px] bg-pink-500 hidden'/> 
        </NavLink>
          
        <NavLink to='/about' className=' flex flex-col items-center gap-1 '>
            <p className='blue hover:text-gray-950 duration-200'>ABOUT</p>
            <hr className='blue w-2/4 border-none h-[1.5px] bg-pink-500 hidden'/> 
        </NavLink>
          
        <NavLink to='/contact' className=' flex flex-col items-center gap-1 '>
            <p className='red hover:text-gray-950 duration-200'>CONTACT</p>
            <hr className=' red  w-2/4 border-none h-[1.5px] bg-pink-500 hidden'/> 
        </NavLink>
          
      </ul>
      <div className=' flex items-center gap-6'>
        <img src={assets.search_icon} className='w-6 cursor-pointer' alt="" />
        
        <div className='group relative'>
          <img className='w-6 cursor-pointer'  src={assets.profile_icon} alt=''/>
          <div className=' group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className=' flex flex-col gap w-40 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className=' cursor-pointer hover:text-black'> My Profile</p>
              <p className=' cursor-pointer hover:text-black'> Order</p>
              <p className=' cursor-pointer hover:text-black'> Logout</p>
            </div>
          </div>
        </div>
        <Link to='/cart' className=' relative'>
           <img src={assets.cart_icon} className=' w-6 min-w-5' alt=''/> 
           <p className=' absolute right-[-5px] bottom-[-3px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
        </Link>
        <img  src={assets.menu_icon} className=' w-6 cursor-pointer sm:hidden' alt=''/>
      </div>
    </div>
  )
}

export default Navbar
