import axios from "axios";
import api, { API_BASE_URL } from "@/config/api.js";

import {
  FETCH_COIN_LIST_REQUEST,
  FETCH_COIN_LIST_SUCCESS,
  FETCH_COIN_LIST_FAILURE,
  FETCH_TOP_50_COIN_LIST_REQUEST,
  FETCH_TOP_50_COIN_LIST_SUCCESS,
  FETCH_TOP_50_COIN_LIST_FAILURE,
  FETCH_MARKET_CHART_REQUEST,
  FETCH_MARKET_CHART_SUCCESS,
  FETCH_MARKET_CHART_FAILURE,
  FETCH_COIN_BY_ID_REQUEST,
  FETCH_COIN_BY_ID_SUCCESS,
  FETCH_COIN_BY_ID_FAILURE,
  FETCH_COIN_DETAILS_REQUEST,
  FETCH_COIN_DETAILS_SUCCESS,
  FETCH_COIN_DETAILS_FAILURE,
  SEARCH_COIN_REQUEST,
  SEARCH_COIN_SUCCESS,
  SEARCH_COIN_FAILURE,
} from "./ActionType.js";

/**
 * Get paginated coin list
 * - Uses GET (not POST)
 * - Guards against page=undefined
 * - Works with your /coins?page=...
 */
export const getCoinList =
  (page = 1) =>
  async (dispatch) => {
    dispatch({ type: FETCH_COIN_LIST_REQUEST });
    try {
      const safePage = Number(page) || 1;
      const { data } = await api.get(`/coins`, {
        params: { page: safePage },
      });

      console.log("✅ API Response (Coin List):", data); // <-- ADD THIS HERE

      dispatch({ type: FETCH_COIN_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_COIN_LIST_FAILURE, payload: error.message });
      console.error("getCoinList error:", error);
    }
  };

/**
 * Top 50 coins by market cap
 */
export const getTop50CoinList = () => async (dispatch) => {
  dispatch({ type: FETCH_TOP_50_COIN_LIST_REQUEST });
  try {
    const { data } = await api.get(`/coins/top50`);
    dispatch({ type: FETCH_TOP_50_COIN_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_TOP_50_COIN_LIST_FAILURE, payload: error.message });
    console.error("getTop50CoinList error:", error);
  }
};

/**
 * Market chart for a coin
 * - Matches GET /coins/{coinId}/chart?days=...
 * - JWT header optional
 */
export const fetchMarketChart =
  ({ coinId, days, jwt }) =>
  async (dispatch) => {
    dispatch({ type: FETCH_MARKET_CHART_REQUEST });
    try {
      const headers = jwt ? { Authorization: `Bearer ${jwt}` } : undefined;
      const { data } = await api.get(`/coins/${coinId}/chart`, {
        params: { days },
        headers,
      });
      dispatch({ type: FETCH_MARKET_CHART_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_MARKET_CHART_FAILURE, payload: error.message });
      console.error("fetchMarketChart error:", error);
    }
  };

/**
 * (Optional) If you really need a "by id" fetch from backend
 * NOTE: Your backend doesn't expose GET /coins/{coinId}
 * It exposes GET /coins/details/{coinId}
 * So we call that here.
 */
export const fetchCoinById = (coinId) => async (dispatch) => {
  dispatch({ type: FETCH_COIN_BY_ID_REQUEST });
  try {
    const { data } = await api.get(`/coins/details/${coinId}`);
    dispatch({ type: FETCH_COIN_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_COIN_BY_ID_FAILURE, payload: error.message });
    console.error("fetchCoinById error:", error);
  }
};

/**
 * Coin details (same endpoint as above; keep one of them in your app)
 */
export const fetchCoinDetails =
  ({ coinId, jwt }) =>
  async (dispatch) => {
    dispatch({ type: FETCH_COIN_DETAILS_REQUEST });
    try {
      const headers = jwt ? { Authorization: `Bearer ${jwt}` } : undefined;
      const { data } = await api.get(`/coins/details/${coinId}`, { headers });
      dispatch({ type: FETCH_COIN_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_COIN_DETAILS_FAILURE, payload: error.message });
      console.error("fetchCoinDetails error:", error);
    }
  };

/**
 * Search coin
 * - Uses params to avoid manual string concat edge cases
 */
export const searchCoin = (keyword) => async (dispatch) => {
  dispatch({ type: SEARCH_COIN_REQUEST });
  try {
    const { data } = await api.get(`/coins/search`, {
      params: { q: keyword },
    });
    dispatch({ type: SEARCH_COIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SEARCH_COIN_FAILURE, payload: error.message });
    console.error("searchCoin error:", error);
  }
};
