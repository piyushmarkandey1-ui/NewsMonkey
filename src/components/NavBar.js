import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NavBar extends Component {
  static propTypes = {
    onCategoryChange: PropTypes.func,
    category: PropTypes.string,
    onSearch: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };
  }

  handleSearchSubmit = (e) => {
    e.preventDefault();
    if (this.props.onSearch) {
      this.props.onSearch(this.state.searchText);
    }
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Newsmonkey</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className={`nav-link ${this.props.category === 'business' ? 'active-link' : ''}`} style={{cursor: 'pointer'}} onClick={(e) => { e.preventDefault(); this.props.onCategoryChange('business')}}>Business</a>
        </li>
         <li className="nav-item">
          <a className={`nav-link ${this.props.category === 'entertainment' ? 'active-link' : ''}`} style={{cursor: 'pointer'}} onClick={(e) => { e.preventDefault(); this.props.onCategoryChange('entertainment')}}>Entertainment</a>
        </li>
         <li className="nav-item">
          <a className={`nav-link ${this.props.category === 'health' ? 'active-link' : ''}`} style={{cursor: 'pointer'}} onClick={(e) => { e.preventDefault(); this.props.onCategoryChange('health')}}>Health</a>
        </li>
         <li className="nav-item">
          <a className={`nav-link ${this.props.category === 'general' ? 'active-link' : ''}`} style={{cursor: 'pointer'}} onClick={(e) => { e.preventDefault(); this.props.onCategoryChange('general')}}>General</a>
        </li>
         <li className="nav-item">
          <a className={`nav-link ${this.props.category === 'science' ? 'active-link' : ''}`} style={{cursor: 'pointer'}} onClick={(e) => { e.preventDefault(); this.props.onCategoryChange('science')}}>Science</a>
        </li>
         <li className="nav-item">
          <a className={`nav-link ${this.props.category === 'sports' ? 'active-link' : ''}`} style={{cursor: 'pointer'}} onClick={(e) => { e.preventDefault(); this.props.onCategoryChange('sports')}}>Sports</a>
        </li>
         <li className="nav-item">
          <a className={`nav-link ${this.props.category === 'technology' ? 'active-link' : ''}`} style={{cursor: 'pointer'}} onClick={(e) => { e.preventDefault(); this.props.onCategoryChange('technology')}}>Technology</a>
        </li>
      </ul>
      <form className="d-flex" role="search" onSubmit={this.handleSearchSubmit}>
        <input className="form-control me-2" type="search" placeholder="Search news..." aria-label="Search" value={this.state.searchText} onChange={(e) => this.setState({searchText: e.target.value})} style={{background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)'}} />
        <button className="btn btn-outline-info" type="submit" style={{borderColor: 'var(--accent-color)', color: 'var(--accent-color)'}}>Search</button>
      </form>
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default NavBar
