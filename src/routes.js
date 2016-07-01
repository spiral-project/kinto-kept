import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./containers/App";
import HomePage from "./containers/HomePage";


export default function getRoutes(store) {
  return (
    <Route path="/" component={App}>
      <IndexRoute components={{content: HomePage}} />
      <Route path="*" components={{content: _ => <h1>Page not found.</h1>}}/>
    </Route>
  );
}
