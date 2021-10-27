import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import Home from "./pages/Home";
import MyPokemon from "./pages/MyPokemon";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>

        <Route exact path="/home">
          <Home />
        </Route>

        <Route exact path="/mypokemon">
          <MyPokemon />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
