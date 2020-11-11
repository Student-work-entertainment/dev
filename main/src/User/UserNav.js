import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function AuthNav() {
  const auth = useContext(AuthContext);
  const history = useHistory();
  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
    history.push("/");
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/" class="navbar-brand" href="#">
          Home
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link class="nav-link" to="/profile">
                Профиль <span class="sr-only"></span>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/resume">
                Ваше резюме
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/detail">
                Вакансии
              </Link>
            </li>
          </ul>
          <div class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button class="btn btn-outline-warning my-2 my-sm-0" type="submit">
              Search
            </button>
          </div>
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link
                to="/"
                className="nav-link ml-5"
                href="#"
                onClick={logoutHandler}
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default AuthNav;
