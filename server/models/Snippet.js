const mongoose = require("mongoose");

const snippetSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  code: {
    type: String,
    required: true,
  },
  tags: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Snippet", snippetSchema);
