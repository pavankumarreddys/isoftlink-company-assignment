import React, { useEffect } from 'react'
import { HeaderNavbar } from './HeaderNavbar/HeaderNavbar'
export const Home1 = () => {
  // In your React component
useEffect(() => {
  document.title = "Home 1"; // Set the meta title for Page 1
}, []);

// Repeat similar code for other pages with appropriate titles

  return (
    <div className="header-navbar home-page-bgm" >
      <HeaderNavbar/>
      <div className='flex justify-center items-center'>
        <h1 className='text-bold text-white md:3xl lg:text-9xl'>Home1</h1>
      </div>
    </div>
  )
}
