import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { push } from "connected-react-router";

//TODO: DO NOT TOUCH

// action types
export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT = "LOGOUT";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAIL = "LOGOUT_FAIL";

const url = domain + "/auth";

// action creators
const login = loginData => dispatch => {
  dispatch({
    type: LOGIN
  });
  return fetch(url + "/login", {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(loginData)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: LOGIN_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: LOGIN_FAIL, payload: err.message })
      );
    });
};

export const loginThenGoToUserProfile = loginData => dispatch => {
  return dispatch(login(loginData)).then(() => dispatch(push("/profile")));
};

const logout = () => (dispatch, getState) => {
  dispatch({
    type: LOGOUT
  });

  const token = getState().auth.login.token;

  return fetch(url + "/logout", {
    method: "GET",
    headers: { ...jsonHeaders, Authorization: `Bearer ${token}` }
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: LOGOUT_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: LOGOUT_FAIL, payload: err.message })
      );
    });
};

export const logoutThenGoToLanding = () => dispatch => {
  dispatch(push("/"));
  return dispatch(logout());
};
