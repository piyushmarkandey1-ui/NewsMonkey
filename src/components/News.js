import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general"
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    searchQuery: PropTypes.string
  }
  constructor(props){
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    }
    const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);
    document.title = this.props.searchQuery 
      ? `Search: ${this.props.searchQuery} - NewsMonkey` 
      : `${capitalize(this.props.category)} - NewsMonkey`;
  }
   
  async updateNews(){
      let url = this.props.searchQuery
        ? `/api/news?q=${encodeURIComponent(this.props.searchQuery)}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        : `/api/news?country=${this.props.country}&category=${this.props.category}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
     try {
       let data = await fetch(url);
       let parsedData = await data.json();
       console.log(parsedData);
       this.setState({articles: parsedData.articles || [], totalResults: parsedData.totalResults || 0, loading: false})
     } catch (error) {
       console.error('Error fetching news:', error);
       this.setState({ loading: false });
     }
  }
  async componentDidMount() {
    this.updateNews();
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.category !== this.props.category || prevProps.searchQuery !== this.props.searchQuery) {
      const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);
      document.title = this.props.searchQuery 
        ? `Search: ${this.props.searchQuery} - NewsMonkey` 
        : `${capitalize(this.props.category)} - NewsMonkey`;
      this.setState({ page: 1, loading: true }, this.updateNews);
    }
  }
  handlePrevClick = async () => {
    const newPage = this.state.page - 1;
    this.setState({ page: newPage, loading: true }, this.updateNews);
  }

  handleNextClick = async () => {
    const newPage = this.state.page + 1;
    this.setState({ page: newPage, loading: true }, this.updateNews);
  }

  render() {
    return (
      <div className="container my-3">
         {this.state.loading && <Spinner />}
         <h2 className='page-heading'>
           {this.props.searchQuery 
             ? `Search Results for "${this.props.searchQuery}"` 
             : `NewsMonkey - Top ${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} Headlines`}
         </h2>
        <div className="row g-4">
          {!this.state.loading && (this.state.articles || []).map((article, index) => (
            <div className="col-md-6 col-lg-4 d-flex align-items-stretch" key={index}>
              <NewsItem title={article.title?article.title.slice(0, 45):""} description={article.description?article.description.slice(0, 88):""} imageUrl={article.urlToImage} newsUrl={article.url} author={article.author} date={article.publishedAt} source={article.source.name} />
            </div>
          ))}
        </div>
        <div className="container d-flex justify-content-between my-5">
          <button disabled={this.state.page<=1} type="button" className="btn btn-pagination" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-pagination" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
