import { getUserRepos } from "../../services/githubService";
import {
  fetchReposCountFailure,
  fetchReposCountRquest,
  fetchReposCountSuccess,
} from "../actions/reposCountAction";

export const fetchReposCountForUserThunk = (username) => {
  return async (dispatch) => {
    dispatch(fetchReposCountRquest());
    try {
      const repos = await getUserRepos(username);
      dispatch(fetchReposCountSuccess(repos.length));
    } catch (error) {
      dispatch(fetchReposCountFailure(error.message));
    }
  };
};
