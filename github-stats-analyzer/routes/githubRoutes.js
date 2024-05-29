const express = require('express');
const router = express.Router();
const githubController = require('../controllers/githubController');

// GET /api/github/stats/:username
router.get('/stats/:username', githubController.getUserInfo);

// POST /api/github/repositories/:username
router.post('/repositories/:username', githubController.getUserRepositories);

// POST /api/github/commits/:repositoryId
router.post('/commits/:repositoryId', githubController.getRepositoryCommits);

module.exports = router;
