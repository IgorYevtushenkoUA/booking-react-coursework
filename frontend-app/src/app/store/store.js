import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {userReducer} from "./additional/user/userReducer";
import {flatReducer} from "./additional/flat/flatReducer";

// todo read what is thunk
export const store = createStore(
    combineReducers({
        user: userReducer,
        flat: flatReducer
    }),
    applyMiddleware(thunk)
);