import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Pages/Home";
import HomeAuth from "./Pages/HomeAuth";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/" exact>
          <HomeAuth />
        </Route>
        <Redirect to="/"></Redirect>
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/" exact>
        <Home></Home>
      </Route>
      <Route path="/login" exact>
        <Login></Login>
      </Route>
      <Route path="/register" exact>
        <Register></Register>
      </Route>
    </Switch>
  );
};
