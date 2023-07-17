import axios from "axios";
import { githubApiBaseUrl } from "../utils/constants";
import { notify } from "../utils/notificationHelper";

const githubApi = axios.create({
  baseURL: githubApiBaseUrl,
});

githubApi.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    notify("Something went wrong on getting data from Github API");
    return Promise.reject(error);
  }
);

export const getUserRepos = async (username) => {
  try {
    const response = await githubApi.get(`/users/${username}/repos`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user repos:", error);
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
    console.error("Error fetching user repos paginated:", error);
    throw error;
  }
};

export const getRepoDetails = async (username, repo) => {
  try {
    const response = await githubApi.get(`/repos/${username}/${repo}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching repo details:", error);
    throw error;
  }
};

export const getRepoTags = async (username, repo) => {
  try {
    const response = await githubApi.get(`/repos/${username}/${repo}/tags`);
    return response.data;
  } catch (error) {
    console.error("Error fetching repo tags:", error);
    throw error;
  }
};

export const getReleasesForRepo = async (username, repo) => {
  try {
    const response = await githubApi.get(`/repos/${username}/${repo}/releases`);
    return response.data;
  } catch (error) {
    console.error("Error fetching repo releases:", error);
    throw error;
  }
};
