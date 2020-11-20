import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./Guests/Home";
import Login from "./Guests/Login";
import Register from "./Guests/Register";

import UserHome from "./User/UserHome";

import UserProfile from "./User/UserProfile";
import UserResume from "./User/UserResume";
import DetailPage from "./Guests/DetailPage";
import { Vacancy } from "./User/Vacancy";
import { Response } from "./User/Response";

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/" exact>
          <UserHome />
        </Route>
        <Route path="/detail/:id" exact>
          <DetailPage />
        </Route>
        <Route path="/profile">
          <UserProfile />
        </Route>
        <Route path="/resume" exact>
          <UserResume />
        </Route>
        <Route path="/vacancy" exact>
          <Vacancy></Vacancy>
        </Route>
        <Route path="/response/:id">
          <Response></Response>
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
      <Route path="/detail/:id" exact>
        <DetailPage></DetailPage>
      </Route>
      <Route path="/register" exact>
        <Register></Register>
      </Route>
      <Route path="/response/:id">
        <Login></Login>
      </Route>
      <Redirect to="/"></Redirect>
    </Switch>
  );
};
