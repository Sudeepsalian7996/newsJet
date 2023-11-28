import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader'
import InfiniteScroll from 'react-infinite-scroll-component';

export default function News({category, changeProgress,pageSize}) {
    const [data, setData] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [loading, setLoading] = useState(true);
    const [totalResults, setTotalResults] = useState(0)

    const apiCall = async() => {
       dynamicApiCall(pageNumber)
    }

    const dynamicApiCall = async (page) => {
      changeProgress(10)
      document.title = `${category} - NewsJet`
      setLoading(true)
      const news = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=01764afab37e45318dd0bbb8834da568&page=${pageNumber}`)
      changeProgress(35)
      const parsedNews = await news.json()
    
      setData(parsedNews.articles)
      setTotalResults(parsedNews.totalResults)
      changeProgress(100)
      setLoading(false)
    }

    useEffect(() => {
      apiCall()
    },[category])


    const fetchMoreData = async() => {
      const news = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=01764afab37e45318dd0bbb8834da568&page=${pageNumber}&pageSize=${pageSize}`)
      setPageNumber(pageNumber+1)
      const parsedNews = await news.json()
   
      setData(data.concat(parsedNews.articles))
      setTotalResults(parsedNews.totalResults)
    }
  return (
    loading ? 
      ( <div className='text-center'>
        <Loader />
      </div>)
      :
    (<>
      
    <h1 className='text-center' style={{margin:"30px",marginTop:"90px"}}>NewsJet - Top Headlines</h1>
      <InfiniteScroll
      dataLength={data.length}
      next={fetchMoreData}
      hasMore={data.length !== totalResults}
      loader={<Loader />}>
        <div className='container'>
          <div className='my-3 row justify-content-evenly'>
          {data.map((element, index) => (
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

// News.defaultprops = {
//     country : 'in',
//     pageSize : 8,
//     category :'general'
// }

// News.propTypes = {
//   country : propTypes.string,
//   pageSize: propTypes.number,
//   category: propTypes.string
// }