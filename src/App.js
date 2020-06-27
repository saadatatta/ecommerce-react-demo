import React from "react";
import "./App.css";
import HomePage from "./pages/homePage/homePage.component";
import { Switch, Route } from "react-router-dom";
import Shop from "./pages/shop/shop.component";
import Header from "./pages/header/header.component";

function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/shop" component={Shop}></Route>
      </Switch>
    </div>
  );
}

export default App;
