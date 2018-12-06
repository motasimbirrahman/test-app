import React, { Component } from "react";
import "./AllCamera.css";

class ShowAllCamera extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className=" offset-2">
        <nav>
          <form className="form-inline">
            <input
              className="form-control col-lg-9 search-bar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-success m-2 custom-search-button"
              type="submit"
            >
              Search
            </button>
          </form>
        </nav>
      </div>
    );
  }
}

export default ShowAllCamera;
