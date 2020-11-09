import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Pages/Home";
import Nav from "./Pages/Nav";
import HomeAuth from "./Pages/HomeAuth";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AuthNav from "./Pages/AuthNavigation";
import { ToastContainer, toast } from "react-toastify";

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/" exact>
          <AuthNav></AuthNav>
          <HomeAuth />
        </Route>
        <Redirect to="/"></Redirect>
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/" exact>
        <Nav></Nav>
        <Home></Home>
      </Route>
      <Route path="/login" exact>
        <Nav></Nav>
        <Login></Login>
      </Route>
      <Route path="/register" exact>
        <Nav></Nav>
        <Register></Register>
      </Route>
    </Switch>
  );
};
