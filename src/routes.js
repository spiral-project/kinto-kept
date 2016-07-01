import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./components/App";
import HomePage from "./containers/HomePage";
import CardForm from "./containers/CardForm";

import { cardsLoad, cardLoad } from "./actions/cards";


function onEnterHomePage(store) {
  return ({params}) => {
    const {id} = params;
    const state = store.getState();
    // XXX: Find a better way to load only the first time.
    if (state.cards.items.length === 0) {
      store.dispatch(cardsLoad());
    }
  };
}


function onEnterEdit(store) {
  return ({params}) => {
    const {id} = params;
    store.dispatch(cardLoad(id));
  };
}


export default function getRoutes(store) {
  return (
    <Route path="/" component={App}>
      <IndexRoute components={{content: HomePage}}
                  onEnter={onEnterHomePage(store)} />
      <Route path="/create" components={{content: CardForm}} />
      <Route path="/edit/:id" components={{content: CardForm}}
             onEnter={onEnterEdit(store)} />
      <Route path="*" components={{content: _ => <h1>Page not found.</h1>}}/>
    </Route>
  );
}
