import { COLLECTION_LIST } from "../actions/types";

export const collectionListReducer = (collectionList = [], action) => {
  switch (action.type) {
    case COLLECTION_LIST:
      return action.payload;
    default:
      return collectionList;
  }
};
