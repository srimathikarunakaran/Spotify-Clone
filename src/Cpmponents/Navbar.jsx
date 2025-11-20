

import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

export const Navbar = () =>
  {
     
    const navigate = useNavigate()
  

  return (
    <>

    <div className='w-full flex justify-between font-semibold items-center'>

        <div className='flex items-center gap-2'>
            <img onClick={() => navigate(-1)} src={assets.arrow_left} alt=""  className='w-8 bg-black p-2 rounded-2xl cursor-pointer'/>
            <img onClick={() => navigate(1)} src={assets.arrow_right} alt=""  className='w-8 bg-black p-2 rounded-2xl cursor-pointer'/>
        </div>


        <div className='flex items-center gap-4'>
          <div className=' flex items-center gap-3 pl-8 cursor-pointer'>
                <img className='w-6' src={assets.search_icon} alt="" />
                <p className='font-bold'>Search</p>

            </div>
            <p className='bg-white text-black texy-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>Explore Premium</p>
             <p className='bg-black py-1 px-3 rounded-2xl text-[15px]'>Install App</p>
             <p className='bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center' >S</p>
        </div>


    </div>


    <div className='flex items-center gap-2 mt-4 '>
         <p className='bg-white text-black rounded-2xl px-4 py-1 cursor-pointer'>All</p>
         <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
         <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Podcast</p>

    </div>
    
    </>
  )
}
