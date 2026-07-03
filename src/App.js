

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
      country: 'in', // Default to India
      theme: 'dark' // Default to Dark Theme
    };
  }

  toggleCountry = () => {
    this.setState({ country: this.state.country === 'in' ? 'us' : 'in' });
  }

  toggleTheme = () => {
    this.setState({ theme: this.state.theme === 'dark' ? 'light' : 'dark' });
  }

  handleCategoryChange = (category) => {
    this.setState({ category, searchQuery: '' });
  }

  handleSearch = (query) => {
    this.setState({ searchQuery: query });
  }
  
  render() {
    return (
      <div className={`app-container ${this.state.theme === 'light' ? 'light-theme' : ''}`}>
        <div className="magic-bg-layer">
          <MagicRings
            color={this.state.theme === 'dark' ? '#06b6d4' : '#3182ce'}
            colorTwo={this.state.theme === 'dark' ? '#10b981' : '#319795'}
            ringCount={8}
            speed={0.5}
            opacity={this.state.theme === 'dark' ? 0.3 : 0.15}
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
          theme={this.state.theme}
          toggleTheme={this.toggleTheme}
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
