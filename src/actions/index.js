import { PHOTO_LIST, KEY_WORDS, COLLECTION_LIST, COLLECTION_ID } from "./types"

export const collectionList = (list) => {
    return {
        type: COLLECTION_LIST,
        payload: list
    }
}

export const photoList = (list) => {
  return {
    type: PHOTO_LIST,
    payload: list,
  };
};

export const keyWords = (term='') => {
    return {
        type: KEY_WORDS,
        payload: term
    }
}

export const collectionId = (id) => {
  return {
    type: COLLECTION_ID,
    payload: id,
  };
};