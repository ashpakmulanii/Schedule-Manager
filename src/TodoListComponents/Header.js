import React from "react";
import PropTypes from "prop-types";

export default function Header(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {props.admin}
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      History
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Switch User
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                  <a className="dropdown-item" onClick={()=>props.setCheck(false)}>
                      {" "}
                      Log Out{" "}
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            {props.visibility ? (
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            ) : (
              <p>Please turn on Searchbar visibility</p>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

Header.defaultProps = {
  title: "To Do List",
  admin: "Ashpak Mulani",
  visibility: true,
};

Header.propTypes = {
  title: PropTypes.string,
  visibility: PropTypes.bool.isRequired,
};
