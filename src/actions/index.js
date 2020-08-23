// Action types
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FAVOURITES";
export const SET_SHOW_FAVOURITES = "SET_SHOW_FAVOURITES";
export const ADD_MOVIE_SEARCH_RESULT = "ADD_MOVIE_SEARCH_RESULT";
export const SHOW_SEARCH = "SHOW_SEARCH";

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

export function handleMovieSearch(movie) {
  const url = `http://www.omdbapi.com/?s=${movie}&&apikey=15a2c860`;
  return async function (dispatch) {
    const response = await fetch(url);
    const data = await response.json();
    if (data.Search) dispatch(addMovieSearchResult(data.Search));
    else dispatch(addMovieSearchResult([]));
  };
}

export function addMovieSearchResult(movies) {
  return {
    type: ADD_MOVIE_SEARCH_RESULT,
    movies,
  };
}

export function setShowSearch(value) {
  return {
    type: SHOW_SEARCH,
    value,
  };
}
