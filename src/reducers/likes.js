import {
  ADD_LIKE,
  ADD_LIKE_SUCCESS,
  ADD_LIKE_FAIL,
  REMOVE_LIKE,
  REMOVE_LIKE_SUCCESS,
  REMOVE_LIKE_FAIL
} from "../actions";

const initialState = {
  toggleLikeLoading: false,
  toggleLikeError: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIKE:
      return {
        ...state,
        toggleLikeLoading: true,
        toggleLikeError: null
      };
    case ADD_LIKE_SUCCESS:
      return {
        ...state,
        toggleLikeLoading: null
      };
    case ADD_LIKE_FAIL:
      return {
        toggleLikeLoading: false,
        toggleLikeError: action.payload
      };
    case REMOVE_LIKE:
      return {
        ...state,
        toggleLikeLoading: true,
        toggleLikeError: null
      };
    case REMOVE_LIKE_SUCCESS:
      return {
        ...state,
        toggleLikeLoading: null
      };
    case REMOVE_LIKE_FAIL:
      return {
        ...state,
        toggleLikeLoading: true,
        toggleLikeError: null
      };
    default:
      return state;
  }
};
