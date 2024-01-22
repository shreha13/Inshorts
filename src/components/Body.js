import React from 'react'
import Sidebar from './Sidebar'
import NewsContainer from './NewsContainer'

const Body = () => {
  return (
    <div className='flex pt-20'>
      <Sidebar />
      <NewsContainer />
    </div>
  )
}

export default Body