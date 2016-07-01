import {
  CARD_CREATE,
  CARD_CREATED,
} from "../constants";


export function cardCreate(title, text) {
  return {type: CARD_CREATE, title, text};
}

export function cardCreated(card) {
  return {type: CARD_CREATED, card};
}
