import {
  CARDS_LOADED,
  CARD_LOADED,
  CARD_CREATED,
  CARD_EDITED,
  CARD_DELETED,
} from "../constants";

const INITIAL_STATE = {
  items: []
};

export default function cards(state = INITIAL_STATE, action) {
  console.log(action.type, action);
  switch (action.type) {
    case CARD_LOADED: {
      const { card } = action;
      return {...state, edited: card};
    }
    case CARDS_LOADED: {
      const { cards } = action;
      return {...state, items: cards};
    }
    case CARD_CREATED: {
      const { card } = action;
      return {...state, items: [...state.items, card]};
    }
    case CARD_EDITED: {
      const { card } = action;
      return {...state, items: state.items.map((item) => {
        return item.id === card.id ? card : item;
      })};
    }
    case CARD_DELETED: {
      const { card } = action;
      return {...state, items: state.items.filter((r) => r.id !== card.id)};
    }
    default: {
      return state;
    }
  }
}
