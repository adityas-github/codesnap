const express = require("express");
const router = express.Router();
const {
  createSnippet,
  getAllSnippets,
  getSnippetById,
  deleteSnippet,
  updateSnippet,
} = require("../controllers/snippetController");

router.get("/", getAllSnippets);
router.get("/:id", getSnippetById);
router.delete("/:id", deleteSnippet);
router.post("/", createSnippet);
router.put("/:id", updateSnippet);

module.exports = router;
