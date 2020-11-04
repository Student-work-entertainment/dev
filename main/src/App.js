import "./App.css";
import { BrowserRouter as Router, Route,Switch,Redirect } from "react-router-dom";
import Home from "./Pages/Home";
import Nav from "./Pages/Nav";
import Register from "./Pages/Register";
import Login from "./Pages/Login";

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
