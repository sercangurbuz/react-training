import reactdom from "react-dom";
import React from "react";
import GitHub from "./components/repos";
import { Shell } from "./components/shell";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AnotherPage from "./components/anotherpage";

const App = () => (
  <Router>
    <Shell>
      <Switch>
        <Route exact path="/" component={GitHub} />
        <Route path="/anotherpage" component={AnotherPage} />
      </Switch>
    </Shell>
  </Router>
);

reactdom.render(<App />, document.getElementById("root"));
