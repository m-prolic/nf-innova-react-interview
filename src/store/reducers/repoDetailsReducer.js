import * as types from "../types";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const repoDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_REPO_DETAILS_REQUEST:
      return { ...state, loading: true, error: null };
    case types.FETCH_REPO_DETAILS_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case types.FETCH_REPO_DETAILS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default repoDetailsReducer;
