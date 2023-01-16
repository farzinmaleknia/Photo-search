import { combineReducers } from "redux";

import { keyWordsReducer } from "./keyWordsReducer";
import { photosListReducer } from "./photosListReducer";
import { collectionListReducer } from "./collectionListReducer";
import { collectionIdReducer } from "./collectionIdReducer";

export default combineReducers({
  collectionList: collectionListReducer,
  keyWords: keyWordsReducer,
  photoList: photosListReducer,
  collectionID: collectionIdReducer,
});
