import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader';
import PropTypes from "prop-types"

export class NewsContainer extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 9,
    category:"sports"
  }
  static propTypes = {
    country:  PropTypes.string,
    pageSize: PropTypes.string,
    category: PropTypes.string,
  }
  constructor(){
    super(); 
    
    this.state={
      articles:[],
      loading: false,
      page:1,
      
    }
  }
  async componentDidMount(){
    console.log("mounted");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=252f8909baa140e68c0dfd9b92295dca&pageSize=${this.props.pageSize}`
    this.setState({
      loading: true,
    })
    
    let data = await fetch(url)
    let parsedData = await data.json();
    this.setState({articles:parsedData.articles,
      loading:false,
    })
  }
  handleNextClick =async()=>{
    console.log("clicked")
    if(this.state.page + 1>Math.ceil(this.state.totalResults/15)){
      let id = document.getElementById("next");
      id.setAttribute("disabled",true)
    }
    else{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=252f8909baa140e68c0dfd9b92295dca&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
    this.setState({
      loading: true,
    })
    let data = await fetch(url)
    let parsedData = await data.json();
    this.setState({articles:parsedData.articles,
      totalResults:parsedData.totalResults,
      page:this.state.page + 1,
    loading: false,
  })
  }}
   handlePrevClick =async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=252f8909baa140e68c0dfd9b92295dca&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`
    this.setState({loading:true})
    let data = await fetch(url)
    let parsedData = await data.json();
    this.setState({articles:parsedData.articles,
    page:this.state.page - 1,
  loading:false})
  }
  render() {
    
    return (
      <div className='container my-4'>
        <h1 className='text-center'>NewsMonkey - Top Headlines</h1>
         {this.state.loading && <Loader/>}
       
        <div className="row my-4">
        {!this.state.loading&&this.state.articles.map((elements)=>{
          return <div className="col-md-4 my-4" key={elements.url}>
          <NewsItem title={elements.title?elements.title:""} desc={elements.description?elements.description:""} imgurl={elements.urlToImage?elements.urlToImage:""} url={elements.url}/>
          </div>
          
        })}
        <div className="container my-4NPM d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" onClick={this.handlePrevClick} className="btn btn-dark">&larr;Previous</button>
        <button type="button" onClick={this.handleNextClick} id="next" className="btn btn-dark">Next&rarr;</button>
        </div>
        
        </div>
        
      </div>
    )
  }
}

export default NewsContainer