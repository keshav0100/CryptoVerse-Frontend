import axios from "axios";
import toast from "react-hot-toast";
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
  dispatch({ type: REGISTER_REQUEST });
  const baseURL = "http://localhost:5454";
  try {
    const response = await axios.post(`${baseURL}/auth/signup`, userData);
    const user = response.data;
    console.log(user);
    dispatch({ type: REGISTER_SUCCESS, payload: user.jwt });
    localStorage.setItem("jwt", user.jwt);
    // show success toast for registration
    toast.success("Registered successfully", { position: "top-right" });

    // Immediately fetch user data after successful registration
    dispatch(getUser(user.jwt));
  } catch (error) {
    dispatch({ type: REGISTER_FAIL, payload: error.message });
    console.log(error);
    // If backend indicates duplicate email (common HTTP 409) or specific message, show a targeted toast
    const status = error?.response?.status;
    const message = error?.response?.data?.message || error?.message || "Registration failed";
    if (status === 409 || /email.*exist/i.test(message)) {
      toast.error("Email already exists. Try logging in or use a different email.", { position: "top-right" });
    } else {
      toast.error(message, { position: "top-right" });
    }
  }
};

export const login = (userData) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  const baseURL = "http://localhost:5454";
  try {
    const response = await axios.post(`${baseURL}/auth/signin`, userData.data);
    const user = response.data;
    console.log(user);
    dispatch({ type: LOGIN_SUCCESS, payload: user.jwt });
    localStorage.setItem("jwt", user.jwt);
    userData.navigate("/");
    // show success toast
    toast.success("Logged in successfully", { position: "top-right" });

    // Immediately fetch user data after successful login
    dispatch(getUser(user.jwt));
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.message });
    console.log(error);
    // show error toast
    toast.error("Invalid email or password", { position: "top-right" });
  }
};

export const getUser = (jwt) => async (dispatch) => {
  dispatch({ type: GET_USER_REQUEST });
  const baseURL = "http://localhost:5454";
  try {
    const response = await axios.get(`${baseURL}/api/users/profile`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    const user = response.data;
    console.log(user);
    dispatch({ type: GET_USER_SUCCESS, payload: user });
  } catch (error) {
    dispatch({ type: GET_USER_FAIL, payload: error.message });
    console.log(error);
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("jwt");
  dispatch({ type: "LOGOUT" });
};
