import { createStore, combineReducers } from "redux";

const reducers = combineReducers({
  pages: 2,
});

export const store = createStore(reducers);
