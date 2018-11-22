import React from "react";
import "./BusinessList.css";
import { Business } from "../Business/Business.js";

export class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        {this.props.businesses.map((businessObj, index) => (
          <Business key={index} business={businessObj} />
        ))}
      </div>
    );
  }
}
