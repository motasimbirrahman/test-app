import React, { Component } from "react";
import gaze_logo from "../images/alavya-logo.png";

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="container">
            <div className="row">
              <div className="col-auto ml-auto mt-5">
                <img
                  src={gaze_logo}
                  className="mt-1 img-fluid logo"
                  width="220px"
                  alt=""
                />
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
