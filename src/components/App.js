import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Header } from "./Header.js";
import { Homepage } from "./Homepage.js"
import { About } from "./About.js";
import { ItemDetails } from "./ItemDetails";

const App = (props) => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/items/:itemId">
          <ItemDetails />
        </Route>
      </Switch>
    </Router>);
};

export default App;
