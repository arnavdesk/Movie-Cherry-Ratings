import { createStore } from "redux";
import movies from "../reducers/index";

const store = createStore(movies);

export default store;
