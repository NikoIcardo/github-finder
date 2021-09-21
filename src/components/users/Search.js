import React, { Component } from 'react';

class Search extends Component {
  state = {
    text: '',
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.text);
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <form class="form" onSubmit={this.onSubmit}>
          <input
            type="text"
            name="text"
            value={this.state.text}
            placeholder="Search Users..."
            onChange={this.onChange}
          ></input>
          <input
            type="submit"
            name="submit"
            class="btn btn-dark btn-block"
          ></input>
        </form>
      </div>
    );
  }
}

export default Search;
