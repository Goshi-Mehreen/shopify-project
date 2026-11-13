import React from 'react'
import navlogo from '../assets/Navlogo.png'
import Bell from '../assets/bell.png'
import Manicon from '../assets/customer.png'
import Chairlogo from '../assets/chairlogo.png'
import Searchicon from '../assets/Search icon.png'
const NavBar = () => {
  return (
    <div className='flex justify-between bg-black p-4 items-center'>
      <div>
        <img src={navlogo} alt="" />
      </div>
      <div className='w-125 h-8 bg-[#303030] border rounded-sm flex items-center'>
        <img src={Searchicon} alt="" className='items-center p-2'/>

        <input type="text" className='w-full h-full rounded-sm outline-none text-white' placeholder='Search...'/>
      </div>
      <div className='flex gap-2 items-center'>
        <div>
        <img src={Manicon} alt=""/>
        </div>
        <div>
        <img src={Bell} alt=""/>
        </div>
        <div className='flex gap-3 bg-[#303030] rounded-sm items-center'>
            <div>
            <p className='text-white px-2'>Stellar Interiors</p>
            </div>
            <div>
                <img src={Chairlogo} alt="" className='w-10 h-10 rounded-sm'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
