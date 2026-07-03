

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'general',
      searchQuery: ''
    };
  }

  handleCategoryChange = (category) => {
    this.setState({ category, searchQuery: '' });
  }

  handleSearch = (query) => {
    this.setState({ searchQuery: query });
  }
  
  render() {
    return (
      <div>
        <NavBar onCategoryChange={this.handleCategoryChange} category={this.state.category} onSearch={this.handleSearch} />
        <News pageSize={5} country="us" category={this.state.category} searchQuery={this.state.searchQuery} />
      </div>
    )
  }
}
