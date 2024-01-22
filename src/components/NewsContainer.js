import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard'
import { getAllNews } from '../utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { updateNewsCount } from '../utils/slices/appSlice';

const NewsContainer = () => {
  const dispatch = useDispatch();
  const { category, newsCount } = useSelector(state => state.app);
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews(category, newsCount)
  }, [category, newsCount])

  const getNews = async (category, newsCount) => {
    try {
      const resp = await getAllNews({topic: category, newsOffset: newsCount});
      setNews(resp.data.articles);
    } catch(err) {
      console.log(err);
    }
  }

  const handleLoadMoreNews = () => {
    dispatch(updateNewsCount())
  }

  return (
    <>
     <div className='mx-auto'>
        {news.map(singleNews => <NewsCard key={singleNews.title} item={singleNews} />)}
        <div className='flex justify-center my-4'>
          <button type='button' className='shadow-lg flex align-middle p-4 rounded-lg' onClick={handleLoadMoreNews}>Load More</button>
        </div>
      </div>
    </>
   
  )
}

export default NewsContainer