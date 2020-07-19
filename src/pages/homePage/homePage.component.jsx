import React, { Component } from "react";

import Directory from "../../components/directory/directory.component";
import { HomePageContainer } from "./home-page.styles";

class HomePage extends Component {
  render() {
    return (
      <HomePageContainer>
        <Directory></Directory>
      </HomePageContainer>
    );
  }
}

export default HomePage;
