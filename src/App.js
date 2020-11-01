import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home/Home";
import Nav from "./Navigation/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav></Nav>
        <Route exact path="/">
          <Home></Home>
        </Route>
      </div>
    </Router>
  );
}

export default App;
