// Import necessary modules and models
const axios = require('axios');
const User = require('../models/User');
const Repository = require('../models/Repository');
const Commit = require('../models/Commit');

// Define controller methods
const githubController = {
  // Retrieves user information from GitHub API
  getUserInfo: async function(req, res, next) {
    const username = req.params.username;
    try {
      // Make request to GitHub API to get user info
      const response = await axios.get(`https://api.github.com/users/${username}`);
      const userData = response.data;

      // Example: Creating a User model instance
      const user = new User({
        username: userData.login,
        name: userData.name,
        bio: userData.bio,
        followers: userData.followers,
        following: userData.following,
        public_repos: userData.public_repos,
        avatar_url: userData.avatar_url,
        html_url: userData.html_url
      });

      // Respond with user data
      res.json(user);
    } catch (error) {
      next(error);
    }
  },

  // Retrieves repositories for a specific user from GitHub API
  getUserRepositories: async function(req, res, next) {
    const username = req.params.username;
    try {
      // Make request to GitHub API to get user repositories
      const response = await axios.get(`https://api.github.com/users/${username}/repos`);
      const repoData = response.data;

      // Example: Storing repositories in the database (not implemented in this example)
      const repositories = repoData.map(repo => {
        return new Repository({
          repoId: repo.id,
          name: repo.name,
          description: repo.description,
          language: repo.language,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          html_url: repo.html_url
        });
      });

      // Respond with repositories data
      res.json(repositories);
    } catch (error) {
      next(error);
    }
  },

  // Retrieves commits for a specific repository from GitHub API
  getRepositoryCommits: async function(req, res, next) {
    const repositoryId = req.params.repositoryId;
    try {
      // Make request to GitHub API to get repository commits
      const response = await axios.get(`https://api.github.com/repos/${repositoryId}/commits`);
      const commitData = response.data;

      // Example: Storing commits in the database (not implemented in this example)
      const commits = commitData.map(commit => {
        return new Commit({
          commitId: commit.sha,
          message: commit.commit.message,
          author: commit.commit.author.name,
          date: commit.commit.author.date,
          html_url: commit.html_url
        });
      });

      // Respond with commits data
      res.json(commits);
    } catch (error) {
      next(error);
    }
  }
};

module.exports = githubController;
