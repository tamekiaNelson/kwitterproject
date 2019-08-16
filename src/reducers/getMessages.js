import { GET_MESSAGES_SUCCESS, DELETE_MESSAGE } from "../actions";
import {
  GET_USER_MESSAGES,
  GET_USER_MESSAGES_SUCCESS,
  GET_USER_MESSAGES_FAILED,
  UPDATE_MESSAGE,
  UPDATE_MESSAGE_SUCCESS,
  UPDATE_MESSAGE_FAIL
} from "../actions";

const initialState = {
  messages: [],
  getUserMessagesError: null,
  getUserMessagesLoading: false,
  userMessages: [],
  updateMessageByIdLoading: false,
  updateMessageByIdError: null
};
// added GET_Messages file - Tamekia

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGES_SUCCESS:
      return {
        ...state,
        messages: [...state.messages, action.payload.messages]
      };
    case GET_USER_MESSAGES:
      return {
        ...state,
        getUserMessagesLoading: true,
        getUserMessagesError: null
      };
    case GET_USER_MESSAGES_SUCCESS:
      return {
        ...state,
        userMessages: action.payload.messages,
        getUserMessagesLoading: false
      };
    case GET_USER_MESSAGES_FAILED:
      return {
        ...state,
        getUserMessagesError: action.payload,
        getUserMessagesLoading: false
      };
    case DELETE_MESSAGE:
      let newUserMessages = state.userMessages.filter(message => {
        return message.id !== action.payload.id;
      });
      // let newMessages = state.messages.filter(message => {
      //   return message.id !== action.payload.id;
      // });
      return {
        ...state,
        userMessages: newUserMessages
        // messages: newMessages
      };
    case UPDATE_MESSAGE:
      return {
        ...state,
        updateMessageByIdLoading: true,
        updateMessageByIdError: null
      };
    case UPDATE_MESSAGE_SUCCESS:
      const newUserMessages2 = state.userMessages.map(message => {
        return message.id === action.payload.message.id
          ? action.payload.message
          : message;
      });
      const newMessages2 = state.messages.map(message => {
        return message.id === action.payload.message.id
          ? action.payload.message
          : message;
      });
      return {
        ...state,
        updateMessageByIdLoading: false,
        messages: newMessages2,
        userMessages: newUserMessages2
      };
    case UPDATE_MESSAGE_FAIL:
      return {
        ...state,
        updateMessageByIdError: action.payload,
        updateMessageByIdLoading: false
      };
    default:
      return state;
  }
};
