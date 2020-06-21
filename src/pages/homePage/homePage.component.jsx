import React, { Component } from "react";

import Directory from "../../components/directory/directory.component";
import "./homePage.scss";

class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <h1>Welcome to my Homepage</h1>
        <Directory></Directory>
      </div>
    );
  }
}

export default HomePage;
