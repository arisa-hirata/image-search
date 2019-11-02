import React from 'react';
import './SeachBar.css';

class SearchBar extends React.Component {
  state = { val: '' };

  onInputChange = event => {
    this.setState({
      val: event.target.value
    });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.userSubmit(this.state.val);
  };

  render() {
    return (
      <div className="searchbar_conaitner">
        <h2>Pokedex</h2>
        <p>Search Pokemon!</p>
        <form onSubmit={this.onFormSubmit}>
          <input
            className="inputStyle"
            type="text"
            value={this.state.val}
            onChange={this.onInputChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
