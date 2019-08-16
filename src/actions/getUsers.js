import { domain, handleJsonResponse } from "../actions/constants";

export const GET_USERS = "GET_USERS";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAIL = "GET_USERS_FAIL";

const url = domain + "/users";

export default getUsers => dispatch => {
  // dispatch({ type: GET_USERS });
  fetch(url)
    .then(handleJsonResponse)
    .then(data => {
      return dispatch({
        type: GET_USERS_SUCCESS,
        payload: data
      });
    })
    .catch(err => {
      console.log(err);
      return Promise.reject(
        dispatch({ type: GET_USERS_FAIL, payload: err.message })
      );
    });
};
