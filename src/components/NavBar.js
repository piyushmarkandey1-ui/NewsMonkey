import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NavBar extends Component {
  static propTypes = {
    onCategoryChange: PropTypes.func,
    category: PropTypes.string,
    onSearch: PropTypes.func,
    country: PropTypes.string,
    toggleCountry: PropTypes.func,
    theme: PropTypes.string,
    toggleTheme: PropTypes.func
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
          <a href="/" className={`nav-link ${this.props.category === 'business' ? 'active-link' : ''}`} style={{cursor: 'pointer'}} onClick={(e) => { e.preventDefault(); this.props.onCategoryChange('business')}}>Business</a>
        </li>
         <li className="nav-item">
          <a href="/" className={`nav-link ${this.props.category === 'entertainment' ? 'active-link' : ''}`} style={{cursor: 'pointer'}} onClick={(e) => { e.preventDefault(); this.props.onCategoryChange('entertainment')}}>Entertainment</a>
        </li>
         <li className="nav-item">
          <a href="/" className={`nav-link ${this.props.category === 'health' ? 'active-link' : ''}`} style={{cursor: 'pointer'}} onClick={(e) => { e.preventDefault(); this.props.onCategoryChange('health')}}>Health</a>
        </li>
         <li className="nav-item">
          <a href="/" className={`nav-link ${this.props.category === 'general' ? 'active-link' : ''}`} style={{cursor: 'pointer'}} onClick={(e) => { e.preventDefault(); this.props.onCategoryChange('general')}}>General</a>
        </li>
         <li className="nav-item">
          <a href="/" className={`nav-link ${this.props.category === 'science' ? 'active-link' : ''}`} style={{cursor: 'pointer'}} onClick={(e) => { e.preventDefault(); this.props.onCategoryChange('science')}}>Science</a>
        </li>
         <li className="nav-item">
          <a href="/" className={`nav-link ${this.props.category === 'sports' ? 'active-link' : ''}`} style={{cursor: 'pointer'}} onClick={(e) => { e.preventDefault(); this.props.onCategoryChange('sports')}}>Sports</a>
        </li>
         <li className="nav-item">
          <a href="/" className={`nav-link ${this.props.category === 'technology' ? 'active-link' : ''}`} style={{cursor: 'pointer'}} onClick={(e) => { e.preventDefault(); this.props.onCategoryChange('technology')}}>Technology</a>
        </li>
      </ul>
      <form className="d-flex me-3" role="search" onSubmit={this.handleSearchSubmit}>
        <input className="form-control me-2 neumorphic-input" type="search" placeholder="Search news..." aria-label="Search" value={this.state.searchText} onChange={(e) => this.setState({searchText: e.target.value})} />
        <button className="btn neumorphic-btn" type="submit">Search</button>
      </form>
      <div className="neumorphic-toggle-group me-3">
        <button 
          className={`btn neumorphic-toggle-btn ${this.props.country === 'in' ? 'active' : ''}`} 
          onClick={this.props.country !== 'in' ? this.props.toggleCountry : undefined}
          type="button">IND</button>
        <button 
          className={`btn neumorphic-toggle-btn ${this.props.country === 'us' ? 'active' : ''}`} 
          onClick={this.props.country !== 'us' ? this.props.toggleCountry : undefined}
          type="button">GLB</button>
      </div>
      <div className="neumorphic-toggle-group">
        <button 
          className={`btn neumorphic-toggle-btn ${this.props.theme === 'light' ? 'active' : ''}`} 
          onClick={this.props.theme !== 'light' ? this.props.toggleTheme : undefined}
          type="button">LGT</button>
        <button 
          className={`btn neumorphic-toggle-btn ${this.props.theme === 'dark' ? 'active' : ''}`} 
          onClick={this.props.theme !== 'dark' ? this.props.toggleTheme : undefined}
          type="button">DRK</button>
      </div>
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default NavBar
