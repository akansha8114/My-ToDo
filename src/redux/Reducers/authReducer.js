// src/redux/reducers/authReducer.js
import { LOGIN_USER, LOGOUT_USER, AUTH_ERROR } from '../types';

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        error: null
      };
    case LOGOUT_USER:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: null
      };
    case AUTH_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default authReducer;