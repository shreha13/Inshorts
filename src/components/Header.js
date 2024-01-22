import React from 'react'
import logo from '../assets/logo.png'
import { useDispatch } from 'react-redux'
import { toggleSideBar } from '../utils/slices/appSlice';

const Header = () => {
  const dispatch = useDispatch();

  const onSidebarHandle = () => {
    dispatch(toggleSideBar())
  }

  return (
    <div className='grid grid-flow-col shadow-lg px-8 py-4 items-center fixed h-20 w-full z-10 bg-white'>
      <div className='flex grid-col-1'><div className='mr-4 cursor-pointer' onClick={onSidebarHandle}><i class="fa-solid fa-bars"></i></div>Menu</div>
      <img alt="inshorts-logo" src={logo} className='w-40' />
    </div>
  )
}

export default Header