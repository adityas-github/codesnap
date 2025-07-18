import React from "react";
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const SnippetCard = ({ snippet, handleDelete }) => {
  const handleCopy = () => {
    navigator.clipboard
      .writeText(snippet.code)
      .then(() => alert("✅ Code copied!"))
      .catch(() => alert("❌ Failed to copy!"));
  };

  return (
    <div
      className="snippet-card"
      style={{
        background: "#f9f9f9",
        padding: "1rem",
        borderRadius: "8px",
        marginBottom: "1rem",
      }}
    >
      <h3>{snippet.title}</h3>
      <p>
        <strong>Language:</strong> {snippet.language}
      </p>

      <div style={{ position: "relative", marginTop: "0.5rem" }}>
        <button
          onClick={handleCopy}
          style={{
            position: "absolute",
            top: "5px",
            right: "5px",
            backgroundColor: "#333",
            color: "#fff",
            border: "none",
            padding: "5px 10px",
            borderRadius: "5px",
            cursor: "pointer",
            zIndex: 2,
          }}
        >
          📋 Copy
        </button>

        <SyntaxHighlighter
          language={snippet.language.toLowerCase()}
          style={oneDark}
          customStyle={{
            borderRadius: "8px",
            padding: "1rem",
            marginTop: "2rem",
            background: "#2d2d2d",
            fontSize: "0.9rem",
          }}
        >
          {snippet.code}
        </SyntaxHighlighter>
      </div>

      <p>
        <strong>Tags:</strong> {snippet.tags}
      </p>

      <div className="snippet-actions" style={{ marginTop: "1rem" }}>
        <Link to={`/edit/${snippet._id}`}>
          <button style={{ marginRight: "0.5rem" }}>✏️ Edit</button>
        </Link>
        <button
          onClick={() => handleDelete(snippet._id)}
          style={{
            backgroundColor: "red",
            color: "#fff",
            padding: "0.4rem 0.8rem",
            border: "none",
            borderRadius: "5px",
          }}
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  );
};

export default SnippetCard;
