import {
  CARD_CREATED,
  CARD_DELETED,
} from "../constants";

const INITIAL_STATE = {
  items: []
};

export default function cards(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CARD_CREATED: {
      const { card } = action;
      console.log("CARD_CREATED", card);
      return {...state, items: [...state.items, card]};
    }
    case CARD_DELETED: {
      const { card } = action;
      console.log("CARD_DELETED", card);
      return {...state, items: state.items.filter((r) => r.id !== card.id)};
    }
    default: {
      return state;
    }
  }
}
