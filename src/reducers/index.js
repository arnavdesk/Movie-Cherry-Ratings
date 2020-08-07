import {
  ADD_MOVIES,
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
  SET_SHOW_FAVOURITES,
} from "../actions";
import { combineReducers } from "redux";
const initialMovieState = {
  movies: [],
  favourites: [],
  showFavourites: false,
};
export function movies(state = initialMovieState, action) {
  switch (action.type) {
    case ADD_MOVIES:
      return { ...state, movies: action.movies };
    case ADD_TO_FAVOURITES:
      return { ...state, favourites: [action.movie, ...state.favourites] };
    case REMOVE_FROM_FAVOURITES:
      const filteredFavourites = state.favourites.filter((item) => {
        return item.Title !== action.movie.Title;
      });
      return { ...state, favourites: filteredFavourites };
    case SET_SHOW_FAVOURITES:
      return { ...state, showFavourites: action.value };
    default:
      return state;
  }
}

const initialSearchState = {
  result: {},
};
export function search(state = initialSearchState, action) {
  return state;
}

// const intitalRootState = {
//   movies: initialMovieState,
//   search: initialSearchState,
// };

// export default function rootReducer(state = intitalRootState, action) {
//   return {
//     movies: movies(state.movies, action),
//     search: search(state.search, action),
//   };
// }

export default combineReducers({
  movies,
  search,
});
