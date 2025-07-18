import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [snippets, setSnippets] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSnippets();
  }, []);

  const fetchSnippets = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/snippets");
      const data = await res.json();
      setSnippets(data);
    } catch (err) {
      setError("Failed to fetch snippets");
    }
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this snippet?"
    );
    if (!confirm) return;

    try {
      const res = await fetch(`http://localhost:5000/api/snippets/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        // Remove deleted snippet from state
        setSnippets(snippets.filter((s) => s._id !== id));
      } else {
        const err = await res.json();
        setError(err.error || "Delete failed");
      }
    } catch (err) {
      setError("Something went wrong");
    }
  };

  return (
    <div className="container">
      <h1>CodeSnap</h1>
      <Link to="/add">
        <button style={{ marginBottom: "1rem" }}>Add New Snippet</button>
      </Link>
      {snippets.length === 0 ? (
        <p>No snippets available.</p>
      ) : (
        snippets.map((snippet) => (
          <div key={snippet._id} className="snippet-card">
            <h3>{snippet.title}</h3>
            <p>
              <strong>Language:</strong> {snippet.language}
            </p>
            <pre
              style={{
                backgroundColor: "#f1f1f1",
                padding: "0.6rem",
                borderRadius: "5px",
                overflowX: "auto",
              }}
            >
              {snippet.code}
            </pre>
            <p>
              <strong>Tags:</strong> {snippet.tags}
            </p>
            <div className="snippet-actions">
              <Link to={`/edit/${snippet._id}`}>
                <button style={{ marginRight: "0.5rem" }}>Edit</button>
              </Link>
              <button
                onClick={() => handleDelete(snippet._id)}
                style={{ backgroundColor: "red" }}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
