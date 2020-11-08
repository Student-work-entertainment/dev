import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { useAuth } from "./Hooks/auth.hooks";
import { AuthContext } from "./Context/AuthContext";
import { useRoutes } from "./routes";

function App() {
  const { token, login, logout, userId, userFN, userLN } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);
  return (
    <AuthContext.Provider
      value={{ token, login, logout, userId, isAuthenticated, userFN, userLN }}
    >
      <Router>
        <div>{routes}</div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
