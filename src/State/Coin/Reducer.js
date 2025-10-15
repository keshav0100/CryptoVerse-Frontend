import { searchCoin } from "./Action";
import * as ActionType from "./ActionType.js";

const initialState = {
  coinList: [],
  top50: [],
  searchCoinList: [],
  marketChart: { data: [], loading: false },
  coinById: null,
  coinDetails: null,
  loading: false,
  error: null,
};

const coinReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_COIN_LIST_REQUEST:
    case ActionType.FETCH_COIN_BY_ID_REQUEST:
    case ActionType.FETCH_COIN_DETAILS_REQUEST:
    case ActionType.SEARCH_COIN_REQUEST:
    case ActionType.FETCH_TOP_50_COIN_LIST_REQUEST:
      return { ...state, loading: true, error: null };

    case ActionType.FETCH_MARKET_CHART_REQUEST:
      return {
        ...state,
        marketChart: { loading: true, data: [] },
        error: null,
      };
    case ActionType.FETCH_COIN_LIST_SUCCESS:
      return {
        ...state,
        coinList: action.payload,
        loading: false,
        error: null,
      };
    case ActionType.FETCH_TOP_50_COIN_LIST_SUCCESS:
      return {
        ...state,
        top50: action.payload,
        loading: false,
        error: null,
      };
    case ActionType.FETCH_MARKET_CHART_SUCCESS:
      return {
        ...state,
        marketChart: { loading: false, data: action.payload.prices },
        error: null,
      };
    case ActionType.FETCH_COIN_BY_ID_SUCCESS:
      return {
        ...state,
        coinById: action.payload,
        loading: false,
        error: null,
      };
    case ActionType.SEARCH_COIN_SUCCESS:
      return {
        ...state,
        searchCoinList: action.payload.coins,
        loading: false,
        error: null,
      };
    case ActionType.FETCH_COIN_DETAILS_SUCCESS:
      return {
        ...state,
        coinDetails: action.payload,
        loading: false,
        error: null,
      };
    case ActionType.FETCH_MARKET_CHART_FAILURE:
      return {
        ...state,
        marketChart: { loading: false, data: [] },
        error: action.payload,
      };
    case ActionType.FETCH_COIN_LIST_FAILURE:
    case ActionType.SEARCH_COIN_FAILURE:
    case ActionType.FETCH_COIN_BY_ID_FAILURE:
    case ActionType.FETCH_COIN_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default coinReducer;
