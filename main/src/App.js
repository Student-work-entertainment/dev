import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { useAuth } from "./Hooks/auth.hooks";
import { AuthContext } from "./Context/AuthContext";
import { useRoutes } from "./routes";
import { Loader } from "./components/Loader";

function App() {
  const { token, login, logout, userId, userFN, userLN, ready } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);

  if (!ready) {
    return <Loader></Loader>;
  }

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
