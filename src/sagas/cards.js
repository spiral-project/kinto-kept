import { push as updatePath } from "react-router-redux";
import { put } from "redux-saga/effects";
import Kinto from "kinto";

import { cardsLoaded, cardLoaded, cardCreated, cardEdited, cardDeleted } from "../actions/cards";


let client;

function getClient() {
  if (!client) {
    const kinto = new Kinto();
    client = kinto.collection("cards");
  }
  return client;
}


export function* loadCards(action) {
  const client = getClient();
  const {data:cards} = yield client.list();
  yield put(cardsLoaded(cards));
}


export function* loadCard(action) {
  const {id} = action;
  const client = getClient();
  const {data:card} = yield client.get(id);
  // try/catch: 404
  yield put(cardLoaded(card));
}


export function* createCard(action) {
  const {title, text} = action;
  const client = getClient();
  const {data:card} = yield client.create({title, text});
  yield put(cardCreated(card));
  yield put(updatePath("/"));
}


export function* editCard(action) {
  const {id, title, text} = action;
  const client = getClient();
  const {data:card} = yield client.update({id, title, text});
  yield put(cardEdited(card));
  yield put(updatePath("/"));
}


export function* deleteCard(action) {
  const {id} = action;
  const client = getClient();
  const {data:card} = yield client.delete(id);
  yield put(cardDeleted(card));
}
