import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Router, hashHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import getRoutes from "./routes";
import configureStore from "./store";

import "bootstrap/dist/css/bootstrap.css";
import "../css/styles.css";


const store = configureStore({
  cards: {
    items: [
      {"id": 1, "type": "text", "title": "This is a Text entry", "text": "Hello World."},
      {"id": 2, "type": "text", "title": "Lorem ipsum dolor sit amet",
       "text": "**Consectetur adipisicing elit**, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
      {"id": 4, "type": "text", "title": "Ut enim ad minim veniam",
       "text": "Quis nostrud *exercitation ullamco* laboris nisi ut aliquip ex ea commodo consequat."}
    ]
  }
});

syncHistoryWithStore(hashHistory, store);

render((
  <Provider store={store}>
    <Router history={hashHistory}>
      {getRoutes(store)}
    </Router>
  </Provider>
), document.getElementById("app"));
