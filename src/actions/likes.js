import { domain, handleJsonResponse, jsonHeaders } from "./constants";
import { updateMessageById } from "./getMessages";

export const REMOVE_LIKE = "REMOVE_LIKE";
export const REMOVE_LIKE_SUCCESS = "REMOVE_LIKE_SUCCESS";
export const REMOVE_LIKE_FAIL = "REMOVE_LIKE_FAIL";
export const ADD_LIKE = "ADD_LIKE";
export const ADD_LIKE_SUCCESS = "ADD_LIKE_SUCCESS";
export const ADD_LIKE_FAIL = "ADD_LIKE_FAIL";

const url = domain + "/likes";

export const toggleLike = messageId => (dispatch, getState) => {
  const userId = getState().auth.login.id;
  let messages = null;
  messages = getState().messages.messages;
  let currentMessage = messages.find(message => {
    return message.id === messageId;
  });
  console.log(currentMessage);

  // }
  const like = currentMessage.likes.find(like => like.userId === userId);
  if (like) {
    return dispatch(removeLike(like.id));
  } else {
    return dispatch(addLike(messageId));
  }
};

export const toggleLikeThenUpdateMessageById = messageId => dispatch => {
  return dispatch(toggleLike(messageId)).then(() =>
    dispatch(updateMessageById(messageId))
  );
};

export const removeLike = likeId => (dispatch, getState) => {
  dispatch({
    type: REMOVE_LIKE
  });
  const token = getState().auth.login.token;
  return fetch(url + `/${likeId}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` }
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: REMOVE_LIKE_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({
          type: REMOVE_LIKE_FAIL,
          payload: err
        })
      );
    });
};

export const addLike = messageId => (dispatch, getState) => {
  dispatch({
    type: ADD_LIKE
  });
  const token = getState().auth.login.token;
  return fetch(url, {
    method: "POST",
    headers: { ...jsonHeaders, Authorization: `Bearer ${token}` },
    body: JSON.stringify({ messageId })
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: ADD_LIKE_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({
          type: ADD_LIKE_FAIL,
          payload: err
        })
      );
    });
};
