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
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg p-3 mb-5">
        <Link to="/" class="navbar-brand" href="#">
          Домой
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
                Создать вакансию
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/vacancy">
                Вакансии
              </Link>
            </li>
          </ul>
          <ul class="navbar-nav mr-5">
            <li class="nav-item active">
              <Link
                to="/"
                className="ml-3 btn-outline-warning nav-link btn btn-block btn-warning text-dark"
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
