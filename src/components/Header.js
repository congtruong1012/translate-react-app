/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useHistory, Link } from "react-router-dom";


const Header = () => {
  const jwt = JSON.parse(localStorage.getItem("login"));
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#!">
            <img
              style={{ height: 40 }}
              src="https://newsfeed-cdn.hahalolo.com/shared/assets/img/logo/logo-hahalolo.png"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#!"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{ fontSize: "1rem" }}
                >
                  {jwt.username}
                </a>
                <div
                  className="dropdown-menu"
                  style={{ right: 0, left: "auto" }}
                  aria-labelledby="navbarDropdown"
                >
                  <Link className="dropdown-item" to="/logout" style={{cursor : "pointer"}}>
                    <i className="fas fa-sign-out-alt mr-2"></i> Đăng xuất
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
