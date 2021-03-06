/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useHistory } from "react-router-dom";
import jwt from "jwt-decode";

const Header = () => {
  const history = useHistory();
  const user = jwt(JSON.parse(localStorage.getItem("cool-token")));
  

  const logout = () => {
    localStorage.removeItem("cool-token");
    history.push("/login");
  };
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
                  {user.user.username}
                </a>
                <div
                  className="dropdown-menu"
                  style={{ right: 0, left: "auto" }}
                  aria-labelledby="navbarDropdown"
                >
                  <button
                    onClick={logout}
                    className="dropdown-item"
                    to="/logout"
                    style={{ cursor: "pointer" }}
                  >
                    <i className="fas fa-sign-out-alt mr-2"></i> Đăng xuất
                  </button>
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
