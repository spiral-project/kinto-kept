import {
  CARD_CREATE,
  CARD_EDIT,
  CARD_EDITED,
  CARD_DELETE,
  CARD_DELETED,
  CARD_CREATED,
} from "../constants";


export function cardCreate(title, text) {
  return {type: CARD_CREATE, title, text};
}

export function cardCreated(card) {
  return {type: CARD_CREATED, card};
}

export function cardEdit(id, title, text) {
  return {type: CARD_EDIT, id, title, text};
}

export function cardDelete(id) {
  return {type: CARD_DELETE, id};
}

export function cardEdited(card) {
  return {type: CARD_EDITED, card};
}

export function cardDeleted(card) {
  return {type: CARD_DELETED, card};
}
