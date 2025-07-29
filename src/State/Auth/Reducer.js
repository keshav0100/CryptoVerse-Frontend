import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  GET_USER_REQUEST,
  GET_USER_FAIL,
  GET_USER_SUCCESS,
} from "./ActionTypes.jsx";

const initialState = {
  user: null,
  loading: false,
  error: null,
  jwt: localStorage.getItem("jwt") || null,
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
    case GET_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        jwt: action.payload,
        isAuthenticated: true,
      };

    case GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        user: action.payload,
        isAuthenticated: true,
      };

    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case GET_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        isAuthenticated: false,
      };

    case "LOGOUT":
      return {
        ...initialState,
        jwt: null,
      };

    default:
      return state;
  }
};

export default authReducer;
