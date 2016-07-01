import {
  CARD_CREATED,
} from "../constants";

const INITIAL_STATE = {
  items: []
};

export default function cards(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CARD_CREATED: {
      return {...state, cards: [...state.items, action.card]};
    }
    default: {
      return state;
    }
  }
}
