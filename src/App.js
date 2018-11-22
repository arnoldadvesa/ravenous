import React, { Component } from "react";
import "./App.css";
import { BusinessList } from "./components/BusinessList/BusinessList.js";
import { SearchBar } from "./components/SearchBar/SearchBar.js";
import * as yelp from "./util/yelp.js";

export const business = {
  imageSrc:
    "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
  name: "MarginOtto Pizzeria",
  address: "1010 Paddington Way",
  city: "Flavortown",
  state: "NY",
  zipCode: "10101",
  category: "Italian",
  rating: 4.5,
  reviewCount: 90
};

export const businesses = [
  business,
  business,
  business,
  business,
  business,
  business
];

class App extends Component {
  // searchYelp = (term, location, sortBy) => {
  //   const terms = {
  //     term: "Search Yelp with Pizza",
  //     location: "Brooklyn",
  //     sortBy: "best_match"
  //   };
  //   return terms;
  // };

  state = {
    businessesArray: []
  };

  saveData = businesses => {
    console.log(businesses);
    this.setState({
      businessesArray: businesses
    });
  };

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={yelp.search} saveBusinesses={this.saveData} />
        <BusinessList businesses={this.state.businessesArray} />
      </div>
    );
  }
}

export default App;
