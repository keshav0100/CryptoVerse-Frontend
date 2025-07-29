import axios from "axios";
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


export const register = (userData) => async (dispatch) => {
  dispatch({ type: "REGISTER_REQUEST" });
  const baseURL = "http://localhost:5454";
  try {
    const response = await axios.post(`${baseURL}/auth/signup`, userData);
    const user = response.data;
    console.log(user);
    dispatch({ type: "REGISTER_SUCCESS", payload: user.jwt });
  } catch (error) {
    dispatch({ type: "REGISTER_FAIL", payload: error.message });
    console.log(error);
  }
};

export const login = (userData) => async (dispatch) => {
  dispatch({ type: "LOGIN_REQUEST" });
  const baseURL = "http://localhost:5454";
  try {
    const response = await axios.post(`${baseURL}/auth/signin`, userData);
    const user = response.data;
    console.log(user);
    dispatch({ type: "LOGIN_SUCCESS", payload: user.jwt });
  } catch (error) {
    dispatch({ type: "LOGIN_FAIL", payload: error.message });
    console.log(error);
  }
};

export const getUser = (jwt) => async (dispatch) => {
  dispatch({ type: "GET_USER_REQUEST" });
  const baseURL = "http://localhost:5454";
  try {
    const response = await axios.get(`${baseURL}/api/users/profile`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    const user = response.data;
    console.log(user);
    dispatch({ type: "GET_USER_SUCCESS", payload: user.jwt });
  } catch (error) {
    dispatch({ type: "GET_USER_FAIL", payload: error.message });
    console.log(error);
  }
};
