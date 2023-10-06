import React, { useState } from 'react'
import { HeaderNavbar } from '../HeaderNavbar/HeaderNavbar'
import {BsEyeSlashFill,BsEyeFill} from 'react-icons/bs'
import {MdKeyboardArrowRight} from 'react-icons/md'
import './index.css'
export const Home = () => {
  const [showPass,setShowPass] = useState(false)

  return (
    <div className="header-navbar home-page-bgm" >
        <HeaderNavbar/>
        <div className=''>

        
        <div className='container'>
          <div className='row'>
            <div className='col-9'>
              <div>
                <h1 className='text-white banner-heading'>BE A <span className='text-slate-900'>SMART STUDENT</span></h1>
                <p  className='text-white banner-para mb-4'>SchoolAura Is A Smart Education Platform</p>
              </div>
              <div className='flex gap-4'>
                <div className='hero-services-bg'></div>
                <div className='card-same flex flex-col items-center text-center'>
              <h1 className='font-bold mb-4'>ENTERANCE<br/>Solution</h1>
              <button className='card-btn p-2 '>Exam</button>
              <button className='card-btn p-2'>Course</button>
              <p className='flex items-center mt-2'>Read more<MdKeyboardArrowRight/></p>
                </div>
                <div className='card-same flex flex-col items-center text-center'>
              <h1 className='font-bold mb-4'>COMPETITIVE<br/>Solution</h1>
              <button className='card-btn p-2'>Exam</button>
              <button className='card-btn p-2'>Course</button>
              <p className='flex items-center mt-2'>Read more<MdKeyboardArrowRight/></p>
                </div>
                <div className='card-same flex flex-col items-center text-center'>
              <h1 className='font-bold mb-4'>KG - 12<sup>TH</sup><br/>SCHOOL</h1>
              <button className='card-btn p-2'>Exam</button>
              <button className='card-btn p-2'>Course</button>
              <p className='flex items-center mt-2'>Read more<MdKeyboardArrowRight/></p>
                </div>
                <div className='card-same flex flex-col items-center text-center'>
              <h1 className='font-bold mb-4'>TUTOR<br/>SOLUTION</h1>
              <button className='card-btn p-2'>Find Tutors</button>
              <button className='card-btn p-2'>Become Tutor</button>
              <p className='flex items-center mt-2'>Read more<MdKeyboardArrowRight/></p>
                </div>
              </div>
            </div>

            <div className='col-3 mana-class'>
              
              <div className='card-same-login flex flex-col mt-3'>
              <div className='boss-pic'>
              <img className='hero-icon' src="https://schoolaura.com/Content/new_assets/images/header/user-img.png"/>
              </div>
                <div className='m-2 mt-5 text-center'>
                  <button className='p-1 border-b-2 border-red-500 text-yellow-600'>Student Login</button>
                  <button className='p-1  '>Parents Login</button>
                </div>
                <div className=' flex flex-col mt-3 p-2'>
                  <label>Mobile Number or Key</label>
                  <input type="text" className='border-1 rounded bg-slate-200 p-1 border-slate-600'/>
                </div>
                <div className='flex flex-col mt-1 p-2'>
                  <label>Student Password</label>
                  <input type={showPass? "text":"password"} className='border-1 rounded bg-slate-200 p-1 border-slate-600 mb-1'/>
                  <button onClick={()=>{setShowPass(!showPass)}}>{showPass?<BsEyeFill/>:<BsEyeSlashFill/>}</button>
                </div>
                
                <button className='m-2 p-1 font-bold bg-slate-900 text-white'>Login</button>
                <div className='flex justify-between items-center'>
                  <button className='ml-2'>Forgot Password</button>
                  <button className='mr-2'>Create Account</button>
                </div>

              </div>
            </div>

          </div>
        </div>
        </div>
    </div>
  )
}
