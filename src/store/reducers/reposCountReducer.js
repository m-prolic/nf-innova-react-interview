import * as types from "../types";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const reposCountReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_REPOS_COUNT_REQUEST:
      return { ...state, loading: true, error: null };
    case types.FETCH_REPOS_COUNT_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case types.FETCH_REPOS_COUNT_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default reposCountReducer;
