import {applyMiddleware, combineReducers, createStore} from "redux";
import {useReducer} from "react";
import thunk from "redux-thunk";


// todo read what is thunk
export const store = createStore(
  combineReducers({
      user: useReducer
  }), applyMiddleware(thunk)
);