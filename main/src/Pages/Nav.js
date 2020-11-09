import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function Nav() {
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
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/login" className="nav-item nav-link active" href="#">
              Login <span className="sr-only">(current)</span>
            </Link>
            <Link to="/register" className="nav-item nav-link" href="#">
              Register
            </Link>
          </div>
        </div>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup"></div>
      </nav>
    </div>
  );
}
export default Nav;
