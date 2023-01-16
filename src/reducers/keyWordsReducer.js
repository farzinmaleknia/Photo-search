import { KEY_WORDS } from "../actions/types";

export const keyWordsReducer = (keyWords = "", action) => {
  switch (action.type) {
    case KEY_WORDS:
      return action.payload;
    default:
      return keyWords;
  }
};
