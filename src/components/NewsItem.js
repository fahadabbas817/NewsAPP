import React  from 'react'


const NewsItem =(props)=> {
  

  
    let{title,desc,imgurl,url,author,time}=props;
    return (
      <div><div className="card" >
        
      <img src={imgurl?imgurl:"https://image.cnbcfm.com/api/v1/image/107320903-1697818883420-gettyimages-1746545509-wallstreet22811_xn5gvnrb.jpeg?v=1698012233&w=1920&h=1080"} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title?title:"Title"}</h5>
        <p className="card-text">{desc?desc:"Here is supposed to be a description but due to some error it is not getting sorry for inconvenience. Click on the link to learn more"}</p>
        <p><span className="badge text-bg-warning">{author}</span></p>
        <p>{new Date(time).toGMTString()}</p>
        <a href={url} target='_blank' rel='noreferrer' className="btn btn-primary">Learn More</a>
      </div>
    </div></div>
    )
  }


export default NewsItem