import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" class="navbar-brand" href="#">
        Home
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <Link to="/login" class="nav-item nav-link active" href="#">
            Login <span class="sr-only">(current)</span>
          </Link>
          <Link to="/register" class="nav-item nav-link" href="#">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
