import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    const svg = "<svg xmlns='http://www.w3.org/2000/svg' width='286' height='180'><rect width='100%' height='100%' fill='%2316181b'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23878e99' font-size='20'>No Image</text></svg>";
    const fallback = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
    
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
