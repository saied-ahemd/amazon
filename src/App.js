import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact>
            <Header />
            <Home />
          </Route>
          <Route path="/checkout">
            <Header />
            <h1>checkout</h1>
          </Route>
          <Route path="/login">
            <h1>login</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
