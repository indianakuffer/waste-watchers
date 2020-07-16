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
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/account/:id/delete" component={DeleteAccount} />
        <Route exact path="/account/:id/edit" component={EditAccount} />
        <Route exact path="/account/:id" component={AccountInfo} />
        <Route exact path="/log" component={Logger} />
        <Route exact path="/progress" component={Progress} />
      </Switch>
    </div>
  );
};

export default App;
