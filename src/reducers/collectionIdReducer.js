import { COLLECTION_ID } from "../actions/types";

export const collectionIdReducer = (collectionID = "", action) => {
  switch (action.type) {
    case COLLECTION_ID:
      return action.payload;
    default:
      return collectionID;
  }
};
