const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Example route for user class methods
// GET /api/user/:userId
// router.get('/:userId', userController.getUserInfo);

// POST /api/user/job-search
router.post('/job-search', userController.getJobSearchResults);

module.exports = router;
