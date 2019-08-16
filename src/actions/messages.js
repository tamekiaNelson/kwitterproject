import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { store } from "../index";

export const MESSAGE_POST = "MESSAGE_POST";
export const MESSAGE_SUCCESS = "MESSAGE_SUCCESS";
export const MESSAGE_FAIL = "MESSAGE_FAIL";

const url = domain + "/messages";

export const postMessage = messageData => dispatch => {
  const token = store.getState().auth.login.token;
  return fetch(url, {
    method: "POST",
    headers: { ...jsonHeaders, Authorization: `Bearer ${token}` },
    body: JSON.stringify(messageData)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: MESSAGE_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return dispatch({ type: MESSAGE_FAIL, payload: err.message });
    });
};
