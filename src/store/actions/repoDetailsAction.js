import * as types from "../types";

export const fetchRepoDetailsRequest = () => ({
  type: types.FETCH_REPO_DETAILS_REQUEST,
});

export const fetchRepoDetailsSuccess = (repoDetails) => ({
  type: types.FETCH_REPO_DETAILS_SUCCESS,
  payload: repoDetails,
});

export const fetchRepoDetailsFailure = (error) => ({
  type: types.FETCH_REPO_DETAILS_FAILURE,
  payload: error,
});
