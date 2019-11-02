import React from 'react';
import SearchBar from './component/SearchBar';

class App extends React.Component {
  onSearchSubmit(term) {
    console.log(term);
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
