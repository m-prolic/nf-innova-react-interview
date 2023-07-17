import axios from "axios";
import { githubApiBaseUrl } from "../utils/constants";
import { notify } from "../utils/notificationHelper";
import { logError } from "../utils/loggerHelper";
import { errorMessages } from "../utils/errorMessages";

const githubApi = axios.create({
  baseURL: githubApiBaseUrl,
});

githubApi.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    notify(errorMessages.somethingWentWrong);
    return Promise.reject(error);
  }
);

export const getUserRepos = async (username) => {
  try {
    const response = await githubApi.get(`/users/${username}/repos`);
    return response.data;
  } catch (error) {
    logError(error, errorMessages.userReposFetching);
    throw error;
  }
};

export const getUserReposPaginated = async (username, page, perPage) => {
  try {
    const response = await githubApi.get(
      `/users/${username}/repos?page=${page}&per_page=${perPage}`
    );
    return response.data;
  } catch (error) {
    logError(error, errorMessages.userReposPaginatedFetching);
    throw error;
  }
};

export const getRepoDetails = async (username, repo) => {
  try {
    const response = await githubApi.get(`/repos/${username}/${repo}`);
    return response.data;
  } catch (error) {
    logError(error, errorMessages.repoDetailsFetching);
    throw error;
  }
};

export const getRepoTags = async (username, repo) => {
  try {
    const response = await githubApi.get(`/repos/${username}/${repo}/tags`);
    return response.data;
  } catch (error) {
    logError(error, errorMessages.repoTagsFetching);
    throw error;
  }
};

export const getReleasesForRepo = async (username, repo) => {
  try {
    const response = await githubApi.get(`/repos/${username}/${repo}/releases`);
    return response.data;
  } catch (error) {
    logError(error, errorMessages.repoReleasesFetching);
    throw error;
  }
};
