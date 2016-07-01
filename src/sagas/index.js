import { takeEvery } from "redux-saga";
import * as c from "../constants";
import * as cardsSagas from "./cards";
// import { fork } from "redux-saga/effects";


export default function* rootSaga() {
  yield [
    takeEvery(c.CARD_CREATE, cardsSagas.createCard),
    takeEvery(c.CARD_EDIT, cardsSagas.editCard),
    takeEvery(c.CARD_DELETE, cardsSagas.deleteCard),
  ];
}
