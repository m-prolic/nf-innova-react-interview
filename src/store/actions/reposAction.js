import * as types from "../types";

export const fetchReposRquest = () => ({
  type: types.FETCH_REPOS_REQUEST,
});

export const fetchReposSuccess = (userRepos, page, totalPages) => ({
  type: types.FETCH_REPOS_SUCCESS,
  payload: { userRepos, page, totalPages },
});

export const fetchReposFailure = (error) => ({
  type: types.FETCH_REPOS_FAILURE,
  payload: error,
});
