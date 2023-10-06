import React, { useEffect } from 'react'
import { HeaderNavbar } from './HeaderNavbar/HeaderNavbar'
export const Home2 = () => {
  useEffect(() => {
    document.title = "Home 2"; // Set the meta title for Page 1
  }, []);
  
  return (
    <div className="header-navbar home-page-bgm" >
      <HeaderNavbar/>
      <div className='flex justify-center items-center'>
        <h1 className='text-bold text-white md:3xl lg:text-9xl'>Home2</h1>
      </div>
    </div>
  )
}
