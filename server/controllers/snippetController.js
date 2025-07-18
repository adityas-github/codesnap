const Snippet = require("../models/Snippet");

const createSnippet = async (req, res) => {
  try {
    const { title, language, code, description, tags } = req.body;

    const snippet = await Snippet.create({
      title,
      language,
      code,
      description,
      tags,
    });

    res.status(201).json(snippet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllSnippets = async (req, res) => {
  try {
    const snippets = await Snippet.find().sort({ createdAt: -1 });
    res.json(snippets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSnippetById = async (req, res) => {
  try {
    const snippet =await Snippet.findById(req.params.id);
    if (!snippet) {
      res.status(404).json({ error: "Snippet Not Found!" });
    }
    res.json(snippet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const deleteSnippet = async (req, res) => {
  try {
    const deleted = await Snippet.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: "Snippet not found" });
    }
    res.json({ message: "Snippet deleted Successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const updateSnippet = async (req, res) => {
  const { title, language, code, tags } = req.body;
  try {
    const updated = await Snippet.findByIdAndUpdate(
      req.params.id,
      { title, language, code, tags },
      { new: true }
    );
    if (!updated) return res.status(404).json({ error: "Snippet not found" });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  createSnippet,
  getAllSnippets,
  getSnippetById,
  deleteSnippet,
  updateSnippet,
};
