import React, { useState, useEffect } from "react";
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
  let [loggedIn, setLoggedIn] = useState(null)

  return (
    <div className="app">
      <Switch>
        <Route exact path="/" render={props => <Home loggedIn={loggedIn} />} />
        <Route exact path="/about" render={props => <About loggedIn={loggedIn} />} />
        <Route exact path="/signup" render={props => <SignUp loggedIn={loggedIn} />} />
        <Route exact path="/signin" render={props => <SignIn loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
        <Route exact path="/account/:id/delete" render={props => <DeleteAccount loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
        <Route exact path="/account/:id/edit" render={props => <EditAccount loggedIn={loggedIn} />} />
        <Route exact path="/account/:id" render={props => <AccountInfo loggedIn={loggedIn} />} />
        <Route exact path="/log" render={props => <Logger loggedIn={loggedIn} />} />
        <Route exact path="/progress" render={props => <Progress loggedIn={loggedIn} />} />
      </Switch>
    </div>
  );
};

export default App;
