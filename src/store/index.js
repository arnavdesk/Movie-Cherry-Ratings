import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";

// Middle ware
// const logger = function ({ dispatch, getState }) {
//   return function (next) {
//     return function (action) {
//       console.log("Action type is : " + action.type);
//       next(action);
//     };
//   };
// };

// Better Syntax
const logger = ({ dispatch, getstate }) => (next) => (action) => {
  if (typeof action !== "function")
    console.log("Action type is : " + action.type);
  next(action);
};

// const thunk = ({ dispatch, getstate }) => (next) => (action) => {
//   if (typeof action === "function") {
//     action(dispatch);
//     return;
//   }
//   next(action);
// };

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
