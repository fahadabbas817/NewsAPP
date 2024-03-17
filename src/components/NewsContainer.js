import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader';
import PropTypes from "prop-types"
import InfiniteScroll from "react-infinite-scroll-component";

const  NewsContainer= (props)=> {
  const  [articles, setArticles] = useState([])
  const  [loading, setLoading] = useState(false)
  const  [page, setPage] = useState(1)
  const  [totalResults, settotalResults] = useState(0)
  
 const capitalizer=(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);

  }

   
  
 const  updateNews=async()=>{
  
    props.setprogress(20);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=252f8909baa140e68c0dfd9b92295dca&page=${page}&pageSize=${props.pageSize}`
    setLoading(true);
    props.setprogress(60);
    let data = await fetch(url)
    let parsedData = await data.json();
    props.setprogress(80);
    setArticles(parsedData.articles)
    setLoading(false)
    settotalResults(parsedData.totalResults)
    props.setprogress(100);
    console.log(parsedData)
    
  }
  useEffect(() => {  
    return () => {
      updateNews();
       document.title = `${capitalizer(props.category)} - NewsMonkey`
    }
  },[props.category] )
  
 
  const fetchMoreData=async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=252f8909baa140e68c0dfd9b92295dca&page=${page+1}&pageSize=${props.pageSize}`
    setPage(page + 1)
    setLoading(true)    
    let data = await fetch(url)
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setLoading(false)
    settotalResults(parsedData.totalResults)
  }
 
 
  
 
    
    return (
      <div className='container my-4'>
        <h1 className='text-center'style={{margin:"60px 0px 0px"}}>NewsMonkey - Top {capitalizer(props.category)} Headlines</h1>
         {loading && <Loader/>}
         <InfiniteScroll
         className='infinite'
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={page<Math.ceil(totalResults/props.pageSize)}
          loader={<Loader/>}>
          <div className='container'>
         <div className='row my-4'>
      
        {articles.map((elements)=>{
          return <div className="col-md-4 my-4" key={elements.url}>
          <NewsItem title={elements.title?elements.title:""} desc={elements.description?elements.description:""} imgurl={elements.urlToImage?elements.urlToImage:""} url={elements.url} author={elements.source.name} time={elements.publishedAt}/>
          </div>
        })}
        </div>
        </div>
        </InfiniteScroll>
       
        
      </div>
    )
  }

 NewsContainer.defaultProps = {
  country: "in",
  pageSize: 9,
  category:"sports"
}
NewsContainer.propTypes = {
  country:  PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default NewsContainer