import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { value: "" };
  }

  onChange(e) {
    this.props.searchRepos(e.target.value);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.value}
          onChange={e => this.onChange(e)}
        />
      </div>
    );
  }
}

export default SearchBar;
