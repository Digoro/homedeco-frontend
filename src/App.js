import React from "react";
import { Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";

const App = () => {
  return (
    <>
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
    </>
  );
};

export default App;

