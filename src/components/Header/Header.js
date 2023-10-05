import React from 'react'
import {BsTelephone,BsWhatsapp} from 'react-icons/bs'
import {BiMobile} from 'react-icons/bi'
import {FiMail} from 'react-icons/fi'
export const Header = () => {
  return (
    <div className=' flex justify-between items-center bg-white p-2'>
        <div className='flex items-center'>
            <div className='flex items-center p-2'>
                <button className='bg-orange-600 p-1 tex-center rounded-full text-white'><BsTelephone/></button>
                <p className='pl-1'>+91-9540349392</p>
            </div>
            <div className='flex items-center p-2'>
                <button className='bg-orange-600 p-1 tex-center rounded-full text-white'><FiMail/></button>
                <p className='pl-1'>contact@schoolaura.com</p>
            </div>
        </div>
        <div className='flex items-center'>
            <div className='flex items-center p-1 bg-green-600 rounded ml-2'>
                <button className=' p-1 tex-center rounded-full text-white'>
                    <BsWhatsapp/></button>
                <p className='pl-1 text-white'>WhatsApp</p>
            </div>
            <div className='flex items-center p-1 bg-yellow-400 rounded ml-2'>
                <button className='p-1 tex-center rounded-full text-white'><BiMobile/></button>
                <p className='pl-1 text-white'>Mobile App</p>
            </div>
            <div className='flex items-center p-1 bg-slate-900 rounded ml-2 text-center'>
                <p className='pl-1 text-white'>Login</p>
            </div>
            <div className='flex items-center p-1 bg-slate-900 rounded ml-2 text-center'>
                <p className='pl-1 text-white'>Registration</p>
            </div>
        </div>
    </div>
  )
}
