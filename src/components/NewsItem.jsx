import React from 'react'

export default function NewsItem({title, imageUrl, description, url, author, date,source }) {
  return (
    <div className="card my-3">
        <span className='position-absolute top-0 bg-danger rounded-pill badge translate-middle' style={{left:'80%',zIndex:"1"}}>{source}</span>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className='card-text'><small className='text-muted'>By {author?author:'Unknown'} on {new Date(date).toGMTString()}</small></p>
            <a href={`${url}`} target='_blank' className="btn btn-primary">Read more</a>
        </div>
    </div>
  )
}
