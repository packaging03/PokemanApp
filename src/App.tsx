import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Redirect } from "react-router";
import Home from "./pages/Home";
import MyPokemon from "./pages/MyPokemon";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Router>
      <ToastContainer />
      <Switch>
        <Route exact path="/">
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
