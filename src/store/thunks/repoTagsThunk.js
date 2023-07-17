import { getRepoDetails } from "../../services/githubService";
import {
  fetchRepoDetailsFailure,
  fetchRepoDetailsRequest,
  fetchRepoDetailsSuccess,
} from "../actions/repoDetailsAction";

export const fetchRepoDetailsThunk = (username, repo) => {
  return async (dispatch) => {
    dispatch(fetchRepoDetailsRequest());
    try {
      const repoDetails = await getRepoDetails(username, repo);
      dispatch(fetchRepoDetailsSuccess(repoDetails));
    } catch (error) {
      dispatch(fetchRepoDetailsFailure(error.message));
    }
  };
};
