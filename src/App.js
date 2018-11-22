import React, { Component } from "react";
import "./App.css";
import { BusinessList } from "./components/BusinessList/BusinessList.js";
import { SearchBar } from "./components/SearchBar/SearchBar.js";
import * as Yelp from "./util/yelp.js";

// export const business = {
//   imageSrc:
//     "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
//   name: "MarginOtto Pizzeria",
//   address: "1010 Paddington Way",
//   city: "Flavortown",
//   state: "NY",
//   zipCode: "10101",
//   category: "Italian",
//   rating: 4.5,
//   reviewCount: 90
// };

// export const businesses = [
//   business,
//   business,
//   business,
//   business,
//   business,
//   business
// ];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    };
  }

  searchYelp = (term, location, sortBy) => {
    Yelp.search(term, location, sortBy).then(businessesArr => {
      this.setState({
        businesses: businessesArr
      });
      // console.log(this.state.businesses);
    });
  };

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default App;
