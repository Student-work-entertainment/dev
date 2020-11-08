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
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/" className="navbar-brand" href="#">
          Home
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup"></div>
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        ></input>
        <button className="btn btn-outline-warning my-2 my-sm-0" type="submit">
          Search
        </button>
        <div className="navbar-nav">
          <Link
            to="/register"
            className="nav-item nav-link"
            href="#"
            onClick={logoutHandler}
          >
            Logout
          </Link>
        </div>
      </nav>
    </div>
  );
}
export default AuthNav;
