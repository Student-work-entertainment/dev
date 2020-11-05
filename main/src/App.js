import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Pages/Home";
import Nav from "./Pages/Nav";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { useAuth } from "./Hooks/auth.hooks";
import { AuthContext } from "./Context/AuthContext";
import { useRoutes } from "./routes";

function App() {
  const { token, login, logout, userId } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);
  return (
    <AuthContext.Provider
      value={{ token, login, logout, userId, isAuthenticated }}
    >
      <Router>
        <div>
          <Nav></Nav>
          {routes}
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
