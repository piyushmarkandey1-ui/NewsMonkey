

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import MagicRings from './components/MagicRings';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'general',
      searchQuery: '',
      country: 'in' // Default to India
    };
  }

  toggleCountry = () => {
    this.setState({ country: this.state.country === 'in' ? 'us' : 'in' });
  }

  handleCategoryChange = (category) => {
    this.setState({ category, searchQuery: '' });
  }

  handleSearch = (query) => {
    this.setState({ searchQuery: query });
  }
  
  render() {
    return (
      <div className="app-container">
        <div className="magic-bg-layer">
          <MagicRings
            color="#06b6d4"
            colorTwo="#10b981"
            ringCount={8}
            speed={0.5}
            opacity={0.3}
            blur={4}
            hoverScale={1.05}
          />
        </div>
        <NavBar 
          onCategoryChange={this.handleCategoryChange} 
          category={this.state.category} 
          onSearch={this.handleSearch} 
          country={this.state.country} 
          toggleCountry={this.toggleCountry} 
        />
        <News 
          pageSize={12} 
          country={this.state.country} 
          category={this.state.category} 
          searchQuery={this.state.searchQuery} 
        />
      </div>
    )
  }
}
