import React from "react";
import "./App.css";
import HomePage from "./pages/homePage/homePage.component";
import { Switch, Route } from "react-router-dom";

const HatsPage = () => {
  return (
    <div>
      <h1>Hats page</h1>
    </div>
  );
};

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/hats" component={HatsPage}></Route>
    </Switch>
  );
}

export default App;
