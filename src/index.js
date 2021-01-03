import React from "react";
import { render } from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import injectTapEventPlugin from "react-tap-event-plugin";
import App from "./components/App";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Recover from "./components/Recover";
import New from "./components/New";
import Poll from "./components/Poll";
import Update from "./components/Update";
import NotFound from "./components/NotFound";
import "./index.css";

injectTapEventPlugin();

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/polls/dashboard" component={Dashboard} />
      <Route path="/polls/signup" component={Signup} />
      <Route path="/polls/login" component={Login} />
      <Route path="/polls/recover" component={Recover} />
      <Route path="/polls/new" component={New} />
      <Route path="/polls/update/:pollId" component={Update} />
      <Route path="/polls/poll/:pollId" component={Poll} />
      <Route path="/polls/*" component={NotFound} />
    </Route>
  </Router>,
  document.getElementById("root")
);
