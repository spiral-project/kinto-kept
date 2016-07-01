import { takeEvery } from "redux-saga";
import * as c from "../constants";
import * as cardsSagas from "./cards";
// import { fork } from "redux-saga/effects";


export default function* rootSaga() {
  yield [
    takeEvery(c.CARDS_LOAD, cardsSagas.loadCards),
    takeEvery(c.CARD_LOAD, cardsSagas.loadCard),
    takeEvery(c.CARD_CREATE, cardsSagas.createCard),
    takeEvery(c.CARD_EDIT, cardsSagas.editCard),
    takeEvery(c.CARD_DELETE, cardsSagas.deleteCard),
  ];
}
