import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader'
import InfiniteScroll from 'react-infinite-scroll-component';

export default function News({category, changeProgress,pageSize, mode, search}) {
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
      const news = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=59f90f769d584234b634fe0f129eaf41&page=${pageNumber}`)
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
      const news = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=59f90f769d584234b634fe0f129eaf41&page=${pageNumber}&pageSize=${pageSize}`)
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
      
    <h1 className={`text-center ${mode === true ? 'bg-dark text-light' : ''}`} style={{padding:"30px",paddingTop:"90px",marginBottom:"0px"}}>NewsJet - Top Headlines</h1>
      <InfiniteScroll
      dataLength={data.length}
      next={fetchMoreData}
      hasMore={data.length !== totalResults}
      loader={<Loader />}
      className={`${mode === true?'bg-dark':'' }`}>
        <div className='container'>
          <div className='row justify-content-evenly'>
          {data.filter((item) => {
           return search.toLowerCase() === '' ? item
           :item.title.toLowerCase().includes(search.toLowerCase());
          }).map((element, index) => (
            <div className='col-md-3' key={index}>
              <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url}
              author={element.author} date={element.publishedAt} source={element.source.name} mode={mode}/>
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