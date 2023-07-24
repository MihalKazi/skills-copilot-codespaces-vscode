// Create web server

// Import express
const express = require('express');
const router = express.Router();

// Import comment controller
const commentController = require('../controllers/commentController');

// Get all comments
router.get('/', commentController.index);

// Get a comment by id
router.get('/:id', commentController.show);

// Create a new comment
router.post('/', commentController.store);

// Update a comment
router.put('/:id', commentController.update);

// Delete a comment
router.delete('/:id', commentController.destroy);

module.exports = router;