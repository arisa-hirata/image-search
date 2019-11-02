import React from 'react';
import axios from 'axios';
import SearchBar from './component/SearchBar';
import ImageList from './component/imageList';

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization:
          'Client-ID 6cddb0749cf26a1ff4bffaab6d041a8ac49ff7cb90ac87ad96b9e957531c89f7'
      }
    });
    this.setState({
      images: response.data.results
    });
  };
  render() {
    return (
      <div>
        <SearchBar userSubmit={this.onSearchSubmit} />
        <span>Found: {this.state.images.length}</span>
        <ImageList foundImages={this.state.images} />
      </div>
    );
  }
}

export default App;
