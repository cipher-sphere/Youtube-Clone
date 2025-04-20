import React from 'react'
import { CiMenuBurger, CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";


import logo from "../../public/image.png"
import profile from "../../public/profile.png"

function Navbar() {
    return (
        <div className='flex justify-between px-6 py-2 items-center'>
            <div className=' flex items-center space-x-4'>
                <CiMenuBurger className='text-xl cursor-pointer' />
                <img src={logo} alt="logo" className='w-28 cursor-pointer' />
            </div>
            <div className='flex w-[35%]'>
                <div className='w-[100%] px-3 py-1 border rounded-l-full'>
                    <input type="text" placeholder='Search' className='outline-none ' />
                </div>
                <button className='px-4 py-2 border rounded-r-full bg-gray-100'><CiSearch size={"25px"}></CiSearch></button>
                <IoMdMic size={"42px"} className='ml-3 border rounded-full hover:bg-gray-200 duration-200 cursor-pointer'></IoMdMic>
            </div>
            <div className='flex space-x-5 items-center'>
            <RiVideoAddLine className='text-2xl cursor-pointer' />
            <AiOutlineBell className='text-2xl cursor-pointer' />
            <img src={profile} alt="profile" className="w-8 h-8 rounded-full cursor-pointer" />
            </div>
        </div>
    )
}

export default Navbar