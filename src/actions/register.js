import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { loginThenGoToUserProfile as login } from "../actions";

export const REGISTER = "REGISTER";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

const url = domain;

const register = registerData => dispatch => {
  console.log(registerData);
  dispatch({
    type: REGISTER
  });
  return fetch(url + "/users", {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(registerData)
  })
    .then(handleJsonResponse)
    .then(result => {
      console.log(result);
      return dispatch({
        type: REGISTER_SUCCESS,
        payload: result
      });
    }).then(result => {
      console.log(result);
    })
    .catch(err => {
      console.warn(err.message);
      return Promise.reject(
        dispatch({ type: REGISTER_FAIL, payload: err.message })
      );
    });
};

export const registerThenGoToUserProfile = registerData => dispatch => {
  return dispatch(register(registerData)).then(() => dispatch(login({
    username: registerData.username,
    password: registerData.password
  }))
  );
};
