import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL
} from "../actions/getUsers";
import {
  UPLOAD_PICTURE,
  UPLOAD_PICTURE_SUCCESS,
  UPLOAD_PICTURE_FAILURE
} from "../actions";

const initialState = {
  usersList: [],
  uploadPictureError: null,
  uploadPictureLoading: false,
  getUserError: null,
  user: null,
  getUserLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        usersList: action.payload.users
      };
    case GET_USERS_FAIL:
      return {
        usersList: [...state.users, ...action.payload.users]
      };
    case UPLOAD_PICTURE:
      return {
        ...state,
        uploadPictureLoading: true,
        uploadPictureError: null
      };
    case UPLOAD_PICTURE_SUCCESS:
      return {
        ...state,
        uploadPictureLoading: false
      };
    case UPLOAD_PICTURE_FAILURE:
      return {
        ...state,
        uploadPictureError: action.payload
      };
    default:
      return state;
  }
};
