// store.js
import { createStore } from "redux";

const initialState = {
  tagsOrCategories: "",
  slug: "",
  postAllData: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_INNER_DATA":
      return {
        ...state,
        tagsOrCategories: action.payload.tagsOrCategories,
        slug: action.payload.slug,
        postAllData: action.payload.postAllData,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
