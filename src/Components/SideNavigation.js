import React, { Component } from "react";
import { Link } from "react-router-dom";
import cctv from "../images/cctv-icon.png";
import menu from "../images/Menu.png";
import setting from "../images/settings.png";
import user from "../images/user.png";
import "./SideNavigation.css";

class SideNavigation extends Component {
  state = {
    isOpen: false
  };

  toggleOpen = () =>
    this.setState(
      {
        isOpen: true
      },
      document.addEventListener("click", this.handleCloseOutside)
    );

  handleCloseOutside = () => {
    this.setState(
      {
        isOpen: false
      },
      document.removeEventListener("click", this.handleCloseOutside)
    );
  };

  render() {
    const dropdownMenuShow = `dropdown-menu custom-dropdown-menu${
      this.state.isOpen ? " show" : ""
      }`;
    return (
      <div>
        <nav id="sidebar">
          <div className="sidebar-header">
            <img src={menu} alt="" />
          </div>

          <ul className="list-unstyled sidebar-ul">
            <li className="dropdown dropright">
              <a
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                onClick={this.toggleOpen}
              >
                <img src={cctv} alt="" className="clickable" />
              </a>
              <div
                className={dropdownMenuShow}
                aria-labelledby="navbarDropdown"
              >
                <a
                  className="dropdown-item dropdown-item-title disable-title"
                  href="#"
                >
                  All Cameras
                  <span className="badge badge-pill badge-secondary m-2">
                    8
                  </span>
                </a>
                <Link to="/all/camera" className="dropdown-item">
                  Show All Cameras
                </Link>
                <Link to="/add/camera" className="dropdown-item">
                  Add New Camera
                </Link>
                <Link to="/add/image" className="dropdown-item">
                  Add Image
                </Link>
              </div>
            </li>
            <li>
              <a href="#">
                <img src={setting} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={user} alt="" />
              </a>
            </li>
          </ul>

        </nav>

      </div>
    );
  }
}

export default SideNavigation;
