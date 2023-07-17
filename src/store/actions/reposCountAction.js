import * as types from "../types";

export const fetchReposCountRquest = () => ({
  type: types.FETCH_REPOS_COUNT_REQUEST,
});

export const fetchReposCountSuccess = (userRepos) => ({
  type: types.FETCH_REPOS_COUNT_SUCCESS,
  payload: userRepos,
});

export const fetchReposCountFailure = (error) => ({
  type: types.FETCH_REPOS_COUNT_FAILURE,
  payload: error,
});
