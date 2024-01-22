import React from 'react'

const NewsCard = ({item}) => {
  return (
    <div className='w-[900px] m-auto flex my-4 p-4 shadow-xl shadow-gray-200 rounded-md'>
        <img src={item.urlToImage} alt="image" className='w-40 h-auto' />
        <div className='ml-4'>
            <div className='text-base text-[#444444]'>{item.title}</div>
            <div className='text-xs my-2 text-[#808290]'>short by {item.author}</div>
            <div className='text-sm text=[#808290] my-4'>{item.description}</div>
            <div className='text-xs'>read more at <a href={item.url} target='_blank' rel="noreferrer">{item.source?.name}</a></div>
        </div>
    </div>
  )
}

export default NewsCard