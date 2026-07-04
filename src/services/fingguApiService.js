import axios from 'axios';

export const fingguApiService = {
  fetchGitHubData: async (repo) => {
    const response = await axios.get(`https://api.github.com/repos/${repo}`);
    return response.data;
  },
  fetchGitLabData: async (repo) => {
    const response = await axios.get(`https://gitlab.com/api/v4/projects/${repo}`);
    return response.data;
  }
};