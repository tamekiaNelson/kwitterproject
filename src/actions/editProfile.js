import { store } from "../index";
import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { push } from "connected-react-router";

export const EDIT_PROFILE = "EDIT_PROFILE";
const url = domain + "/users/";

export const editProfile = data => dispatch => {
  const token = store.getState().auth.login.token;
  const id = store.getState().auth.login.id;

  return fetch(url + id, {
    method: "PATCH",
    headers: {
      ...jsonHeaders,
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: EDIT_PROFILE,
        payload: result.user
      });
    })
    .then(result => {
      dispatch(push("/profile"));
    });
};
// export const editProfileRouting = data => dispatch => {
//     return dispatch(data(data)).then(() => dispatch(push("/profile")));
// };
