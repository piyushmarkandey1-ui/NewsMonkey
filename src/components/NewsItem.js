import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    const fallback = "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=500&q=80";
    
    return (
      <div className="neu-card">
        <div style={{position: 'relative'}}>
          <span className="badge rounded-pill source-badge">{source}</span>
        </div>
        <div className="neu-img-wrapper">
          <img src={imageUrl || fallback} onError={(e)=>{e.target.onerror=null; e.target.src=fallback}} alt="news" />
        </div>
        <h5 className="card-title fw-bold">{title}...</h5>
        <p className="card-text">{description}...</p>
        <p className="text-muted"><small>By {author ? author : "Unknown"} on {date ? new Date(date).toGMTString() : "Unknown Date"}</small></p>
        <a href={newsUrl} className="btn btn-primary-custom" target="_blank" rel="noopener noreferrer">Read More</a>
      </div>
    )
  }
}

export default NewsItem
