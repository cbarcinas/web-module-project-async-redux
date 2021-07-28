import axios from "axios";

// Action Strings
export const LOADING = "LOADING";
export const ERROR = "ERROR";
export const SUCCESS = "SUCCESS";

// Action Creators

// when this func is invoked it returns the rest of the function i.e. dispatch
export const getCharacters = () => (dispatch) => {
  dispatch({ type: LOADING });
  axios
    .get("https://rickandmortyapi.com/api/character")
    .then((res) => {
      console.log(res);
      dispatch({ type: SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: ERROR, payload: { err } });
    });
};
