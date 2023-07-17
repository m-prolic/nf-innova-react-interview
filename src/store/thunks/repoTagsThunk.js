import { getRepoTags } from "../../services/githubService";
import {
  fetchRepoTagsFailure,
  fetchRepoTagsRequest,
  fetchRepoTagsSuccess,
} from "../actions/repoTagsAction";

export const fetchRepoTagsThunk = (username, repo) => {
  return async (dispatch) => {
    dispatch(fetchRepoTagsRequest());
    try {
      const tags = await getRepoTags(username, repo);
      dispatch(fetchRepoTagsSuccess(tags));
    } catch (error) {
      dispatch(fetchRepoTagsFailure(error.message));
    }
  };
};
