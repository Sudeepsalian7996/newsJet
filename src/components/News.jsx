import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader'
import InfiniteScroll from 'react-infinite-scroll-component';

export default function News({category, changeProgress}) {
    const [data, setData] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [loading, setLoading] = useState(true)

    const apiCall = async() => {
       dynamicApiCall(pageNumber)
    }

    const dynamicApiCall = async (page) => {
      changeProgress(10)
      document.title = `${category} - NewsJet`
      setLoading(true)
      const news = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=01764afab37e45318dd0bbb8834da568&page=${page}`)
      changeProgress(35)
      const parsedNews = await news.json()
      console.log('parsernews->',parsedNews)
      setData(parsedNews)
      changeProgress(100)
      setLoading(false)
    }

    useEffect(() => {
      apiCall()
    },[category])
    console.log('data-->',data)

    const fetchMoreData = () => {

    }
  return (
    loading ? 
      ( <div className='text-center'>
        <Loader />
      </div>)
      :
    (<>
      
    <h1 className='text-center' style={{margin:"30px"}}>NewsJet - Top Headlines</h1>
      <InfiniteScroll
      dataLength={data.articles.length}
      next={fetchMoreData}
      hasMore={data.articles.length !== data.totalResults}
      loader={<Loader />}>
        <div className='container'>
          <div className='my-3 row justify-content-evenly'>
          {data.articles.map((element, index) => (
            <div className='col-md-3' key={index}>
              <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url}
              author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
          ))}
        </div>
      </div>
      </InfiniteScroll>
      
  </>)
    
  )
}
