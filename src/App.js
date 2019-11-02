import React from 'react';
import axios from 'axios';
import SearchBar from './component/SearchBar';

class App extends React.Component {
  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization:
          'Client-ID 6cddb0749cf26a1ff4bffaab6d041a8ac49ff7cb90ac87ad96b9e957531c89f7'
      }
    });
  }
  render() {
    return (
      <div>
        <SearchBar userSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
