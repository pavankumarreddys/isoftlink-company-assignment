import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {BsFillBuildingFill} from 'react-icons/bs'
import {BiSolidDownArrow} from 'react-icons/bi'
import './index.css'
export const HeaderNavbar = () => {
    const [home,setHome] = useState(false)
  return (
    <div id='header-navbar-home'>
            <div className='logo-image-container' >
                <img className="logo-image" src="https://schoolaura.com/Content/assets/images/logo_school.png"/>
            </div>
            <div className='flex pt-2'>
                <div>
                <div className='mr-2 text-white flex justify-items-start items-start hrink'>
                    <Link
                    onMouseEnter={() => setHome(true)}
                    onMouseLeave={() => setHome(false)} 
                    to="/"
                    >Home</Link>
                    <button 
                    onMouseEnter={() => setHome(true)}
                    onMouseLeave={() => setHome(false)}
                    className='mt-2 text-white pl-1'><BiSolidDownArrow size={"13px"}/></button>
                </div>
                {home &&
                    <div className='flex flex-col'>
                    <Link onMouseEnter={() => setHome(true)}
                        onMouseLeave={() => setHome(false)} 
                        to="/home1"
                        className='drop-down rounded-t-lg border-2 border-red-200 border-b-red-500 '>Home 1</Link>
                    <Link
                    to="/home2"
                    onMouseEnter={() => setHome(true)}
                    onMouseLeave={() => setHome(false)}
                    className='drop-down border-1 border-red-200 border-red-500 '>Home 2</Link>
                    <Link
                    to="/home3" 
                    onMouseEnter={() => setHome(true)}
                    onMouseLeave={() => setHome(false)}
                    className='drop-down rounded-b-lg border-2 border-red-200 border-t-red-500 '>Home 3</Link>
                    </div>
                    }
                </div>
                <div className='mr-2 text-white flex justify-items-start items-start hrink'>
                    Exam Solution
                    <button className='mt-2 text-white pl-1'><BiSolidDownArrow size={"13px"}/></button>
                </div>
                <div className='mr-2 text-white flex justify-items-start items-start hrink'>
                    Online Study
                    <button className='mt-2 text-white pl-1'><BiSolidDownArrow size={"13px"}/></button>
                </div>
                <div className='mr-2 text-white flex justify-items-start items-start hrink'>
                    Tutor Solution
                    <button className='mt-2 text-white pl-1'><BiSolidDownArrow size={"13px"}/></button>
                </div>
                <div className='mr-2 text-white '>
                    Blogs
                    
                </div>
                <div className='mr-2 text-white'>
                    Contact Us
                </div>
                <div className='flex school-btn items-center p-1 bg-slate-900 rounded mr-2'>
                <button className='p-1 tex-center  rounded-full text-white'><BsFillBuildingFill/></button>
                <p className='pl-1 text-white'>School Management</p>
            </div>
            

            </div>
    </div>
  )
}
