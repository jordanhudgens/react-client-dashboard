import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import About from "../pages/About";
import Home, { Banner } from "../pages/Home";

const App = () => {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>

        <Link to="/about">About</Link>
      </div>

      <Banner />

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/about" exact>
          <About />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
