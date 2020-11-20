import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { useAuth } from "./Hooks/auth.hooks";
import { AuthContext } from "./Context/AuthContext";
import { useRoutes } from "./routes";
import { Loader } from "./components/Loader";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Footer } from "./components/Footer";
import AuthNav from "./User/UserNav";
import Nav from "./Guests/Nav";

function App() {
  const { token, login, logout, userId, userFN, userLN, ready } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);

  if (!ready) {
    return <Loader></Loader>;
  }

  return (
    <>
      <AuthContext.Provider
        value={{
          token,
          login,
          logout,
          userId,
          isAuthenticated,
          userFN,
          userLN,
        }}
      >
        <Router>
          {isAuthenticated && <AuthNav></AuthNav>}
          {!isAuthenticated && <Nav></Nav>}
          <div>{routes}</div>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Footer></Footer>
        </Router>
      </AuthContext.Provider>
    </>
  );
}

export default App;
