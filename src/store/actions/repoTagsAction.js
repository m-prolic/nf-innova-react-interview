import * as types from "../types";

export const fetchRepoTagsRequest = () => ({
  type: types.FETCH_REPO_TAGS_REQUEST,
});

export const fetchRepoTagsSuccess = (repoTags) => ({
  type: types.FETCH_REPO_TAGS_SUCCESS,
  payload: repoTags,
});

export const fetchRepoTagsFailure = (error) => ({
  type: type.FETCH_REPO_TAGS_FAILURE,
  payload: error,
});
