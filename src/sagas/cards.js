import { push as updatePath } from "react-router-redux";
import { put } from "redux-saga/effects";

import { cardsLoaded, cardLoaded, cardCreated, cardEdited, cardDeleted } from "../actions/cards";



export function* loadCards(action) {
  // const {data} = yield kinto.list();
  const cards = [
    {"id": "1", "type": "text", "title": "This is a Text entry", "text": "Hello World."},
    {"id": "2", "type": "text", "title": "Lorem ipsum dolor sit amet",
     "text": "**Consectetur adipisicing elit**, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {"id": "3", "type": "text", "title": "Ut enim ad minim veniam",
     "text": "Quis nostrud *exercitation ullamco* laboris nisi ut aliquip ex ea commodo consequat."}
  ];
  yield put(cardsLoaded(cards));
}


export function* loadCard(action) {
  const {id} = action;
  // const {data} = yield kinto.get(id));
  const card = {id, title: "foo", text: "bar"};
  yield put(cardLoaded(card));
}


export function* createCard(action) {
  const {title, text} = action;
  const card = {id: "1234", title, text};
  yield put(cardCreated(card));
  yield put(updatePath("/"));
}


export function* editCard(action) {
  const {id, title, text} = action;
  const card = {id, title: title + "+", text: text + "+"};
  yield put(cardEdited(card));
  yield put(updatePath("/"));
}


export function* deleteCard(action) {
  const {id} = action;
  // const card = kinto.delete(id).data;
  const card = {id};
  yield put(cardDeleted(card));
}
