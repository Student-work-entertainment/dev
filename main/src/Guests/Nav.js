import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-warning shadow-lg">
        <Link to="/" className="navbar-brand" href="#">
          Домой
        </Link>
        <div
          className="collapse navbar-collapse container col-sm-2"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <Link to="/login" className="nav-item nav-link" href="#">
              Вход <span className="sr-only">(current)</span>
            </Link>
            <Link to="/register" className="nav-item nav-link" href="#">
              Регестрация
            </Link>
          </div>
        </div>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup"></div>
      </nav>
    </div>
  );
}
export default Nav;
