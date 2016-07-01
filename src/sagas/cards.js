import { put } from "redux-saga/effects";

import { cardCreated, cardEdited, cardDeleted } from "../actions/cards";


export function* createCard(action) {
  const {title, text} = action;
  const card = {id: "1234", title, text};
  yield put(cardCreated(card));
}


export function* editCard(action) {
  const {id, title, text} = action;
  const card = {id, title: title + "+", text: text + "+"};
  yield put(cardEdited(card));
}


export function* deleteCard(action) {
  const {id} = action;
  // const card = kinto.delete(id).data;
  const card = {id};
  yield put(cardDeleted(card));
}
