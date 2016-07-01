import {
  CARD_CREATE,
  CARD_CREATED,
} from "../constants";

export function cardCreate(card) {
  return {type: CARD_CREATE, card};
}

export function cardCreated(card) {
  return {type: CARD_CREATED, card};
}
