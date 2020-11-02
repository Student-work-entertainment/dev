import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home/Home";
import Nav from "./Navigation/Nav";
import Register from "./Register/Register";
import Login from "./Login/Login";

function App() {
  return (
    <Router>
      <div>
        <Nav></Nav>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/register">
          <Register></Register>
        </Route>
        <Route exact path="/login">
          <Login></Login>
        </Route>
      </div>
    </Router>
  );
}

export default App;
