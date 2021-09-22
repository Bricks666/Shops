import { Component } from "react";
import { Redirect, Route, Switch } from "react-router";
import { LoginConnect } from "../Login/LoginConnect";
import { AccountConnect } from "../Account/AccountConnect";
import { ShopsConnect } from "../ShopsList/ShopsConnect";
import { RegistrationConnect } from "../Registration/RegistrationConnect";

export class Main extends Component {
  componentDidMount() {
    this.props.initialApp();
  }

  render() {
    return (
      <main>
        {this.props.isReg ? <Redirect from="/registration" to="/login" /> : ""}
        {this.props.isLogin ? (
          <Redirect from="/login" to="/" />
        ) : (
          <Redirect to="/login" />
        )}
        <Switch>
          <Route path="/login">
            <LoginConnect />
          </Route>
          <Route path="/registration">
            <RegistrationConnect />
          </Route>
          <Route exact path="/">
            <AccountConnect />
            <ShopsConnect />
          </Route>
        </Switch>
      </main>
    );
  }
}
