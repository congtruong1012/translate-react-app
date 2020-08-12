import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Logout from "./pages/Logout";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={() => <Login />} />
        <Route path="/register" component={() => <Register />} />
        <Route path="/logout" component={() => <Logout />} />
        <Route path="/" component={() => <Home  />} />
      </Switch>
    </Router>
  );
};

export default App;
