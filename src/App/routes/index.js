import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthenticatedRoute from "../components/AuthenticatedRoute";
import UnauthenticatedRoute from "../components/UnauthenticatedRoute";
import Loadable from "react-loadable";

import NotFound from "./NotFound";

const Homepage = Loadable({
  loader: () => import(/* webpackChunkName: "homepage" */ "./Home/container/HomeContainer.js"),
  loading: () => null,
  modules: ["home"]
});

const Dashboard = Loadable({
  loader: () => import(/* webpackChunkName: "dashboard" */ "./Dashboard/container/DashboardContainer.js"),
  loading: () => null,
  modules: ["dashboard"]
});

const Profile = Loadable({
  loader: () => import(/* webpackChunkName: "dashboard" */ "./Profile/container/ProfileContainer.js"),
  loading: () => null,
  modules: ["profile"]
});

const Login = Loadable({
  loader: () => import(/* webpackChunkName: "login" */ "./Login/container/LoginContainer.js"),
  loading: () => null,
  modules: ["login"]
});

const Register = Loadable({
  loader: () => import(/* webpackChunkName: "register" */ "./Register/container/RegisterContainer.js"),
  loading: () => null,
  modules: ["Register"]
});

const Logout = Loadable({
  loader: () => import(/* webpackChunkName: "logout" */ "./Logout"),
  loading: () => null,
  modules: ["logout"]
});


export default () => (
  <Switch>
    <Route exact path="/" component={Homepage} />

    <AuthenticatedRoute exact path="/dashboard" component={Dashboard} />
    <AuthenticatedRoute exact path="/profile" component={Profile} />
    <UnauthenticatedRoute exact path="/login" component={Login} />
    <UnauthenticatedRoute exact path="/register" component={Register} />
    <AuthenticatedRoute exact path="/logout" component={Logout} />

    <Route component={NotFound} />
  </Switch>
);
