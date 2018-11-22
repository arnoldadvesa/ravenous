import React from "react";
import "./SearchBar.css";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count"
};

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      location: "",
      sortBy: "best_match",
      businesses: []
    };
  }

  renderSortByOptions = () => {
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return (
        <li
          key={sortByOption}
          className={this.getSortByClass(sortByOptionValue)}
          onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
        >
          {sortByOption}
        </li>
      );
    });
  };

  getSortByClass = sortByOption => {
    if (this.state.sortBy === sortByOption) {
      return "active";
    } else {
      return "";
    }
  };

  handleSortByChange = sortByOption => {
    this.setState({ sortBy: sortByOption });
    // console.log(this.state);
  };

  handleTermChange = e => {
    this.setState({ term: e.target.value });
    // console.log(this.state.term);
  };

  handleLocationChange = e => {
    this.setState({ location: e.target.value });
    // console.log(this.state.location);
  };

  handleSearch = e => {
    e.preventDefault();
    this.props.searchYelp(
      this.state.term,
      this.state.location,
      this.state.sortBy
    );
  };

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>{this.renderSortByOptions()}</ul>
        </div>
        <div className="SearchBar-fields">
          <input
            placeholder="Search Businesses"
            onChange={event => this.handleTermChange(event)}
          />
          <input
            placeholder="Where?"
            onChange={event => this.handleLocationChange(event)}
          />
        </div>
        <div className="SearchBar-submit" onClick={this.handleSearch}>
          <a>Let's Go</a>
        </div>
      </div>
    );
  }
}
