import React, { Component } from 'react'
import BorderGlow from './BorderGlow';

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    const svg = "<svg xmlns='http://www.w3.org/2000/svg' width='286' height='180'><rect width='100%' height='100%' fill='%231e293b'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%2394a3b8' font-size='20'>No Image</text></svg>";
    const fallback = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
    return (
      <div className="my-4 h-100">
        <BorderGlow
          className="h-100"
          edgeSensitivity={30}
          glowColor="190 95 43"
          backgroundColor="rgba(30, 41, 59, 0.7)"
          borderRadius={16}
          glowRadius={20}
          glowIntensity={1.0}
          coneSpread={25}
          animated={true}
          colors={['#06b6d4', '#10b981', '#38bdf8']}
        >
          <div className="card news-card h-100" style={{ border: 'none', background: 'transparent', boxShadow: 'none' }}>
            <div className="card-img-container">
              <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '10px', top: '10px', zIndex: '2'}}>
                <span className="badge rounded-pill source-badge"> {source} </span>
              </div>
              <img src={imageUrl || fallback} onError={(e)=>{e.target.onerror=null; e.target.src=fallback}} className="card-img-top" alt="news" />
            </div>
            <div className="card-body">
              <h5 className="card-title fw-bold">{title}...</h5>
              <p className="card-text">{description}...</p>
              <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {date ? new Date(date).toGMTString() : "Unknown Date"}</small></p>
              <a href={newsUrl} className="btn btn-primary-custom mt-auto align-self-start" target="_blank" rel="noopener noreferrer">Read More</a>
            </div>
          </div>
        </BorderGlow>
      </div>
    )
  }
}

export default NewsItem
