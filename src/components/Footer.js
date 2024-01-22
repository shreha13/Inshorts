import React from 'react'
import logo from '../assets/logo.png'


const Footer = () => {
  return (
    <div className='h-20 bg-[#323232] fixed bottom-0 w-full py-5'>
        <img alt="inshorts-logo" src={logo} className='w-40' />
    </div>
  )
}

export default Footer