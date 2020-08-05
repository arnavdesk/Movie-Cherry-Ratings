// {
//     type:"ADD_MOVIES",
//     movies:[],
// }

// {
//     type:"FAVOURITE",
//     movies:[],
// }

// Action types
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FAVOURITES";
export const SET_SHOW_FAVOURITES = "SET_SHOW_FAVOURITES";

// Action creators
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}

export function addFavourites(movie) {
  return {
    type: ADD_TO_FAVOURITES,
    movie,
  };
}

export function removeFavourites(movie) {
  return {
    type: REMOVE_FROM_FAVOURITES,
    movie,
  };
}

export function setShowFavourites(value) {
  return {
    type: SET_SHOW_FAVOURITES,
    value,
  };
}
