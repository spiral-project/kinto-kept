import {
  CARD_CREATED,
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
    default: {
      return state;
    }
  }
}
