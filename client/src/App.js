import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./screens/Home/Home";
import About from "./screens/About/About";
import AccountInfo from "./screens/AccountInfo/AccountInfo";
import EditAccount from "./screens/EditAccount/EditAccount";
import DeleteAccount from "./screens/DeleteAccount/DeleteAccount";
import SignIn from "./screens/SignIn/SignIn";
import SignUp from "./screens/SignUp/SignUp";
import Logger from "./screens/Logger/Logger";
import Progress from "./screens/Progress/Progress";

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/account-signup" component={SignUp} />
        <Route exact path="/account-signin" component={SignIn} />
        <Route exact path="/account-info" component={AccountInfo} />
        <Route exact path="/edit-account" component={EditAccount} />
        <Route exact path="/delete-account" component={DeleteAccount} />
        <Route exact path="/logger" component={Logger} />
        <Route exact path="/progress" component={Progress} />
      </Switch>
    </div>
  );
};

export default App;
