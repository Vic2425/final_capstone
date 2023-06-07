import React from "react";
import { Routes, Route, Navigate } from "react-router";
import cookie from "cookie";
import Dashboard from "./containers/Dashboard";
import SignIn from "./components/SignIn";

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies["loggedIn"] ? true : false;
};

const ProtectedRoute = (props) => {
  const { component: Component, ...rest } = props;
  return checkAuth() === true ? <Component {...rest} /> : <Navigate to="/" />;
};

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route
        path="/dashboard"
        element={<ProtectedRoute component={Dashboard} />}
      />
    </Routes>
  );
};

export default Router;
