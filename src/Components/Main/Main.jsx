import { Component } from "react";
import { Route, Switch } from "react-router";
import { LoginConnect } from "../Login/LoginConnect";
import { AccountConnect } from "../Account/AccountConnect";
import { RegistrationConnect } from "../Registration/RegistrationConnect";
import { Content } from "../Content/Content";
import { LoginRedirectConnect } from "./LoginRedirect/LoginRedirectConnect";

export class Main extends Component {
  componentDidMount() {
    this.props.initialApp();
  }

  render() {
    return (
      <main>
        <LoginRedirectConnect />
        <Switch>
          <Route path="/login">
            <LoginConnect />
          </Route>
          <Route path="/registration">
            <RegistrationConnect />
          </Route>
          <Route path="/">
            <AccountConnect />
            <Content />
          </Route>
        </Switch>
      </main>
    );
  }
}
