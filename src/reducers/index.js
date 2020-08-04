import { ADD_MOVIES } from "../actions";
const initialMovieState = {
  movies: [],
  favourites: [],
};
export function movies(state = initialMovieState, action) {
  if (action.type === ADD_MOVIES) {
    return { ...state, movies: action.movies };
  }
  return state;
}
