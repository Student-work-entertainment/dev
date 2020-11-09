import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./Guests/Home";
import Nav from "./Guests/Nav";
import Login from "./Guests/Login";
import Register from "./Guests/Register";

import UserHome from "./User/UserHome";
import AuthNav from "./User/UserNav";
import UserProfile from "./User/UserProfile";
import UserResume from "./User/UserResume";

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/" exact>
          <AuthNav></AuthNav>
          <UserHome />
        </Route>
        <Route path="/profile">
          <AuthNav></AuthNav>
          <UserProfile />
        </Route>
        <Route path="/resume" exact>
          <AuthNav></AuthNav>
          <UserResume />
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
      <Redirect to="/"></Redirect>
    </Switch>
  );
};
