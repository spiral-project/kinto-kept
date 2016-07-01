import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./components/App";
import HomePage from "./containers/HomePage";
import CardForm from "./containers/CardForm";


export default function getRoutes(store) {
  return (
    <Route path="/" component={App}>
      <IndexRoute components={{content: HomePage}} />
      <Route path="/create" components={{content: CardForm}}/>
      <Route path="*" components={{content: _ => <h1>Page not found.</h1>}}/>
    </Route>
  );
}
