import {
  MESSAGE_POST,
  MESSAGE_SUCCESS,
  MESSAGE_FAIL,
  GET_MESSAGES_SUCCESS
} from "../actions/";

const initialState = {
  messages: [],
  message_success: false,
  message_fail: false
};
// made changes to code to allow messages to filter through correctly

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGES_SUCCESS:
      return {
        messages: [...action.payload],
        message_success: true,
        message_fail: false
      };
    case MESSAGE_SUCCESS:
      return {
        messages: [action.payload],
        message_success: true,
        message_fail: false
      };
    case MESSAGE_POST:
      const newMessage = { ...action.payload };
      return {
        // ...state,
        messages: [newMessage, ...state.messages]
      };
    case MESSAGE_FAIL:
      return {
        messages: [state],
        message_success: false,
        message_fail: true
      };
    default:
      return state;
  }
};
