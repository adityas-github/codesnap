const express = require('express');
const router = express.Router();
const {
createSnippet,
  getAllSnippets,
  getSnippetById,
  deleteSnippet
} = require('../controllers/snippetController');

router.get('/',getAllSnippets);
router.get('/:id',getSnippetById);
router.delete('/:id',deleteSnippet);
router.post('/',createSnippet);

module.exports = router;