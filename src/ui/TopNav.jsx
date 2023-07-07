/* eslint-disable no-unused-vars */
import React from 'react'
import logo from '../assets/logo/shopcart.png'
import profileIcon from '../assets/icons/Vector.png'
export default function TopNav() {
  return (
    <div className='flex items-center justify-between font-pop'>
        <img src={logo} alt="" />
        <div className='flex'>
            <img src={profileIcon} alt="" />
             <p className='ml-2'>Sign In</p>
        </div>
    </div>
  )
}
