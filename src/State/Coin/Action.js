import axios from "axios";
import {
  FETCH_COIN_LIST_REQUEST,
  FETCH_COIN_LIST_SUCCESS,
  FETCH_COIN_LIST_FAILURE,
  FETCH_TOP_50_COIN_LIST_REQUEST,
} from "./ActionType.js";
import api, { API_BASE_URL } from "@/config/api.js";

export const getCoinList = (page) => async (dispatch) => {
  dispatch({ type: FETCH_COIN_LIST_REQUEST });
  try {
    const { data } = await axios.post(`${API_BASE_URL}/coins?page=${page}`);
    console.log(data);

    dispatch({ type: FETCH_COIN_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_COIN_LIST_FAILURE, payload: error.message });
    console.log(error);
  }
};

export const getTop50CoinList = () => async (dispatch) => {
  dispatch({ type: FETCH_TOP_50_COIN_LIST_REQUEST });
  try {
    const response = await axios.get(`${API_BASE_URL}/coins/top50`);
    dispatch({ type: FETCH_TOP_50_COIN_LIST_SUCCESS, payload: response.data });
    console.log(response);
  } catch (error) {
    dispatch({ type: FETCH_TOP_50_COIN_LIST_FAILURE, payload: error.message });
    console.log(error);
  }
};

export const fetchMarketChart =
  ({ coinId, days, jwt }) =>
  async (dispatch) => {
    dispatch({ type: FETCH_MARKET_CHART_REQUEST });
    try {
      const response = await api.get(`/coins/${coinId}/chart?days=${days}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({ type: FETCH_MARKET_CHART_SUCCESS, payload: response.data });
      console.log(data);
    } catch (error) {
      dispatch({ type: FETCH_MARKET_CHART_FAILURE, payload: error.message });
      console.log(error);
    }
  };

export const fetchCoinById = (coinId) => async (dispatch) => {
  dispatch({ type: FETCH_COIN_BY_ID_REQUEST });
  try {
    const response = await api.get(`/coins/${coinId}`);
    dispatch({ type: FETCH_COIN_BY_ID_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_COIN_BY_ID_FAILURE, payload: error.message });
    console.log(error);
  }
};

export const fetchCoinDetails =
  ({ coinId, jwt }) =>
  async (dispatch) => {
    dispatch({ type: FETCH_COIN_DETAILS_REQUEST });
    try {
      const response = await api.get(`/coins/details/${coinId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({ type: FETCH_COIN_DETAILS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_COIN_DETAILS_FAILURE, payload: error.message });
      console.log(error);
    }
  };

export const searchCoin = (keyword) => async (dispatch) => {
  dispatch({ type: SEARCH_COIN_REQUEST });
  try {
    const response = await api.get(`/coins/search?q=${keyword}`);
    dispatch({ type: SEARCH_COIN_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: SEARCH_COIN_FAILURE, payload: error.message });
    console.log(error);
  }
};
