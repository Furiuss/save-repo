import axios from "axios";

import getRepositoryName from "./repositoryName";

export const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const createSession = async (email, password) => {
  return api.post("/sessions", { email, password });
};

export const getRepositories = async (userId, query) => {
  let url = `/users/${userId}/repositories/`;

  if (query !== "") {
    url += `?q=${query}`;
  }

  return api.get(url);
};

export const createRepository = async (userId, repositoryURL) => {
  const repositoryName = getRepositoryName(repositoryURL);
  let url = `users/${userId}/repositories/`;

  return api.post(url, {
    name: repositoryName,
    url: repositoryURL,
  });
};

export const deleteRepository = async (userId, repositoryId) => {
  let url = `users/${userId}/repositories/${repositoryId}`;

  return api.delete(url);
};
