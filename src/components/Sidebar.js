import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { topics } from '../utils/constants';
import { selectedCategory } from '../utils/slices/appSlice';

const Sidebar = () => {
  const dispatch = useDispatch();
  const { category } = useSelector(state => state.app)
  const { isSidebarOpen } = useSelector(state => state.app);

  const handleCategoryChange = (item) => {
    dispatch(selectedCategory(item.category));
  }
  

  if(!isSidebarOpen) return null;
  return (
    <div className='shadow-lg w-60 bg-[#303036] h-dvh fixed'>
        <div className='text-[#808290] py-4 pl-4'>Categories</div>
        <ul className='text-white pl-5'>
            {topics.map(topic => <li className={`py-3 pl-3 cursor-pointer hover:bg-[#44444d] ${category === topic.category? 'bg-gray-400': ''}`} onClick={() => handleCategoryChange(topic)} value={category} key={topic.category}>{topic.name}</li>)}
        </ul>
    </div>
  )
}

export default Sidebar