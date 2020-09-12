import React, { Component } from 'react';

const initialState = {
  searchField: ''
}

class WikiForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: ''
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  onKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.submitSearch();
    }
  }

  submitSearch = () => {
    this.props.handleSubmit(this.state.searchField);
    this.setState(initialState);
  }

  render() {
    return (
      <form>
        <label htmlFor="search">Search Wikipedia!</label>
        <input
          type="text"
          name="searchField"
          id="search"
          value={this.state.searchField}
          onKeyDown={this.onKeyDown}
          onChange={this.handleChange} />
        <input type="button" value="Search" onClick={this.submitSearch} />
      </form>
    )
  }
}

export default WikiForm;