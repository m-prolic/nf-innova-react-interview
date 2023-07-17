import {
  getReleasesForRepo,
  getUserReposPaginated,
} from "../../services/githubService";
import {
  getTotalPages,
  totalPagesValidation,
} from "../../utils/paginationHelper";
import {
  fetchReposFailure,
  fetchReposRquest,
  fetchReposSuccess,
} from "../actions/reposAction";
import { store } from "../store";

export const fetchReposForUserThunk = (username, page, perPage) => {
  return async (dispatch) => {
    dispatch(fetchReposRquest());
    try {
      const repos = await getUserReposPaginated(username, page, perPage);

      const totalItems = store.getState().reposCountReducer.data;
      const totalPages = getTotalPages(totalItems);

      const reposWithReleases = await Promise.all(
        repos.map(async (repo) => {
          const releases = await getReleasesForRepo(username, repo.name);
          return { ...repo, releasesCount: releases.length };
        })
      );

      dispatch(
        fetchReposSuccess(
          reposWithReleases,
          page,
          totalPagesValidation(totalPages)
        )
      );
    } catch (error) {
      dispatch(fetchReposFailure(error.message));
    }
  };
};
