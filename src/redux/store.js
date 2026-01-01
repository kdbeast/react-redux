import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/searchSlice";
import counterReducer from "./features/counterSlice";
import collectionReducer from "./features/collectionSlice";

const store = configureStore({
  reducer: {
    search: searchReducer,
    counter: counterReducer,
    collection: collectionReducer,
  },
});

export default store;
