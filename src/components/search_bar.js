import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          className="form-control"
          onChange={event => console.log(event.target.value)}
        />
      </div>
    );
  }


}

export default SearchBar;
