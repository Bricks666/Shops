import { Component } from "react";
import { Redirect, Route, Switch } from "react-router";
import { LoginConnect } from "../Login/LoginConnect";
import { AccountConnect } from "../Account/AccountConnect";
import { RegistrationConnect } from "../Registration/RegistrationConnect";
import { ContentRedirect } from "../ContentRedirect/ContentRedirect";
import { Content } from "../Content/Content";

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
          <Redirect from="/" to="/login" />
        )}
        <ContentRedirect role={this.props.role} />
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
