import * as types from "../types";

const initialState = {
  data: [],
  loading: false,
  error: null,
  page: 1,
  totalPages: 1,
};

const reposReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_REPOS_REQUEST:
      return { ...state, loading: true, error: null };
    case types.FETCH_REPOS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        page: action.payload.page,
        totalPages: action.payload.totalPages,
      };
    case types.FETCH_REPOS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default reposReducer;
