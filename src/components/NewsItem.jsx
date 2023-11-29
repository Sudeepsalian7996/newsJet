import React from 'react'

export default function NewsItem({title, imageUrl, description, url, author, date,source, mode }) {
  const truncatedDescription = description?.length > 100 ? `${description.slice(0, 50)}...` : description;
  
  
  const truncatedTitle = title?.length > 20 ? `${title.slice(0, 20)}...` : title;

  return (
    <div className="card my-3">
        <span className='position-absolute top-0 bg-danger rounded-pill badge translate-middle' style={{left:'80%',zIndex:"1"}}>{source}</span>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className={`card-body ${mode === true ? 'bg-dark text-light':''}`}>
            <h5 className="card-title">{truncatedTitle}</h5>
            <p className="card-text">{truncatedDescription}</p>
            <p className='card-text'><small className={`card-body ${mode === true ? 'text-light':'text-muted'}`}>By {author?author:'Unknown'} on {new Date(date).toGMTString()}</small></p>
            <a href={`${url}`} target='_blank' className={`btn ${mode === true ? 'btn-light text-dark' : 'btn-primary'}`}>Read more</a>
        </div>
    </div>
  )
}
