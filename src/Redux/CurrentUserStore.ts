// import { observable, action } from "mobx";
import { combineReducers, createStore } from "redux";
import { usersReducer } from "./CurrentUserState";

const reducers = combineReducers({
  usersState: usersReducer,
});

// const store_Users = createStore(reducers);
const store = createStore(reducers);

export default store;
