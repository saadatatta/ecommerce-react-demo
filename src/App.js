import React from "react";
import "./App.css";
import HomePage from "./pages/homePage/homePage.component";
import { Switch, Route } from "react-router-dom";
import Shop from "./pages/shop/shop.component";
import Header from "./pages/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {
  auth,
  createUserProfileObject,
} from "./components/firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userQueryRef = await createUserProfileObject(userAuth);
        userQueryRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: userQueryRef.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        this.setState({
          currentUser: null,
        });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}></Header>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/shop" component={Shop}></Route>
          <Route exact path="/signin" component={SignInAndSignUpPage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
