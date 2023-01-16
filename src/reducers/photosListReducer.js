import { PHOTO_LIST } from "../actions/types";

export const photosListReducer = (photoList = [], action) => {
  switch (action.type) {
    case PHOTO_LIST:
      return action.payload;
    default:
      return photoList;
  }
};
