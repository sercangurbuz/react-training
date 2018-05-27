import React, { Component } from "react";
import axios from "axios";
import Repos from "./Repos";
import SearchBar from "./SearchBar";

class GitHub extends Component {
  constructor(props, context) {
    super(props, context);
    this.searchRepos = this.searchRepos.bind(this);
    this.state = { repos: [], orjrepos: [] };
  }

  async componentDidMount() {
    const result = await axios.get(
      "https://api.github.com/users/sercangurbuz/repos"
    );
    this.setState({ orjrepos: result.data, repos: result.data });
  }

  searchRepos(keyword) {
    if (!keyword) {
      this.setState({ repos: this.state.orjrepos });
    }
    const filtered = this.state.orjrepos.filter(repo =>
      repo.name.includes(keyword)
    );
    this.setState({ repos: filtered });
  }

  render() {
    return (
      <div>
        <SearchBar searchRepos={this.searchRepos} />
        <Repos repos={this.state.repos} />
      </div>
    );
  }
}

export default GitHub;
