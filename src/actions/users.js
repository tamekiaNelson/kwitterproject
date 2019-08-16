//TODO: create user data store
import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { push } from "connected-react-router";
import { store } from "../index";

const url = domain + "/users/";

export const DELETE_USER = "DELETE_USER";
export const UPLOAD_PICTURE = "UPLOAD_PICTURE";
export const UPLOAD_PICTURE_SUCCESS = "UPLOAD_PICTURE_SUCCESS";
export const UPLOAD_PICTURE_FAILURE = "UPLOAD_PICTURE_FAILURE";

const handleDeleteUser = () => dispatch => {
  const id = store.getState().auth.login.id;
  const token = store.getState().auth.login.token;

  return fetch(url + id, {
    method: "DELETE",
    headers: {
      ...jsonHeaders,
      Authorization: `Bearer ${token}`
    }
  })
    .then(handleJsonResponse)
    .then(result => {
      console.log(result);
    });
};

export const deleteUserThenGoToLoginPage = () => dispatch => {
  return dispatch(handleDeleteUser()).then(() => dispatch(push("/")));
};


export const uploadPicture = formData => (dispatch, getState) => {
  const userId = getState().auth.login.id;
  const token = getState().auth.login.token;
  dispatch({
    type: UPLOAD_PICTURE
  });

  fetch(url + `${userId}/picture`, {
    method: "PUT",
    headers: { Authorization: `Bearer ${token}` },
    body: formData
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: UPLOAD_PICTURE_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({
          type: UPLOAD_PICTURE_FAILURE,
          payload: err
        })
      );
    });
};


// export const uploadPictureThenGetUser = (formData) => {
//   dispatch(uploadPicture(formData)).then(() => dispatch()
// }
