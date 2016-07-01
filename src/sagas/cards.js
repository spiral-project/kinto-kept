import { put } from "redux-saga/effects";

import { cardCreated } from "../actions/cards";


export function* createCard(getState, action) {
  const {title, text} = action;
  const card = {id: "1234", title, text};
  yield put(cardCreated(card));
}
