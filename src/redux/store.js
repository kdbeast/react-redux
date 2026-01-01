import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import searchReducer from "./features/searchSlice";

const store = configureStore({
  reducer: {
    search: searchReducer,
    counter: counterReducer,
  },
});

export default store;
